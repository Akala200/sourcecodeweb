<template>
<form name="myform" class="currency_validate">
  <loading :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
         <div class="form-group">
                                    <div class="form-group mb-3">
        <select id="method" class="form-control" name="method" v-model="coin_type">
                                            <option value="">
                                                Select
                                            </option>
                                            <option value="BTC">
                                                BTC
                                            </option>
                                            <option value="ETH">
                                                ETH
                                            </option>
                                            <option value="BCH">
                                                BCH
                                            </option>
                                        </select>
                                    </div>
                            </div>


    <div class="form-group">
        <input v-model="amount" type="number" name="usd_amount" class="form-control" placeholder="125.00 USD" @input="searchInput">
    </div>

    <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
            Total Amount
        </p>
        <h6 class="mb-0">
            USD {{ amount }}
        </h6>
    </div>

    <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
            Variable Fee
        </p>
        <h6 class="mb-0">
        {{ sellrate }}%
        </h6>
    </div>

    <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
           Amount After Fee
        </p>
        <h6 class="mb-0">
            USD {{ afterFee }}
        </h6>
    </div>
     <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
           Coin
        </p>
        <h6 class="mb-0">
         {{ coinAmount }} {{coin_type}}
        </h6>
    </div>

    <button class="btn btn-success btn-block p-2" @click.prevent="sell()">
        SELL COIN
    </button>
</form>
</template>

<script>
import axios from 'axios'

import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
import {
    debounce
} from 'debounce'
import uniqueString from 'unique-string';

import { createToastInterface } from "vue-toastification";
const pluginOptions = {
  timeout: 4000
};

// Create the interface
const toast = createToastInterface(pluginOptions);
export default {
  components: { Loading },

    data() {
        return {
            coin_type: '',
            method: '',
            card: '',
            amount: '',
            usdAmount: '',
            afterFee: '',
            coinAmount: '',
            sellrate: '',
            isLoading: false,
            fullPage: true,
            baseAmount: ''
        }
    },

    methods: {
            onCancel() {
              console.log('User cancelled the loader.')
            },


         searchInput: debounce(function (e) {
            console.log(this.coin_type);
            // make API call here
            axios.get(`https://cryptonew-apis.herokuapp.com/api/convert/sale?amount=${e.target.value}&coin_type=${this.coin_type}`)
                .then(res => {
                   console.log(res)
                    // eslint-disable-next-line no-console
                  this.afterFee =   res.data.amountAfterFee
                  this.coinAmount =   res.data.price

                    // eslint-disable-next-line no-unused-vars
                }).catch(err => {
                    console.log(err)
                })
        }, 800),

        sell() {

            let email
            const amountData = this.afterFee
             if (amountData < 500) {
                      this.$notify({
          group: "foo",
          type: "error",
          title: "Invalid Amount",
          text:
            "You can not buy coin less than 500 Dollars, enter an amount greater than 500 Dollars"
        });
            } else {

            this.isLoading = true

            if (process.browser) {
                email = localStorage.getItem('email')
            }

            const data = {
                email: email,
                amount: amountData,
                coin_type: this.coin_type,
                bitcoin: this.coinAmount,
                flatAmount: this.coinAmount,
            }
            axios.post('https://cryptonew-apis.herokuapp.com/api/withdraw', data).then(res => {
                    // sessionStorage.setItem('token', res.data.token)
                     setTimeout(() => {
        this.isLoading = false
      })
                     this.$notify({
          group: "foo",
          type: "success",
          title: "Transaction Successful",
          text: res.data
        });
      this.$router.push('/dashboard');
                })
                .catch(err => {
                     setTimeout(() => {
        this.isLoading = false
      });
                 console.log(err.response);

      if(err.status = 500) {
                     this.$notify({
          group: "foo",
          type: "error",
          title: "Bad transaction",
          text: err.response.data.message
        });


      } else {
     toast.error(err.response.data.message);
            this.$notify({
          group: "foo",
          type: "error",
          title: "Error",
          text: err.response.data.message
        });

      }
                })
            }

        }
    },

       mounted() {

        let user;
        if (process.browser) {
          this.sellrate = localStorage.getItem('sale_rate')
            localStorage.getItem('lastname')
            userEmail = localStorage.getItem('email')
            user = localStorage.getItem('user')
        }
    }
}
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
    transition: all .3s ease-in-out;
    background: #423a6f;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: .375rem .75rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
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
