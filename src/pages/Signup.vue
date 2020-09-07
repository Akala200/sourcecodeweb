<template>
<form-page>
 <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
        
    <template #header>
        <h4 class="card-title">Sign up your account</h4>
    </template>

    <form _lpchecked="1">
        <div class="form-group">
            <input type="text" class="form-control" id="first_name" v-model="first_name" placeholder="First Name">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="last_name" v-model="last_name" placeholder="Last Name">
        </div>

        <div class="form-group">
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
        </div>

        <div class="form-group">
            <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Phone">
        </div>

        <div class="form-group">
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
        </div>
            <button class="btn btn-primary newbuuton" @click.prevent="register()">Create Account</button>
        <div class="new-account mt-3">
                <p>Already have an account? <router-link class="text-primary" to="sign-in">Sign in</router-link>
                </p>
            </div>
    </form>
</form-page>
</template>

<script>
import formPage from '@/components/FormPage.vue';
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import {
    required,
    email,
    minLength
} from 'vuelidate/lib/validators';
import validateField from '@/components/ValidateField.vue';

export default {
    components: {
        validateField,
        formPage,
        Loading

    },

    data() {
        return {
            first_name: '',
            email: '',
            last_name: '',
            password: '',
            phone: '',
            isLoading: false,
            fullPage: true,
            customErrors: {
                username: {
                    required: 'Please enter your username'
                },
                password: {
                    required: 'Please provide a password'
                }
            }
        }
    },

    validations: {
        username: {
            required
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(5)
        },
    },

    methods: {
        submit() {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                this.$router.push('sign-in');
            }
        },

          register: function() {
         // eslint-disable-next-line no-console
         console.log("loding strated")
      const {
last_name,
first_name,
email,
phone,
password
      } = this
        this.isLoading = true;

      this.$store.dispatch("register", { last_name, first_name, email, phone, password })
        .then(() => this.$router.push("/otp-2"))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
        setTimeout(() => {
                  this.isLoading = false
                },5000)
    }
    }
}
</script>

<style scoped>
.newbuuton {
    width: 100%;
}
</style>
