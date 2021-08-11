<template>
<form-page>
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <template #header>
        <h4 class="card-title">Verify Your BVN</h4>
    </template>

    <div>
        <div class="form-group">
            <label>Enter Your BVN</label>
            <input type="number" v-model="email" class="form-control" placeholder="hello@example.com">
        </div>
        <div class="form-group">
            <label>Enter Account Number</label>
            <input type="email" v-model="email" class="form-control" placeholder="hello@example.com">
        </div>

        <div class="form-group">
            <select v-model="bankCode" name="bank" id="bank" class="form-control" tabindex="12">
                <option v-for="bank in banks" :key="bank.id" :value="bank">{{bank.name}}</option>             
            </select>
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
import {
    createToastInterface
} from "vue-toastification";
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
const axios = require('axios')

const pluginOptions = {
    timeout: 4000
};

// Create the interface
const toast = createToastInterface(pluginOptions);
export default {
    components: {
        formPage,
        Loading
    },
    data() {
        return {
            email: '',
            bvn: '',
            bankCode: '',
            banks: [],
            account_number: '',
            account_bank: '',
            isLoading: false,
            fullPage: true,
        }
    },
    methods: {
        getBank: function (){
            
        axios.get(`https://cryptonew-api.herokuapp.com/api/get/bank`)
            .then(res => {
                this.banks = res.data
                // eslint-disable-next-line no-console

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
        },

        forgot: function () {
            this.isLoading = true
            // eslint-disable-next-line no-console
            console.log("loding strated")
            const {
                email,
            } = this
            this.isLoading = true;

            this.$store.dispatch("forgotPassword", {
                    email
                })
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
    },

      mounted() {
        this.getBank()

      }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>
