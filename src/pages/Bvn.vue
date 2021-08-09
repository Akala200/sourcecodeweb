<template>
    <form-page>
         <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
        <template #header>
            <h4 class="card-title">Reset password</h4>
        </template>

        <div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="hello@example.com">
            </div>
            <div class="text-center">
                <button class="btn btn-success btn-block" @click.prevent="forgot()">Reset Password</button>
            </div>
        </div>
        <div class="new-account mt-3">
            <p class="mb-1">Not Received? </p>
            <a class="text-primary" href="#" @click="$router.go()">Resend</a>
        </div>
    </form-page>
</template>

<script>
    import formPage from '@/components/FormPage.vue';
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
        components: { formPage, Loading
 },
          data () {
    return {
      email: '',
      isLoading: false,
      fullPage: true,
    }
  },
          methods: {
          forgot: function() {
                    this.isLoading = true
         // eslint-disable-next-line no-console
         console.log("loding strated")
      const {
email,
      } = this
              this.isLoading = true;


      this.$store.dispatch("forgotPassword", { email })
        .then(() => {
                  setTimeout(() => {
        this.isLoading = false
      });
       toast.success('Reset Password Successful');
            this.$router.push("/verify_code");
            })
        // eslint-disable-next-line no-console
        .catch(err => {
              setTimeout(() => {
        this.isLoading = false
      });
                 toast.error(err.response.data.message);
            
        });
    }
    }
    }
</script>