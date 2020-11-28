<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6">
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
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="card acc_balance">
            <div class="card-header">
              <h6 class="card-title">
                Wallet
              </h6>
            </div>
            <div class="card-body">
            <div>
            <span>Wallet ID</span>
            <h5>{{user.guid}}</h5>
            </div>
            <div>
            <span>Wallet Address</span>
            <h5>{{user.address}}</h5>
            </div>
              <span>Available BTC</span>
              <h5>{{ balance.balance }} BTC</h5>

              <div class="mb-3">
                <span>NGN Value</span>
                <h5>{{ nairaBalance.price }} NGN</h5>
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
                    <div class="input-group-prepend">
                      <label class="input-group-text"><i class="fa fa-money" /></label>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="5000 BTC"
                    >
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

  data () {
    return {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      bitcoin: {},
      shortlists: [],
      NGN: {},
      histories: [],
      balance: {},
      nairaBalance: {},
      user: {}
    }
  },
  mounted () {
    let userEmail
    if (process.browser) {
      this.firstname = localStorage.getItem('firstname')
      this.lastname = localStorage.getItem('lastname')
      this.email = localStorage.getItem('email')
      this.phone = localStorage.getItem('phone')
      userEmail = localStorage.getItem('email')
    }

    axios.get(`https://coinzz.herokuapp.com/api/history?email=${userEmail}`)
      .then(res => {
        this.histories = res.data
        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        console.log(err)
      })
    // eslint-disable-next-line no-console

    axios.get(`https://coinzz.herokuapp.com/api/balance/coin?email=${userEmail}`)
      .then(res => {
          this.balance = res.data.message
        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        console.log(err)
      })
    // eslint-disable-next-line no-console

      axios.get(`https://coinzz.herokuapp.com/api/get/user?email=${userEmail}`)
      .then(res => {
        this.user = res.data.data
        // eslint-disable-next-line no-console
         console.log(this.user)

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
  },

  methods: {
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
