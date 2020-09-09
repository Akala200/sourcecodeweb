<template>
<verification-body>
    <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage"></loading>
    <div class="container">
        <div class="row">
            <h2>Transfer Summary</h2> <a class="btn mr-1">Back</a>
            <div class="row mt-3">
                <h4>Amount : </h4>
                <p class="ml-2" style="font-size: 16px">{{amount}}</p>
            </div>
        </div>

        <div class="row">
            <div class="row mt-3">
                <h4>Amount After Fee : </h4>
                <p class="ml-2" style="font-size: 16px">{{realAmount}}</p>
            </div>
        </div>
        <div class="row">
            <div class="row mt-3">
                <h4>Amount Bitcoin - </h4>
                <p class="ml-2" style="font-size: 16px">{{bitcoin}}</p>
            </div>
        </div>
        <div class="row">
            <div class="row mt-3">
                <h4>Recipient - </h4>
                <p class="ml-2" style="font-size: 16px">{{address}}</p>
            </div>
        </div>
        <div class="row">
            <div class="row mt-3">
                <h4>Coin Wallet - </h4>
                <p class="ml-2">{{wallet}}</p>
            </div>
        </div>
        <div class="row">
            <div class="row mt-3">
                <h4>Fee - </h4>
                <p class="ml-2" style="font-size: 16px">{{fee}}</p>
            </div>
        </div>

        <div class="text-center mt-5">
            <button type="submit" class="btn btn-success pl-5 pr-5" @click.prevent="send()">Send</button>
        </div>
    </div>
</verification-body>
</template>

<script>
import verificationBody from '@/components/dashboard/VerificationBody.vue'
const axios = require('axios')
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default {
    components: {
        verificationBody,
        Loading
    },

    data() {
        return {
            coin: '',
            wallet: '',
            address: '',
            amount: '',
            fee: '3%',
            bitcoin: '',
            realAmount: '',
            flatAmount: '',
            userEmail: '',
            isLoading: false,
            fullPage: true

        }
    },

    methods: {
        send() {
            this.isLoading = true;
            const dataSend = {
                coin: this.coin,
                address: this.address,
                wallet: this.wallet,
                bitcoin: this.bitcoin,
                fee: this.fee,
                realAmount: this.realAmount,
                flatAmount: this.flatAmount,
                email: this.userEmail

            }

            axios.post(`https://modez.herokuapp.com/end`, dataSend)
                .then(res => {
                    console.log(res)
                    Swal.fire({
                        title: 'Transaction successful',
                        text: 'Transaction was successful',
                        icon: 'successful',
                    })
                    this.$router.push('/dashboard');

                    // eslint-disable-next-line no-unused-vars
                }).catch(err => {
                    console.log(err.response.data)
                    Swal.fire({
                        title: err.response.data.message,
                        text: 'Transaction not successful due to an error, kindly try again or rectify the issue',
                        icon: 'error',
                    })
                })

            // simulate AJAX
            setTimeout(() => {
                this.isLoading = false
            }, 5000)

        },
        onCancel() {
            console.log('User cancelled the loader.')
        }

    },

    mounted() {
        let amountSelected;
        let amountNeeded;
        if (process.browser) {
            this.coin = localStorage.getItem('coin');
            this.wallet = localStorage.getItem('wallet');
            this.address = localStorage.getItem('address');
            this.amount = localStorage.getItem('amount');
            this.fee = localStorage.getItem('fee');
            amountSelected = localStorage.getItem('amount');
            this.userEmail = localStorage.getItem('email')
        }

        axios.get(`https://modez.herokuapp.com/onvert?amount=${amountSelected}`)
            .then(res => {
                this.bitcoin = res.data.price
                this.realAmount = res.data.amountAfterFee
                // eslint-disable-next-line no-console
                amountNeeded = res.data.amountAfterFee

                axios.get(`https://modez.herokuapp.com/et/coin?amount=${amountNeeded}`)
                    .then(res => {
                        this.flatAmount = res.data.price
                        // eslint-disable-next-line no-console

                        // eslint-disable-next-line no-unused-vars
                    }).catch(err => {
                        console.log(err)
                    })

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

    }
}
</script>
