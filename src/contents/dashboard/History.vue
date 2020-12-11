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
                                                {{moment((history.createdAt).format('MMMM Do YYYY, h:mm:ss a'))}}
                                            </td>
                                            <td>
                                                <i class="cc BTC" /> Bitcoin
                                            </td>
                                            <td v-if="history.type == 'debit'">
                                                {{ history.cardType }} *******{{ history.lastFour }}
                                            </td>
                                            <td>
                                                <div class="text-danger" v-if="history.type == 'debit'">
                                                    -{{ history.coins }} BTC
                                                </div>
                                                <div  class="text-success" v-else>
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

    data() {
        return {
            histories: []
        }
    },
    mounted() {
        let userEmail
        let user;
        if (process.browser) {
            localStorage.getItem('firstname')
            localStorage.getItem('lastname')
            userEmail = localStorage.getItem('email')
            user = localStorage.getItem('user')
        }

        axios.get(`https://cryptonew-api.herokuapp.com/api/history/all?user=${user}`)
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
