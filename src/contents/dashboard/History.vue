<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header border-0">
              <h4 class="card-title">
                Transaction History
              </h4>
            </div>
            <div class="card-body pt-0">
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
      histories: []
    }
  },
  mounted () {
    let userEmail
    if (process.browser) {
      localStorage.getItem('firstname')
      localStorage.getItem('lastname')
      userEmail = localStorage.getItem('email')
    }

    axios.get(`https://coinzz.herokuapp.com/api/history/all?email=${userEmail}`)
      .then(res => {
        this.histories = res.data
        // eslint-disable-next-line no-console

        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        console.log(err)
      })
    // eslint-disable-next-line no-console
  }
}
</script>
