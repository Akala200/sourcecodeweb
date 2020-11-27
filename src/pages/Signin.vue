<template>
  <form-page>
  <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    <template #header>
      <h4 class="card-title">
        Sign in
      </h4>
    </template>

    <form
      class="signin_validate"
      @submit.prevent="submit"
    >
      <validate-field
        title="Email"
        field="email"
        :validations="$v.email"
        placeholder="hello@example.com"
      />

      <validate-field
        type="password"
        title="Password"
        field="password"
        :custom-errors="customErrors.password"
        :validations="$v.password"
      />

      <div class="form-row d-flex justify-content-between mt-4 mb-2">
        <div class="form-group mb-0">
          <label class="toggle">
            <input
              class="toggle-checkbox"
              type="checkbox"
            >
            <div class="toggle-switch" />
            <span class="toggle-label">Remember me</span>
          </label>
        </div>
        <div class="form-group mb-0">
          <router-link to="reset">
            Forgot Password?
          </router-link>
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-success btn-block"
          @click.prevent="login()"
        >
          Sign in
        </button>
      </div>
    </form>
    <div class="new-account mt-3">
      <p>
        Don't have an account? <router-link
          class="text-primary"
          to="sign-up"
        >
          Sign
          up
        </router-link>
      </p>
    </div>
  </form-page>
</template>

<script>
import formPage from '@/components/FormPage.vue'
import { required, email, minLength } from 'vuelidate/lib/validators'
import validateField from '@/components/ValidateField.vue'
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
  components: { validateField, formPage, Loading },

  data () {
    return {
      email: '',
      password: '',
      isLoading: false,
      fullPage: true,
      customErrors: {
        password: { required: 'Please provide a password' }
      }
    }
  },

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) }
  },

  methods: {
    submit () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$router.push('otp-1')
      }
    },
     onCancel() {
              console.log('User cancelled the loader.')
            },

    login: function () {
      this.isLoading = true
      // eslint-disable-next-line no-console
      let email = this.email
      let password = this.password
      this.$store
        .dispatch('login', { email, password })
        .then(() => {
            setTimeout(() => {
        this.isLoading = false
      })
     toast.success('Login Successful');
          this.$router.push('/dashboard')
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
