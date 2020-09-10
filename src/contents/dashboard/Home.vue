/* eslint-disable no-unused-vars */
<template>
<content-body>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-xxl-4">
            <div class="card balance-widget">
                <div class="card-header border-0 py-0">
                    <div class="row">
                        <div class="col-6">
                            <b-button @click.prevent="callModal()">Send</b-button>
                        </div>
                        <div class="col-6">
                            <b-button @click.prevent="callModal2()">Receive</b-button>
                        </div>
                    </div>
                                        <sweet-modal modal-theme="dark" overlay-theme="dark" ref="modal2">
                                                <div class="container">
                                                    <h3 class="mb-5">Copy Wallet Address</h3>
                                                 <h5>{{user.address}}</h5>
                                                </div>

                                        </sweet-modal>
                    <sweet-modal modal-theme="dark" overlay-theme="dark" ref="modal1">
                        <div class="container  d-none d-lg-block">
                            <div class="d-flex">
                                <img src="/images/pl.png" alt="" class="pl">
                                <h4 class="tx">Send Bitcoin</h4>
                            </div>
                        </div>
                        <br /><br />
                        <div class="container">
                            <div class="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <span>Currency</span>
                                        <select class="select-css" v-model="coin">
                                            <option>Select Coin</option>
                                            <option> <i class="cc BTC mr-3" /> Bitcoin</option>
                                        </select>
                                    </div>
                                     <div class="col-lg-6">
                                        <span>From</span>
                                        <select class="select-css" v-model="wallet">
                                            <option>Select Wallet</option>
                                            <option>Bitcoin Wallet</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-lg-12">
                                        <span>To</span>
                                          <input type="text" class="form-control input-css" id="exampleInputEmail1" v-model="address" aria-describedby="emailHelp" placeholder="Paste Wallet Address">
                                    </div>
                                </div>
                                  <div class="row mt-4">
                                    <div class="col-lg-6">
                                        <span>Amount</span>
                                        <input type="text" class="form-control input-css" id="exampleInputEmail1" v-model="amount" aria-describedby="emailHelp" placeholder="₦0.00">
                                    </div>
                                     <div class="col-lg-6">
                                        <span>Fee</span>
                                         <input type="text" class="form-control input-css" id="exampleInputEmail1" v-model="fee" aria-describedby="emailHelp" disabled>
                                    </div>
                                </div>

                                 <div class="row mt-4">
                                     <div class="col-lg-12">
                                         <button class="btn btn-success buttn"  @click.prevent="nextPage()">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </sweet-modal>
                </div>

                <div class="card-body pt-0">
                    <div class="balance-widget">
                        <div class="total-balance">
                            <div class="d-flex">
                                <h3>BTC {{ balance.balance }}</h3>
                            </div>
                            <div class="d-flex">
                                <h3>NGN {{ Math.ceil(nairaBalance.price) }}</h3>
                            </div>
                            <h6>Total Balance</h6>
                        </div>
                        <ul class="list-unstyled">
                            <li class="media">
                                <i class="cc BTC mr-3" />
                                <div class="media-body">
                                    <h5 class="m-0">
                                        Bitcoin
                                    </h5>
                                </div>
                                <div class="text-right">
                                    <h5>1 BTC</h5>
                                    <span>{{ Math.ceil(bitcoin.quote.NGN.price) }} NGN</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-lg-8 col-xxl-8">
            <div class="card profile_chart">
                <div class="card-header py-0" />
                <div class="card-body mt-5">
                    <div class="chart-content text-center">
                        <div class="row">
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        24hr Volume
                                    </p>
                                    <h5> $ {{ Math.ceil(bitcoin.quote.NGN.volume_24h) }}</h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        Market Cap
                                    </p>
                                    <h5>{{ Math.ceil(bitcoin.quote.NGN.market_cap) }} NGN</h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        Circulating Supply
                                    </p>
                                    <h5>{{ Math.ceil(bitcoin.circulating_supply) }} BTC</h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        All Time High
                                    </p>
                                    <h5>1{{ Math.ceil(bitcoin.max_supply) }} BTC</h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        Typical hold time
                                    </p>
                                    <h5>15 mins</h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        7days change
                                    </p>
                                    <h5>{{ bitcoin.quote.NGN.percent_change_7d }}% </h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        24hrs change
                                    </p>
                                    <h5>{{ bitcoin.quote.NGN.percent_change_24h }}% </h5>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6 col-6">
                                <div class="chart-stat">
                                    <p class="mb-1">
                                        1hr change
                                    </p>
                                    <h5>{{ bitcoin.quote.NGN.percent_change_1h }}%</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-12 col-xxl-12">
            <div class="card">
                <div class="card-header border-0 py-0">
                    <h4 class="card-title">
                        Follow
                    </h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div v-for="shortlist in shortlists" :key="shortlist.id" class="col-xl-12 col-lg-6 col-xxl-6">
                            <div class="widget-card">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="widget-stat">
                                        <div class="coin-title">
                                            <h5 class="d-inline-block ml-2 mb-3">
                                                {{ shortlist.name }} <span>(24h)</span>
                                            </h5>
                                        </div>
                                        <h4>
                                            NGN {{ Math.ceil(shortlist.quote.NGN.price) }} <span class="badge badge-success ml-2">{{ shortlist.quote.NGN.percent_change_24h }}%</span>
                                        </h4>
                                    </div>
                                    <div id="btcChart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-xxl-4">
            <div class="card">
                <div class="card-header border-0 py-0">
                    <h4 class="card-title">
                        Exchange
                    </h4>
                </div>
                <div class="card-body">
                    <div class="buy-sell-widget">
                        <currency-form />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-lg-8 col-xxl-8">
            <div class="card">
                <div class="card-header border-0 py-0">
                    <h4 class="card-title">
                        Recent Activities
                    </h4>
                    <a href="#">View More </a>
                </div>
                <div class="card-body">
                    <div class="transaction-table">
                        <div class="table-responsive">
                            <table class="table mb-0 table-responsive-sm">
                                <tbody>
                                    <tr v-for="history in histories" :key="history.id">
                                        <td>
                                            <span v-if="history.type == 'debit'" class="sold-thumb"><i class="la la-arrow-down" /></span>
                                            <span v-else class="buy-thumb"><i class="la la-arrow-up" /></span>
                                        </td>

                                        <td>
                                            <span v-if="history.type == 'debit'" class="badge badge-danger">SOLD</span>
                                            <span v-if="history.type == 'credit'" class="badge badge-success">BUY</span>
                                        </td>
                                        <td>
                                            <i class="cc BTC" /> Bitcoin
                                        </td>
                                        <td>
                                            {{ history.cardType }} *******{{ history.lastFour }}
                                        </td>
                                        <td class="text-danger">
                                            <div v-if="history.type == 'debit'">
                                                -{{ history.coins }} BTC
                                            </div>
                                            <div v-else>
                                                {{ history.coins }} BTC
                                            </div>
                                        </td>
                                        <td>{{ history.amount }}NGN</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <b-toast id="my-toast" variant="warning" toaster="b-toaster-top-center" solid>
        <template v-slot:toast-title>
            <div class="d-flex flex-grow-1 align-items-baseline">
                <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12" />
                <strong class="mr-auto">Complete your payment!</strong>
                <small class="text-muted mr-2">42 seconds ago</small>
            </div>
        </template>
        Complete your payment to make it easier to exchange.
        It is short and to the point.
    </b-toast>
