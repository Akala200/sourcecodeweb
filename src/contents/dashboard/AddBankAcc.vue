<template>
<verification-body>
    <template #header>
        <h4 class="card-title">Link a bank account</h4>
    </template>

    <form @submit.prevent="$router.push('/dashboard/verify-step-6')" class="identity-upload">
        <div class="form-row">
            <div class="form-group col-xl-12">
                <label class="mr-sm-2">Bank Name </label>
                <v-select :options="banks" label="name" class="style-chooser" v-model="setSelected" placeholder="Select A Bank"></v-select>
            </div>
            <div class="form-group col-xl-12">
                <label class="mr-sm-2">Account number </label>
                <input type="text" class="form-control" v-model="accountNumber" placeholder="36475" />
            </div>
            <div class="form-group col-xl-12">
                <label class="mr-sm-2">Account Name </label>
                <input type="text" class="form-control" v-model="accountName" placeholder="Maria Pascle" />
            </div>
            <div class="form-group col-xl-12">
                <img src="/images/routing.png" alt="" class="img-fluid" />
            </div>

            <div class="text-center col-12">
                <router-link to="/dashboard/verify-step-5" class="btn btn-primary mx-2">Back</router-link>
                <button type="submit" class="btn btn-success mx-2" @click.prevent="updateBank()">Save</button>
            </div>
        </div>
    </form>
</verification-body>
</template>


<script>
import verificationBody from "@/components/dashboard/VerificationBody.vue";
const axios = require("axios");
import vSelect from 'vue-select'
import {
    createToastInterface
} from "vue-toastification";
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

const pluginOptions = {
    timeout: 4000
};

// Create the interface
const toast = createToastInterface(pluginOptions);

export default {
    components: {
        verificationBody,
        vSelect,
        Loading,
        createToastInterface
    },
    data() {
        return {
            banks: [],
            bank: "",
            setSelected: '',
            accountName: '',
            accountNumber: '',
            isLoading: false,
            fullPage: true,
        };
    },
    methods: {
        getBank() {
            axios
                .get(`https://cryptonew-apis.herokuapp.com/api/get/bank`)
                .then(res => {
                    this.banks = res.data;
                    // eslint-disable-next-line no-unused-vars
                    console.log(this.banks);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        updateBank() {
            let userEmail
            if (process.browser) {
                userEmail = localStorage.getItem('email')
            }
            console.log(this.setSelected)
            if (!this.accountNumber && !this.accountName) {
                toast.error("Fill in all details");
            } else {
                this.isLoading = false;
                console.log(this.setSelected)
                const data = {
                    accountName: this.accountName,
                    accountNumber: this.accountNumber,
                    code: this.setSelected.code,
                    email: userEmail
                };
                console.log(data)
                axios
                    .post("https://cryptonew-apis.herokuapp.com/api/add/bank", data)
                    .then(res => {
                        toast.success('Bank Account Succefully Updated');
                        // eslint-disable-next-line no-unused-vars  /dashboard/settings/linked-account
                        this.$router.push("/dashboard/settings/linked-account")
                    })
                    .catch(err => {
                        console.log(err);
                        setTimeout(() => {
                            this.isLoading = false;
                        });
                        toast.error(err.response.data.message);
                    });

            }
        }
    },
    mounted() {
        this.getBank();
    }
};
</script>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
    border-radius: 15px;
    min-height: 50px;
    border: 1px solid #423a6f;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    transition: all .3s ease-in-out;
    background: #423a6f;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
    fill: #394066;
}

.style-chooser .vs__selected-options input {
    width: -webkit-fill-available;
    border-radius: 15px;
    padding-right: 10px;
    padding-left: 10px;
    border: 1px solid #423a6f;
    font-weight: 500;
    color: #fff;
    transition: all .3s ease-in-out;
    background: #423a6f;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
    fill: #394066;
    display: none;
}
</style>
