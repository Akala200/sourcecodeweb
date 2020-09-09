<template>
  <div class="row">
    <div class="col-xl-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            User Profile
          </h4>
        </div>
        <div class="card-body">
          <form action="">
            <div class="form-row">
              <div class="form-group col-xl-12">
                <label class="mr-sm-2">Update Your First Name</label>
                <input
                  v-model="first_name"
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                >
              </div>
              <div class="form-group col-xl-12">
                <label class="mr-sm-2">Update Your Last Name</label>
                <input
                  v-model="last_name"
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                >
              </div>
              <div class="form-group col-xl-12">
                <label class="mr-sm-2">Update Your Email</label>
                <input
                  v-model="email"
                  type="text"
                  class="form-control"
                  placeholder="Email"
                >
              </div>
              <div class="form-group col-xl-12">
                <label class="mr-sm-2">Update Your Phone Number</label>
                <input
                  v-model="phone"
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                >
              </div>
              <div class="col-12">
                <button
                  class="btn btn-success waves-effect"
                  @click.prevent="updateUser()"
                >
                  Update User Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            Update User Password
          </h4>
        </div>
        <div class="card-body">
          <form action="">
            <div class="form-row">
              <div class="form-group col-xl-12">
                <label class="mr-sm-2">New Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="**********"
                >
              </div>
              <div class="form-group col-xl-12">
                <label class="mr-sm-2">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="**********"
                >
              </div>
              <div class="col-12">
                <button class="btn btn-success waves-effect">
                  Update Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from '@/App.vue'
import { required, email, minLength } from 'vuelidate/lib/validators'
const axios = require('axios')

export default {
  extends: app,

  data () {
    return {
      fullName: 'Maria Pascle',
      email: 'hello@example.com',
      dob: '',
      presentAddress: '56, Old Street, Brooklyn',
      permanentAddress: '123, Central Square, Brooklyn',
      city: 'New York',
      postal: '25481',
      country: 'Jordan',
      fileName: 'Change Photo',
      first_name: '',
      last_name: '',
      phone: ''
    }
  },

  validations: {
    fullName: { required, minLength: minLength(4) },
    dob: { required },
    email: { required, email },
    presentAddress: { required },
    permanentAddress: { required },
    city: { required },
    postal: { required },
    country: { required }
  },
  mounted () {
    let userEmail
    if (process.browser) {
      userEmail = localStorage.getItem('email')
    }

    axios.get(`https://modez.herokuapp.com/api/get/user?email=${userEmail}`)
      .then(res => {
        this.first_name = res.data.data.first_name
        this.last_name = res.data.data.last_name
        this.email = res.data.data.email
        this.phone = res.data.data.phone

        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        console.log(err)
      })
  },

  methods: {
    updateFileName ($e) {
      this.fileName = $e.target.value.replace(/.*(\/|\\)/, '')
    },

    updateUser () {
      let userEmail;
      if (process.browser) {
        userEmail = localStorage.getItem('email')
      }
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone
      }

      axios.put(`https://modez.herokuapp.com/api/update/user?email=${userEmail}`, data)
        .then(res => {
          this.first_name = res.data.data.first_name
          this.last_name = res.data.data.last_name
          this.email = res.data.data.email
          this.phone = res.data.data.phone

           if (process.browser) {
       localStorage.setItem('firstname', res.data.data.first_name)
         localStorage.setItem('lastname', res.data.data.last_name)
        localStorage.setItem('email', res.data.data.email)
       localStorage.setItem('phone', res.data.data.phone)
      }

        // eslint-disable-next-line no-unused-vars
        }).catch(err => {
          console.log(err)
        })

      if (!this.$v.$invalid) {
        this.$router.go(0)
      }
    }
  }
}
</script>
