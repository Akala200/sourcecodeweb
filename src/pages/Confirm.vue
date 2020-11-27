<template>
    <form-page>
         <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
        <template #header>
            <h4 class="card-title">Reset Password</h4>
        </template>

        <div>
            <div class="form-group">
                <label>Enter New Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="">
            </div>
            <div class="form-group">
                <label>Confirm New Password</label>
                <input type="password" v-model="password2" class="form-control" placeholder="">
            </div>
            <div class="text-center">
                <button class="btn btn-success btn-block" @click.prevent="changePassword()">Reset Password</button>
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
      password: '',
      password2: '',
      isLoading: false,
      fullPage: true,
    }
  },
          methods: {
          changePassword: function() {
              if(this.password !== this.password2){
                 toast.error('Password do not match ');
              } else {
                    this.isLoading = true
         // eslint-disable-next-line no-console
         console.log("loding strated")
      const {
password
      } = this
              this.isLoading = true;
                    const code =  localStorage.getItem("code");
                const data = {
                        password,
                        code
                    }


      this.$store.dispatch("changePassword", { data })
        .then(() => {
                  setTimeout(() => {
        this.isLoading = false
      });
       toast.success('Reset Password Successful');
            this.$router.push("/sign-in");
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
    }
</script>