</content-body>
</template>

<script>
import contentBody from '@/components/dashboard/ContentBody.vue'
import currencyForm from '@/components/CurrencyForm.vue'
// eslint-disable-next-line no-unused-vars
import ApexCharts from 'apexcharts'
import {
    SweetModal,
    SweetModalTab
} from 'sweet-modal-vue'

import app from '@/App.vue'
const axios = require('axios')

export default {
    components: {
        contentBody,
        currencyForm,
        SweetModal,
        SweetModalTab
    },
    extends: app,

    data() {
        return {
            activeDurationOption: 0,

            durationOptions: {
                'all': 'ALL',
                'one_month': '1M',
                'six_months': '6M',
                'one_year': '1Y',
                'ytd': 'YTD'
            },
            bitcoin: {},
            shortlists: [],
            NGN: {},
            histories: [],
            balance: {},
            nairaBalance: {},
            user: {},
            coin: '',
            wallet: '',
            address: '',
            amount: '',
            fee: '3%'

        }
    },
    mounted() {
        this.getbitcoin()
        // eslint-disable-next-line no-unused-vars
        let userEmail
        if (process.browser) {
            localStorage.getItem('firstname')
            localStorage.getItem('lastname')
            userEmail = localStorage.getItem('email')
        }

        axios.get(`https://modez.herokuapp.com/api/history?email=${userEmail}`)
            .then(res => {
                this.histories = res.data
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://modez.herokuapp.com/api/get/user?email=${userEmail}`)
            .then(res => {
                this.user = res.data.data
                // eslint-disable-next-line no-console
                console.log(this.user)

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://modez.herokuapp.com/api/balance/coin?email=${userEmail}`)
            .then(res => {
                this.balance = res.data
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://modez.herokuapp.com/api/balance/naira?email=${userEmail}`)
            .then(res => {
                this.nairaBalance = res.data
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get('https://modez.herokuapp.com/api/shortlist')
            .then(res => {
                this.shortlists = res.data.data
                // eslint-disable-next-line no-console
                console.log(this.shortlists)
                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })

        this.$bvToast.show('my-toast')
    },

    methods: {

        // shortlist callModal
        getbitcoin() {
            axios.get('https://modez.herokuapp.com/api/bitcoin')
                .then(res => {
                    this.bitcoin = res.data.data[0]
                    // eslint-disable-next-line no-console

                    // eslint-disable-next-line no-unused-vars
                }).catch(err => {
                    console.log(err)
                })
            // eslint-disable-next-line no-console
        },

          // shortlist callModal
        nextPage() {
            if (process.browser) {
            localStorage.setItem('coin', this.coin);
            localStorage.setItem('wallet', this.wallet);
            localStorage.setItem('address', this.address);
            localStorage.setItem('amount', this.amount);
            localStorage.setItem('fee', this.fee);
        }
          this.$router.push('complete')
        },

        callModal() {
            this.$refs.modal1.open()
        },

        callModal2() {
            this.$refs.modal2.open()
        },

        getHistory() {
            axios.get('https://modez.herokuapp.com/api/history')
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

<style scoped>
.pl {
    width: 40px;
    margin-top: -10px;
    margin-right: 10px;
}

.mt {
    color: #000;
}

.tx {
    font-size: 19px;
}

.buttn {
    width: 100%;
}
.input-css {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    height: 50px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient. 
        for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference
        
    */
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right .7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: .65em auto, 100%;
}
/* class applies to select element itself, not a wrapper element */
.select-css {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    height: 50px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient. 
        for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference
        
    */
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right .7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: .65em auto, 100%;
}
/* Hide arrow icon in IE browsers */
.select-css::-ms-expand {
    display: none;
}
/* Hover style */
.select-css:hover {
    border-color: #888;
}
/* Focus style */
.select-css:focus {
    border-color: #aaa;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222; 
    outline: none;
}

/* Set options to normal weight */
.select-css option {
    font-weight:normal;
}

/* Support for rtl text, explicit support for Arabic and Hebrew */
*[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css {
    background-position: left .7em top 50%, 0 0;
    padding: .6em .8em .5em 1.4em;
}

/* Disabled styles */
.select-css:disabled, .select-css[aria-disabled=true] {
    color: graytext;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
}

.select-css:disabled:hover, .select-css[aria-disabled=true] {
    border-color: #aaa;
}


</style>
