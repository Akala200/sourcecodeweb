/* eslint-disable no-unused-vars */
<template>
  <content-body>
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-xxl-4">
        <div class="card balance-widget">
          <div class="card-header border-0 py-0">
            <h4 class="card-title">
              Your Portfolio
            </h4>
          </div>
          <div class="card-body pt-0">
            <div class="balance-widget">
              <div class="total-balance">
                <div class="d-flex">
                  <h3>BTC {{ balance.balance }}</h3>
                </div>
                <div class="d-flex">
                  <h3>NGN {{ Math.ceil(nairaBalance.price /100) }}</h3>
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
                <div class="col-xl-3 col-sm-6 col-6">
                  <div class="chart-stat">
                    <p class="mb-1">
                      24hr Volume
                    </p>
                    <h5> $ {{ Math.ceil(bitcoin.quote.NGN.volume_24h) }}</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                  <div class="chart-stat">
                    <p class="mb-1">
                      Market Cap
                    </p>
                    <h5>{{ Math.ceil(bitcoin.quote.NGN.market_cap) }} NGN</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                  <div class="chart-stat">
                    <p class="mb-1">
                      Circulating Supply
                    </p>
                    <h5>{{ Math.ceil(bitcoin.circulating_supply) }} BTC</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                  <div class="chart-stat">
                    <p class="mb-1">
                      All Time High
                    </p>
                    <h5>1{{ Math.ceil(bitcoin.max_supply) }} BTC</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                  <div class="chart-stat">
                    <p class="mb-1">
                      Typical hold time
                    </p>
                    <h5>15 mins</h5>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                  <div class="chart-stat">
                    <p class="mb-1">
                      7days change
                    </p>
                    <h5>{{ bitcoin.quote.NGN.percent_change_7d }}% </h5>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
                  <div class="chart-stat">
                    <p class="mb-1">
                      24hrs change
                    </p>
                    <h5>{{ bitcoin.quote.NGN.percent_change_24h }}% </h5>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-6">
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
              <div
                v-for="shortlist in shortlists"
                :key="shortlist.id"
                class="col-xl-12 col-lg-6 col-xxl-6"
              >
                <div class="widget-card">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="widget-stat">
                      <div class="coin-title">
                        <h5 class="d-inline-block ml-2 mb-3">
                          {{ shortlist.name }} <span>(24h)</span>
                        </h5>
                      </div>
                      <h4>
                        NGN  {{ Math.ceil(shortlist.quote.NGN.price) }} <span class="badge badge-success ml-2">{{ shortlist.quote.NGN.percent_change_24h }}%</span>
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
                    <tr
                      v-for="history in histories"
                      :key="history.id"
                    >
                      <td>
                        <span
                          v-if="history.type == 'debit'"
                          class="sold-thumb"
                        ><i class="la la-arrow-down" /></span>
                        <span
                          v-else
                          class="buy-thumb"
                        ><i class="la la-arrow-up" /></span>
                      </td>

                      <td>
                        <span
                          v-if="history.type == 'debit'"
                          class="badge badge-danger"
                        >SOLD</span>
                        <span
                          v-if="history.type == 'credit'"
                          class="badge badge-success"
                        >BUY</span>
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
    <b-toast
      id="my-toast"
      variant="warning"
      toaster="b-toaster-top-center"
      solid
    >
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img
            blank
            blank-color="#ff5555"
            class="mr-2"
            width="12"
            height="12"
          />
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
import app from '@/App.vue'
const axios = require('axios')

export default {
  components: { contentBody, currencyForm },
  extends: app,

  data () {
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
      nairaBalance: {}
    }
  },
  mounted () {
    this.getbitcoin()
    // eslint-disable-next-line no-unused-vars
    let userEmail
    if (process.browser) {
      localStorage.getItem('firstname')
      localStorage.getItem('lastname')
      userEmail = localStorage.getItem('email')
    }

    axios.get(`https://coinzz.herokuapp.com/api/history?email=${userEmail}`)
      .then(res => {
        this.histories = res.data
        // eslint-disable-next-line no-console

        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        console.log(err)
      })
    // eslint-disable-next-line no-console

    axios.get(`https://coinzz.herokuapp.com/api/balance/coin?email=${userEmail}`)
      .then(res => {
        this.balance = res.data
        // eslint-disable-next-line no-console

        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        console.log(err)
      })
    // eslint-disable-next-line no-console

    axios.get(`https://coinzz.herokuapp.com/api/balance/naira?email=${userEmail}`)
      .then(res => {
        this.nairaBalance = res.data
        // eslint-disable-next-line no-console

        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        console.log(err)
      })
    // eslint-disable-next-line no-console

    axios.get('https://coinzz.herokuapp.com/api/shortlist')
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

    // shortlist
    getbitcoin () {
      axios.get('https://coinzz.herokuapp.com/api/bitcoin')
        .then(res => {
          this.bitcoin = res.data.data[0]
          // eslint-disable-next-line no-console

          // eslint-disable-next-line no-unused-vars
        }).catch(err => {
          console.log(err)
        })
      // eslint-disable-next-line no-console
    },

    getHistory () {
      axios.get('https://coinzz.herokuapp.com/api/history')
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
