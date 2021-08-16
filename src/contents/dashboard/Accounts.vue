<template>
<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6">
                <div class="card profile_card">
                    <div class="card-body">
                        <div class="media">
                            <div class="media-body">
                                <span>Hello</span>
                                <h4 class="mb-2">
                                    {{ firstname }} {{ lastname }}
                                </h4>
                                <p class="mb-1">
                                    <span><i class="fa fa-phone mr-2 text-primary" /></span> {{ phone }}
                                </p>
                                <p class="mb-1">
                                    <span><i class="fa fa-envelope mr-2 text-primary" /></span>
                                    {{ email }}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-6">
                <h6 class="card-title">
                    Wallet
                </h6>
                <div class="card-body">
                    <div>
                        <div class="card balance-widget">
                            <div class="card-body" style="margin-bottom: -50px;">
                                <div class="balance-widget">
                                    <div class="list-unstyled">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h5 class="m-0">
                                                    Bitcoin
                                                </h5>
                                            </div>
                                            <div class="col-lg-6">
                                                <h5>{{balance}} BTC</h5>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h5 class="m-0">
                                                    Naira Balance
                                                </h5>
                                            </div>
                                            <div class="col-lg-6">
                                                {{ Math.ceil(nairaBalance)}} USD
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-lg-12">
                                                <h5 class="m-0">
                                                    Address: {{user.address}}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="card balance-widget">
                            <div class="card-body" style="margin-bottom: -50px;">
                                <div class="balance-widget">
                                    <div class="list-unstyled">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h5 class="m-0">
                                                    Etherum
                                                </h5>
                                            </div>
                                            <div class="col-lg-6">
                                                <h5>{{eth_balance}} ETH</h5>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h5 class="m-0">
                                                    Naira Balance
                                                </h5>
                                            </div>
                                            <div class="col-lg-6">
                                                {{ Math.ceil(nairaBalance)}} USD
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-lg-12">
                                                <h5 class="m-0">
                                                    Address: {{user.eth_address}}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="card balance-widget">
                            <div class="card-body" style="margin-bottom: -5px;">
                                <div class="balance-widget">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <h5 class="m-0">
                                                Bitcoin Cash
                                            </h5>
                                        </div>
                                        <div class="col-lg-6">
                                            <h5>0 BCH</h5>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <h5 class="m-0">
                                                Naira Balance
                                            </h5>
                                        </div>
                                        <div class="col-lg-6">
                                            {{ Math.ceil(nairaBalance)}} USD
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-lg-12">
                                            <h5 class="m-0">
                                                Address: {{user.bch_address}}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">
                            Withdraw
                        </h4>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="form-group mb-3">
                                        <select id="method" class="form-control select_box" name="method" style="width: 335%;">
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
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text"><i class="fa fa-money" /></label>
                                    </div>
                                    <input type="text" class="form-control" placeholder="0.000000344">
                                </div>
                            </div>

                            <button class="btn btn-primary btn-block">
                                Withdraw Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header border-0">
                        <h4 class="card-title">
                            All Activities
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="transaction-table">
                            <div class="table-responsive">
                                <table class="table mb-0 table-responsive-sm">
                                    <tbody>
                                        <tr v-for="history in histories" :key="history.id">
                                            <td>
                                                <span v-if="history.type === 'debit'" class="sold-thumb"><i class="la la-arrow-down" /></span>
                                                <span v-else class="buy-thumb"><i class="la la-arrow-up" /></span>
                                            </td>

                                            <td>
                                                <div v-if="history.type == 'debit'">
                                                    <span class="badge badge-danger">SELL</span>
                                                </div>
                                                <div v-else>
                                                    <span class="badge badge-success">BUY</span>
                                                </div>
                                            </td>
                                            <td>
                                                {{history.status}}
                                            </td>
                                            <td>
                                                {{history.createdAt.substring(0, 10)}}
                                            </td>
                                            <td>
                                                <i class="cc BTC" /> Bitcoin
                                            </td>
                                            <td v-if="history.type == 'credit'">
                                                {{ history.cardType }} *******{{ history.lastFour }}
                                            </td>
                                            <td v-if="history.type == 'debit'">
                                                {{history.mode}}
                                            </td>
                                            <td>
                                                <div class="text-danger" v-if="history.type == 'debit'">
                                                    -{{ history.coins }} BTC
                                                </div>
                                                <div class="text-success" v-else>
                                                    {{ history.coins }} BTC
                                                </div>
                                            </td>
                                            <td>{{ history.amount }}USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import ApexCharts from 'apexcharts'
import app from '@/App.vue'
const axios = require('axios')

export default {
    extends: app,

    data() {
        return {
            email: '',
            firstname: '',
            lastname: '',
            phone: '',
            eth_balance: '',
            bitcoin: {},
            shortlists: [],
            USD: {},
            histories: [],
            balance: {},
            nairaBalance: {},
            user: {}
        }
    },
    mounted() {
        let userEmail;
        let user;
        if (process.browser) {
            this.firstname = localStorage.getItem('firstname')
            this.lastname = localStorage.getItem('lastname')
            this.email = localStorage.getItem('email')
            this.phone = localStorage.getItem('phone')
            userEmail = localStorage.getItem('email')
            user = localStorage.getItem('user')
        }

        axios.get(`https://cryptonew-api.herokuapp.com/api/history?user=${user}`)
            .then(res => {
                this.histories = res.data
                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://cryptonew-api.herokuapp.com/api/balance/eth?email=${userEmail}&coin_type=ETH`)
            .then(res => {
                console.log('balancecoin,', res);
                this.eth_balance = res.data.message
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://cryptonew-api.herokuapp.com/api/balance/coin?email=${userEmail}&coin_type=BTC`)
            .then(res => {
                this.balance = res.data.message
                // eslint-disable-next-line no-unused-vars

            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://cryptonew-api.herokuapp.com/api/get/user?email=${userEmail}`)
            .then(res => {
                this.user = res.data.data
                // eslint-disable-next-line no-console
                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://cryptonew-api.herokuapp.com/api/balance/naira?email=${userEmail}`)
            .then(res => {

                this.nairaBalance = res.data.message != null ? res.data.message : 0
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
    },

    methods: {
        getHistory() {
            axios.get('https://cryptonew-api.herokuapp.com/api/history')
                .then(res => {
                    console.log(res)
                    this.histories = res.data
                    // eslint-disable-next-line no-console

                    // eslint-disable-next-line no-unused-vars
                }).catch(err => {
                    console.log(err)
                })
            // eslint-disable-next-line no-console
        }

    }
}
</script>
