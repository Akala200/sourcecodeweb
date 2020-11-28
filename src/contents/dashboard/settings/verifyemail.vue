<template>
<div class="container main">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <h3 class="text-center">Verify Email</h3>
    <p>An otp has been sent to your email account</p>
    <form>
        <div class="form-group">
            <input type="text" v-model="code" placeholder="Enter Confirmation Code" class="form-control text-center font-weight-bold">
        </div>
        <div class="text-center">
            <button type="submit" @click.prevent="changeEmail()" class="btn btn-success btn-block">Verify</button>
        </div>
    </form>
    <div class="info mt-3">
        <p class="text-muted">we dont recommended to save password to browsers!</p>
    </div>
</div>
</template>

<script>
import formPage from '@/components/FormPage.vue';
// Import component
import {
    createToastInterface
} from "vue-toastification";

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

        changeEmail: function () {
            // eslint-disable-next-line no-console
            console.log("loding strated")
            const {
                code
            } = this
            this.isLoading = true;

            this.$store.dispatch("changeEmail", {
                    code
                })
                .then(() => {
                    toast.success('Email change successfully');
                    this.$router.push("/dashboard/settings/edit-email")
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

<style scoped>
.main {
    width: 500px;
    margin: 0 auto;
}
</style>
