<template>
    <form-page>
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
        <router-link to="otp-1" class="page-back text-muted">
            <span><i class="fa fa-angle-left"></i></span> Back
        </router-link>
        <h3 class="text-center">OTP Verification</h3>
        <p class="text-center mb-5">We will send one time code to your email</p>
        <form>
            <div class="form-group">
                <label>Your OTP Code</label>
                <input type="text"  v-model="code" placeholder="Enter Confirmation Code"  class="form-control text-center font-weight-bold" >
            </div>
            <div class="text-center">
                <button type="submit"  @click.prevent="checkCode()" class="btn btn-success btn-block">Verify</button>
            </div>
        </form>
        <div class="info mt-3">
            <p class="text-muted">we dont recommended to save password to browsers!</p>
        </div>
    </form-page>
</template>

<script>
   import formPage from '@/components/FormPage.vue';
    // Import component
    import { createToastInterface } from "vue-toastification";

    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
import {
    required,
    email,
    minLength
} from 'vuelidate/lib/validators';
import validateField from '@/components/ValidateField.vue';
const pluginOptions = {
  timeout: 4000
};
 
// Create the interface
const toast = createToastInterface(pluginOptions);
export default {
    components: {
        validateField,
        formPage,
        Loading

    },

    data() {
        return {
        code: '',
        isLoading: false,
        fullPage: true,
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

          checkCode: function() {
         // eslint-disable-next-line no-console
         console.log("loding strated")
         localStorage.setItem("code", this.code);
      const {
code
      } = this
        this.isLoading = true;

      this.$store.dispatch("checkCode", { code })
        .then(() => {
             toast.success('Code confirmed');
            this.$router.push("/change_password")
            })
        // eslint-disable-next-line no-console
        .catch(err => {
              setTimeout(() => {
                  this.isLoading = false
                })
                   toast.error(err.response.data.message);
            });
    }
    }
}
</script>