<template>
    <form-page>
        <router-link to="sign-in" class="page-back text-muted">
            <span><i class="fa fa-angle-left"></i></span> Back
        </router-link>
        <h3 class="text-center">OTP Verification</h3>
        <p class="text-center mb-5">We will send one time code on this number</p>
        <form>
            <div class="form-group">
                <label>Your phone number</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                            <span class="input-group-text pl-4 pr-4"><i
                                    class="fa fa-phone"></i></span>
                    </div>
                    <input type="text"  v-model="code" placeholder="Enter Confirmation Code" class="form-control">
                </div>
            </div>
            <div class="text-center mt-4">
                <button type="submit" class="btn btn-success btn-block">Send</button>
            </div>
        </form>
        <div class="new-account mt-3 d-flex justify-content-between">
            <p>Don't get code? <a href="#" class="text-primary" @click="$router.go()">Resend</a></p>
        </div>
    </form-page>
</template>

<script>
   import formPage from '@/components/FormPage.vue';
    // Import component
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
        .then(() => this.$router.push("/dashboard"))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
        setTimeout(() => {
                  this.isLoading = false
                },5000)
    }
    }
}
</script>