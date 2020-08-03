/* eslint-disable camelcase */
<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
            <router-link
              to="/dashboard"
              class="navbar-brand"
            >
              <img
                src="/images/w_logo.png"
                alt=""
              >
              <span>Elaenia</span>
            </router-link>
            <div class="dashboard_log my-2">
              <div class="d-flex align-items-center">
                <div class="account_money">
                  <ul class="d-flex">
                    <li class="crypto">
                      <span>0</span>
                      <i class="cc BTC-alt" />
                    </li>
                    <li class="usd">
                      <span>0 NGN</span>
                    </li>
                  </ul>
                </div>
                <div class="profile_log dropdown">
                  <div
                    class="user"
                    @click="show = !show"
                  >
                    <span class="thumb"><i class="la la-user" /></span>
                    <span class="name">{{ firstname }} {{ lastname }}</span>
                    <span class="arrow"><i class="la la-angle-down" /></span>
                  </div>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    :class="{show: show}"
                    @click.capture="show = !show"
                  >
                    <router-link
                      to="/dashboard/accounts"
                      class="dropdown-item"
                    >
                      <i class="la la-user" /> Account
                    </router-link>
                    <router-link
                      to="/dashboard/history"
                      class="dropdown-item"
                    >
                      <i class="la la-book" /> History
                    </router-link>
                    <router-link
                      to="/dashboard/settings"
                      class="dropdown-item"
                    >
                      <i class="la la-cog" /> Setting
                    </router-link>
                    <router-link
                      to="/lock"
                      class="dropdown-item"
                    >
                      <i class="la la-lock" /> Lock
                    </router-link>
                    <router-link
                      to="/sign-in"
                      class="dropdown-item logout"
                    >
                      <i class="la la-sign-out" /> Logout
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      firstname: '',
      lastname: '',
      email: ''
    }
  },

  mounted () {
    if (process.browser) {
      this.firstname = localStorage.getItem('firstname')
      this.lastname = localStorage.getItem('lastname')
      this.email = localStorage.getItem('email')
    }
  },

  methods: {
    submit () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$router.push('sign-in')
      }
    },

    register: function () {
      // eslint-disable-next-line no-console
      console.log('loding strated')
      const {
        // eslint-disable-next-line camelcase
        last_name,
        // eslint-disable-next-line camelcase
        first_name,
        email,
        phone,
        password
      } = this
      this.isLoading = true

      this.$store.dispatch('register', { last_name, first_name, email, phone, password })
        .then(() => this.$router.push('/otp-2'))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err))
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
    }
  }
}
</script>
