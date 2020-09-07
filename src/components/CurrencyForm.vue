<template>
<form name="myform" class="currency_validate">
    <div class="form-group mb-3">
        <div class="input-group-prepend" />
        <select id="currency" class="form-control" name="currency">
            <option value="">
                Select
            </option>
            <option value="bitcoin">
                Bitcoin
            </option>
        </select>
    </div>

    <div class="form-group mb-3">
        <select id="method" class="form-control" name="method">
            <option value="">
                Select
            </option>
            <option value="card">
                Card
            </option>
        </select>
    </div>

    <div class="form-group">
        <input v-model="amount" type="number" name="usd_amount" class="form-control" placeholder="125.00 NGN" @input="searchInput">
    </div>

    <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
            Total Amount
        </p>
        <h6 class="mb-0">
            NGN {{ amount }}
        </h6>
    </div>
     <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
            Fee
        </p>
        <h6 class="mb-0">
          3%
        </h6>
    </div>
    <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
           Amount After Fee
        </p>
        <h6 class="mb-0">
            NGN {{ afterFee }}
        </h6>
    </div>
     <div class="d-flex justify-content-between mb-3">
        <p class="mb-0">
           Bitcoin
        </p>
        <h6 class="mb-0">
            BTC {{ coinAmount }}
        </h6>
    </div>

    <button class="btn btn-success btn-block p-2" @click.prevent="buy()">
        BUY COIN
    </button>
</form>
</template>

<script>
import axios from 'axios'
import {
    debounce
} from 'debounce'

export default {

    data() {
        return {
            currency: '',
            method: '',
            card: '',
            amount: '',
            usdAmount: '',
            afterFee: '',
            coinAmount: ''
        }
    },

    methods: {
        searchInput: debounce(function (e) {
            // make API call here
            axios.get(`https://coinzz.herokuapp.com/api/convert?amount=${e.target.value}`)
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
        
        buy() {
            let email
            if (process.browser) {
                email = localStorage.getItem('email')
            }

            const amountData = this.amount
            const data = {
                email: email,
                amount: amountData,
                bitcoin: coinAmount
            }
            axios.post('https://coinzz.herokuapp.com/api/credit', data).then(res => {
                    // sessionStorage.setItem('token', res.data.token)
                    window.location.href = res.data.authorization_url
                })
                .catch(err => {
                    console.log(err)
                })
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
