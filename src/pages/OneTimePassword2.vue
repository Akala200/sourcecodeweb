<template>
    <form-page>
        <router-link to="otp-1" class="page-back text-muted">
            <span><i class="fa fa-angle-left"></i></span> Back
        </router-link>
        <h3 class="text-center">OTP Verification</h3>
        <p class="text-center mb-5">We will send one time code on this email</p>
        <form>
            <div class="form-group">
                <label>Your OTP Code</label>
                <input type="text"  v-model="code" placeholder="Enter Confirmation Code"  class="form-control text-center font-weight-bold" >
            </div>
            <div class="text-center">
                <button type="submit"  @click.prevent="verify()" class="btn btn-success btn-block">Verify</button>
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

export default {
    components: {
        validateField,
        formPage,
        Loading

    },

    data() {
        return {
            code: '',
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

          verify: function() {
         // eslint-disable-next-line no-console
         console.log("loding strated")
      const {
code
      } = this
        this.isLoading = true;

      this.$store.dispatch("verify", { code })
        .then((resp) => {
            setTimeout(() => {
        this.isLoading = false
      })
      console.log(resp);
       toast.success('Account Verified');
       if(resp.data.data.bvn_status === false){
          this.$router.push('/complete_setup')
       } else {
           this.$router.push('/dashboard');
       }
        })
        // eslint-disable-next-line no-console
        .catch(err => {
           setTimeout(() => {
        this.isLoading = false
      })
            console.log(err.response);

     toast.error(err.response.data.message);

        })
    }
    }
}
</script>