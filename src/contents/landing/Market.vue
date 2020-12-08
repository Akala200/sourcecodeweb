<template>
  <div
    id="market"
    class="section-padding page-section"
  >
    <div class="container">
      <div class="row py-lg-5 justify-content-center">
        <div class="col-xl-7">
          <div class="section_heading">
            <span>Explore</span>
            <h3>The World's Leading Cryptocurrency Exchange</h3>
            <p>Trade Bitcoin, ETH, and hundreds of other cryptocurrencies in minutes.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <div class="market-table">
                <div class="table-responsive">
                  <table class="table mb-0 table-responsive-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change (1hour)</th>
                        <th>Current Supply</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="list in lists"
                        :key="list.id"
                      >
                        <td>
                          <span>1</span>
                        </td>
                        <td class="coin_icon">
                          <span><b>{{ list.name }}</b></span>
                        </td>
                        <td>
                          NGN    {{ list.quote.NGN.price }}
                        </td>
                        <td>
                          <span class="text-success">+{{ list.quote.NGN.percent_change_1h }}%</span>
                        </td>
                        <td>{{ list.circulating_supply }}</td>
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
const axios = require('axios')

export default {
  data () {
    return {
      lists: [],
      country_code: '',
      phone: ''

    }
  },
  auth: false,
  mounted () {
    this.getlist()
  },

  methods: {
    getlist () {
      axios.get('https://cryptonew-api.herokuapp.com//api/lists')
        .then(res => {
          this.lists = res.data.data
          // eslint-disable-next-line no-console
          console.log(this.lists)

          // eslint-disable-next-line no-unused-vars
        }).catch(err => {
          console.log(err)
        })
      // eslint-disable-next-line no-console
    }

  }
}
// reset_password
</script>
