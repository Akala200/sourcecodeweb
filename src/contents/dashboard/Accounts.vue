<template>
  <div class="content-body">
        <loading :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="card profile_card">
            <div class="card-body">
              <div class="media">
                <div class="media-body">
                  <span>Hello</span>
                  <h4 class="mb-2">{{ firstname }} {{ lastname }}</h4>
                  <p class="mb-1">
                    <span><i class="fa fa-phone mr-2 text-primary"/></span>
                    {{ phone }}
                  </p>
                  <p class="mb-1">
                    <span><i class="fa fa-envelope mr-2 text-primary"/></span>
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
                          <h5>{{ balance }} BTC</h5>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <h5 class="m-0">
                            Dollar Balance
                          </h5>
                        </div>
                        <div class="col-lg-6">
                          {{ Math.ceil(nairaBalance) }} USD
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-lg-12">
                          <h5 class="m-0">Address: {{ user.address }}</h5>
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
                          <h5>{{ eth_balance }} ETH</h5>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <h5 class="m-0">
                            Dollar Balance
                          </h5>
                        </div>
                        <div class="col-lg-6">
                          {{ Math.ceil(eth_balance_naira) }} USD
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-lg-12">
                          <h5 class="m-0">Address: {{ user.eth_address }}</h5>
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
                          Dollar Balance
                        </h5>
                      </div>
                      <div class="col-lg-6">
                        {{ Math.ceil(bch_balance_naira) }} USD
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-lg-12">
                        <h5 class="m-0">Address: {{ user.bch_address }}</h5>
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
                Sell Coin
              </h4>
            </div>
            <div class="card-body">
              <form action="">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="form-group mb-3">
                      <select
                        id="method"
                        class="form-control select_box"
                        name="method"
                        style="width: 335%;"
                         v-model="coin_type"
                      >
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
                      <label class="input-group-text"
                        ><i class="fa fa-money"
                      /></label>
                    </div>
                    <input v-model="amount" type="number" name="usd_amount" class="form-control" placeholder="125.00 USD" @input="searchInput"/>
                  </div>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <p class="mb-0">
                    Total Amount
                  </p>
                  <h6 class="mb-0">USD {{ amount }}</h6>
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
                  <h6 class="mb-0">{{ coin_type }} {{ coinAmount }}</h6>
                </div>

                <button class="btn btn-primary btn-block" @click.prevent="sell()">
                  Sell
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
                          <span
                            v-if="history.type === 'debit'"
                            class="sold-thumb"
                            ><i class="la la-arrow-down"
                          /></span>
                          <span v-else class="buy-thumb"
                            ><i class="la la-arrow-up"
                          /></span>
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
                          {{ history.status }}
                        </td>
                        <td>
                          {{ history.createdAt.substring(0, 10) }}
                        </td>
                        <td><i class="cc BTC" /> Bitcoin</td>
                        <td v-if="history.type == 'credit'">
                          {{ history.cardType }} *******{{ history.lastFour }}
                        </td>
                        <td v-if="history.type == 'debit'">
                          {{ history.mode }}
                        </td>
                        <td>
                          <div
                            class="text-danger"
                            v-if="history.type == 'debit'"
                          >
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
import ApexCharts from "apexcharts";
import app from "@/App.vue";
import axios from 'axios'
import {
    debounce
} from 'debounce'
import uniqueString from 'unique-string';
import { createToastInterface } from "vue-toastification";

  import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

const pluginOptions = {
  timeout: 4000
};

// Create the interface
const toast = createToastInterface(pluginOptions);

export default {
  extends: app,
  components: { Loading },

  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      amount: "",
      bch_balance_naira: "",
      eth_balance_naira: "",
      coin_type: "",
      afterFee:"",
      eth_balance: "",
      coinAmount: "",
      bitcoin: {},
      shortlists: [],
      USD: {},
      histories: [],
      balance: {},
      nairaBalance: {},
      user: {}
    };
  },
  mounted() {
    let userEmail;
    let user;
    if (process.browser) {
      this.firstname = localStorage.getItem("firstname");
      this.lastname = localStorage.getItem("lastname");
      this.email = localStorage.getItem("email");
      this.phone = localStorage.getItem("phone");
      userEmail = localStorage.getItem("email");
      user = localStorage.getItem("user");
    }

    axios
      .get(`https://cryptonew-apis.herokuapp.com/api/history?user=${user}`)
      .then(res => {
        this.histories = res.data;
        // eslint-disable-next-line no-unused-vars
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line no-console

    axios
      .get(
        `https://cryptonew-apis.herokuapp.com/api/balance/eth?email=${userEmail}&coin_type=ETH`
      )
      .then(res => {
        console.log("balancecoin,", res);
        this.eth_balance = res.data.message;
        // eslint-disable-next-line no-console

        // eslint-disable-next-line no-unused-vars
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line no-console

    axios
      .get(
        `https://cryptonew-apis.herokuapp.com/api/balance/coin?email=${userEmail}&coin_type=BTC`
      )
      .then(res => {
        this.balance = res.data.message;
        // eslint-disable-next-line no-unused-vars
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line no-console

    axios
      .get(
        `https://cryptonew-apis.herokuapp.com/api/get/user?email=${userEmail}`
      )
      .then(res => {
        this.user = res.data.data;
        // eslint-disable-next-line no-console
        // eslint-disable-next-line no-unused-vars
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line no-console

           axios.get(`https://cryptonew-apis.herokuapp.com/api/balance/naira?email=${userEmail}&coinType=BTC`)
            .then(res => {
                this.nairaBalance = res.data.price;
                console.log('nairabalance', res.data.price)
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://cryptonew-apis.herokuapp.com/api/balance/naira?email=${userEmail}&coinType=ETH`)
            .then(res => {
                this.eth_balance_naira = res.data.price != null ? res.data.price : 0
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line no-console

        axios.get(`https://cryptonew-apis.herokuapp.com/api/balance/naira?email=${userEmail}&coinType=BCH`)
            .then(res => {
                this.bch_balance_naira = res.data.price != null ? res.data.price : 0
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })

  },

  methods: {
        searchInput: debounce(function (e) {
            console.log(this.coin_type.coin_type);
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

    onCancel() {
              console.log('User cancelled the loader.')
            },


          sell() {
            let email
            const amountData = this.afterFee
             if (amountData < 11) {
                 toast.error('You can not withdraw less than 11 Dollars, enter an amount greater than 11 Dollars');
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
                    setTimeout(() => {
        this.isLoading = false
      })
            axios.post('https://cryptonew-apis.herokuapp.com/api/withdraw', data).then(res => {
                    // sessionStorage.setItem('token', res.data.token)

      console.log(res);
         toast.success('Withdrawal Initiated Successfully');
      this.$router.push('/dashboard');
                })
                .catch(err => {
                     setTimeout(() => {
        this.isLoading = false
      });
                 console.log(err.response.data);
 toast.error('Insufficient Balance');
      if(err.status = 500) {
               toast.error(err.response.data);

      } else {
     toast.error(err.response.data.message);

      }
                })
            }

        },

    getHistory() {
      axios
        .get("https://cryptonew-apis.herokuapp.com/api/history")
        .then(res => {
          console.log(res);
          this.histories = res.data;
          // eslint-disable-next-line no-console

          // eslint-disable-next-line no-unused-vars
        })
        .catch(err => {
          console.log(err);
        });
      // eslint-disable-next-line no-console
    }
  }
};
</script>
