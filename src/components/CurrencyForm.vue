<template>
  <form name="myform" class="currency_validate">
    <div class="form-group mb-3">
      <div class="input-group-prepend" />
      <select
        id="currency"
        class="form-control"
        name="currency"
        v-model="coin_type"
      >
        <option value="">
          Select
        </option>
        <option v-bind:value="{ coin_type: 'BTC' }">
          Bitcoin
        </option>
        <option v-bind:value="{ coin_type: 'ETH' }">
          Etherum
        </option>
        <option v-bind:value="{ coin_type: 'BCH' }">
          BCH
        </option>
      </select>
    </div>

    <div class="form-group mb-3">
      <select id="method" class="form-control select_box" name="method">
        <option value="">
          Select
        </option>
        <option value="card">
          Card
        </option>
      </select>
    </div>

    <div class="form-group">
      <input
        v-model="amount"
        type="number"
        name="usd_amount"
        class="form-control"
        placeholder="125.00 USD"
        @input="searchInput"
      />
    </div>

    <div class="d-flex justify-content-between mb-3">
      <p class="mb-0">
        Total Amount
      </p>
      <h6 class="mb-0">USD {{ amount }}</h6>
    </div>

    <div class="d-flex justify-content-between mb-3">
      <p class="mb-0">
        Variable Fee
      </p>
      <h6 class="mb-0">
        {{buyRate}}%
      </h6>
    </div>
    <div class="d-flex justify-content-between mb-3">
      <p class="mb-0">
        Amount After Fee
      </p>
      <h6 class="mb-0">USD {{ afterFee }}</h6>
    </div>

    <div class="d-flex justify-content-between mb-3">
      <p class="mb-0">
        Coin
      </p>
      <h6 class="mb-0">{{ coin_type.coin_type }} {{ coinAmount }}</h6>
    </div>

    <div><p>For transaction above $1000 kindly reach out to us via chat icon or email</p></div>

    <button class="btn btn-success btn-block p-2" @click.prevent="buy()">
      BUY COIN
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { debounce } from "debounce";
import uniqueString from "unique-string";

import { createToastInterface } from "vue-toastification";
const pluginOptions = {
  timeout: 4000
};

// Create the interface
const toast = createToastInterface(pluginOptions);
export default {
  data() {
    return {
      currency: "",
      method: "",
      card: "",
      amount: "",
      buyRate: "",
      usdAmount: "",
      coin_type: "",
      afterFee: "",
      coinAmount: ""
    };
  },

  methods: {
    searchInput: debounce(function(e) {
      console.log(this.coin_type.coin_type);
      // make API call here
      axios
        .get(
          `https://cryptonew-apis.herokuapp.com/api/convert?amount=${e.target.value}&coin_type=${this.coin_type.coin_type}`
        )
        .then(res => {
          console.log(res);
          // eslint-disable-next-line no-console
          this.afterFee = res.data.amountAfterFee;
          this.coinAmount = res.data.price;

          // eslint-disable-next-line no-unused-vars
        })
        .catch(err => {
          console.log(err);
        });
    }, 800),

    buy() {
      let email;
      let phone;
      const amountData = this.amount;
      const coin_type = this.coin_type;
      const coinAmount = this.coinAmount;

      if (process.browser) {
        email = localStorage.getItem("email");
        phone = localStorage.getItem("phone");
      }

      if (amountData < 24) {

         this.$notify({
          group: "foo",
          type: "error",
          title: "Invalid Amount",
          text:
            "You can not buy coin less than 3 Dollars, enter an amount greater than 5 Dollars"
        });
      } else {
        const initiatedData = {
          coin_type: this.coin_type.coin_type,
          bitcoin: this.coinAmount,
          email: email,
        };
        axios
          .put(
            "https://cryptonew-apis.herokuapp.com/api/initiated/payment",
            initiatedData
          )
          .then(res => {
            console.log(res);
            const API_publicKey = "FLWPUBK-3415f0906111399b6bbfb93372e09f4d-X";
            const id = uniqueString();

           FlutterwaveCheckout({
      public_key: API_publicKey,
      tx_ref: id,
      amount: amountData,
      currency: "NGN",
      country: 'NG',
      payment_options: "card",
      redirect_url: "https://www.sourcecodexchange.com/dashboardsuccessful_payment",
      meta: {
        metaname: "userID",
        metavalue: "userID"
      },
      customer: {
        email: email,
        phone_number: phone,
        name: "",
      },
      callback: function (data) {
      },
      onclose: function() {
        // close modal
         toast.error('Could not complete payment');
            this.$notify({
          group: "foo",
          type: "error",
          title: "Payment Error",
          text:
            "Could not complete payment"
        });
      },
    });

          })
          .catch(err => {

            console.log(err);
            this.$notify({
          group: "foo",
          type: "error",
          title: "Payment Error",
          text: err
        });

          });
      }
    }
  },

    mounted() {

        let user;
        if (process.browser) {
          this.buyRate = localStorage.getItem('buy_rate')
            localStorage.getItem('lastname')
            userEmail = localStorage.getItem('email')
            user = localStorage.getItem('user')
        }
    }
};
</script>

<style scoped>
.form-group .form-control {
  border-radius: 15px;
  min-height: 50px;
  border: 1px solid #423a6f;
  padding: 0px 22px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s ease-in-out;
  background: #423a6f;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button,
input {
  overflow: visible;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

* {
  outline: none;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

user agent stylesheet input[type="text"i] {
  padding: 1px 2px;
}

user agent stylesheet input:-internal-autofill-selected {
  appearance: menulist-button;
  background-color: rgb(232, 240, 254) !important;
  background-image: none !important;
  color: -internal-light-dark(black, white) !important;
}

user agent stylesheet input {
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
  border-image: initial;
}
</style>
