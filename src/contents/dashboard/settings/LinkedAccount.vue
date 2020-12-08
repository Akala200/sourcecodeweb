<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">
        Linked Account or Card
      </h4>
    </div>
    <div class="card-body">
      <div class="form">
        <ul class="linked_account">
          <li>
            <div class="row">
              <div class="col-9">
                <div class="media">
                  <span class="mr-3"><i class="fa fa-bank" /></span>
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">
                     Account Name - {{accountName}}
                    </h5>
                    <p>Account Number  {{accountNumber}}</p>
                  </div>

                </div>
              </div>
              <div class="col-3">
                <div class="verify">
                  <div class="verified">
                    <span><i class="la la-check" /></span>
                    <a href="#">Verified</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li />
          <ul />
        </ul>

        <div class="mt-5">
          <router-link
            to="/dashboard/verify-step-5"
            class="btn btn-primary px-4 mr-3"
          >
            Add Bank
            Account
          </router-link>
        </div>
      </div>
    </div>
  </div>
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
            let userEmail
        if (process.browser) {
            userEmail = localStorage.getItem('email')
        }
            axios
                .get(`https://cryptonew-api.herokuapp.com/api/user/bank?email=${userEmail}`)
                .then(res => {
                    // eslint-disable-next-line no-unused-vars
                    this.accountName = res.data.accountName;
                    this.accountNumber = res.data.accountNumber;
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getBank();
    }
}
</script>
<style scoped>
.card {
    height: 600px;
}
</style>