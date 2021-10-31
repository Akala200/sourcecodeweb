<template>
  <content-body>
    <div class="row">
      <div class="col-xl-5 col-lg-4 col-md-12 mx-auto">
        <div class="card">
          <div class="card-body">
            <div class="buy-sell-widget">
              <b-tabs>
                <b-tab title="Buy">
                  <currency-form />
                </b-tab>
                <b-tab title="Sell">
                   <withdraw />
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
        <p class="p-4">
          Note: Withdrawal of funds will take up to three 24hrs before you recieve a credit alert!
        </p>
      </div>
    </div>
    <div class="row">
      <div class=" col-lg-12 text-center">
        <div class="container">
          <div class="card">
            <div class="card-header border-0 py-0">
              <h4 class="card-title">
                Transaction History
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
                                                <div  class="text-success" v-else>
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
  </content-body>
</template>

<script>
import contentBody from '@/components/dashboard/ContentBody.vue'
import currencyForm from '@/components/CurrencyForm.vue'
import Withdraw from '@/components/Withdraw.vue'

import app from '@/App.vue'
import axios from 'axios'

export default {
  components: { currencyForm, contentBody, Withdraw },
  extends: app,

  data () {
    return {
      histories: []
    }
  },
  mounted () {
    let userEmail;
    let user;
    if (process.browser) {
      localStorage.getItem('firstname')
      localStorage.getItem('lastname')
      userEmail = localStorage.getItem('email')
     user = localStorage.getItem('user')

    }

    axios.get(`https://cryptonew-apis.herokuapp.com/api/history?user=${user}`)
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
