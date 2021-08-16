<template>
<form-page>
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <template #header>
        <h4 class="card-title">Complete Account Setup</h4>
    </template>

    <div>
        <!-- a comment in html 

        <div class="form-group">
            <label>BVN</label>
            <input type="number" v-model="bvn" class="form-control" placeholder="Enter BVN">
        </div>
        -->

         <div class="form-group">
            <label>Account Name</label>
            <input type="text" v-model="account_name" class="form-control" placeholder="Enter Account Name">
        </div>

        <div class="form-group">
            <label>Account Number</label>
            <input type="email" v-model="account_number" class="form-control" placeholder="Enter Account Number">
        </div>

        <div class="form-group">
           <label>Select Bank</label>
            <select v-model="account_bank" name="bank" id="bank" class="form-control" tabindex="12">
                <option v-for="bank in banks" :key="bank.id" :value="bank.name">{{bank.name}}</option>             
            </select>
        </div>

        <div class="text-center">
            <button class="btn btn-success btn-block" @click.prevent="complete()">Proceed</button>
        </div>
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
            bvn: '',
            bankCode: '',
            banks: [],
            account_number: '',
            account_name: '',
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

        complete: function () {
            const email = localStorage.getItem("email")
            this.isLoading = true
            // eslint-disable-next-line no-console
            const {
              bvn,
              account_number,
              account_bank,
              account_name
                
            } = this
            this.isLoading = true;

            this.$store.dispatch("completeSetup", {
                    email,bvn,account_number,account_bank,account_name
                })
                .then((resp) => {
                    setTimeout(() => {
                        this.isLoading = false
                    });
                    console.log(resp)
                    toast.success('Account Setup Complete');
                    this.$router.push("/dashboard");
                })
                // eslint-disable-next-line no-console
                .catch(err => {
                    setTimeout(() => {
                        this.isLoading = false
                    });
                      console.log(err)
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
