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
            </router-link>
            <div class="dashboard_log my-2">
              <div class="d-flex align-items-center">
                <div class="account_money">
                  <ul class="d-flex">
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
                    <div
                      class="dropdown-item logout"  @click.prevent="logout()"
                    >
                      <i class="la la-sign-out" /> Logout
                    </div>
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

    logout: function () {
      // eslint-disable-next-line no-console
        localStorage.removeItem("token");
        localStorage.removeItem("firstname");
        localStorage.removeItem("email");
        localStorage.removeItem("lastname");
        localStorage.removeItem("phone");
        localStorage.removeItem("user");
         this.$router.push('/sign-in');
    }
  }
}
</script>
<style scoped>
.header .navbar-brand img {
    max-width: 150px;
}
</style>