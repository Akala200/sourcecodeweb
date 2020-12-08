<template>
<div class="row">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">
                    Edit Email
                </h4>
            </div>
            <div class="card-body">
                <form action="">
                    <div class="form-row">
                        <div class="form-group col-xl-12">
                            <label class="mr-sm-2">Enter Email</label>
                            <input v-model="email" type="text" class="form-control" placeholder="Enter New Email">
                        </div>
                        <br/><br/><br/>
                        <div class="col-12">
                            <button class="btn btn-success waves-effect" @click.prevent="updateEmail()">
                                Change Email
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import app from '@/App.vue'
import {
    required,
    email,
    minLength
} from 'vuelidate/lib/validators'
import formPage from '@/components/FormPage.vue';
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
const axios = require('axios')

export default {
    extends: app,
    components: {
        Loading
    },
    data() {
        return {
            fullName: 'Maria Pascle',
            email: '',
            dob: '',
            isLoading: false,
            fullPage: true,
            password: '',
            password1: '',
            presentAddress: 'Shop 41, 123/125 AGO Palace Okota Milaco Plaza',
            permanentAddress: 'Shop 41, 123/125 AGO Palace  Milaco Plaza',
            city: 'Lagos',
            postal: '200001',
            country: 'Nigeria',
            fileName: 'Change Photo',
            first_name: '',
            last_name: '',
            phone: ''
        }
    },

    validations: {
        fullName: {
            required,
            minLength: minLength(4)
        },
        dob: {
            required
        },
        email: {
            required,
            email
        },
        presentAddress: {
            required
        },
        permanentAddress: {
            required
        },
        city: {
            required
        },
        postal: {
            required
        },
        country: {
            required
        }
    },
    mounted() {
        let userEmail
        if (process.browser) {
            userEmail = localStorage.getItem('email')
        }

        axios.get(`https://cryptonew-api.herokuapp.com//api/get/user?email=${userEmail}`)
            .then(res => {
                this.first_name = res.data.data.first_name
                this.last_name = res.data.data.last_name
                this.email = res.data.data.email
                this.phone = res.data.data.phone

                // eslint-disable-next-line no-unused-vars
            }).catch(err => {
                console.log(err)
            })
    },

    methods: {
        updateFileName($e) {
            this.fileName = $e.target.value.replace(/.*(\/|\\)/, '')
        },

        updateEmail() {
            let userEmail;
                this.isLoading = true;
            if (process.browser) {
                userEmail = localStorage.getItem('email')
            }
            const data = {
                email: this.email,
            }

            axios.post(`https://cryptonew-api.herokuapp.com//api/update/email?email=${userEmail}`, data)
                .then(res => {
                    console.log(res)
                      setTimeout(() => {
                            this.isLoading = false
                        });
                        toast.success('Verification Code Sent');
            this.$router.push("/dashboard/settings/verify-email")

                    // eslint-disable-next-line no-unused-vars  verify-email
                }).catch(err => {
                   console.log(err)
                        setTimeout(() => {
                            this.isLoading = false
                        });
                        toast.error(err.response.data.message)
                })

            if (!this.$v.$invalid) {
                this.$router.go(0)
            }
        },

        updatePassword() {
            let userEmail;
            if (this.password !== this.password1) {
                toast.error('Password do not match ');
            } else {
                this.isLoading = false
                if (process.browser) {
                    userEmail = localStorage.getItem('email')
                }
                const data = {
                    password: this.password,
                    email: this.email,
                }

                axios.put('https://cryptonew-api.herokuapp.com//api/update/password', data)
                    .then(res => {
                        console.log(res)
                        toast.success('Password Updated');
                        // eslint-disable-next-line no-unused-vars
                    }).catch(err => {
                        console.log(err)
                        setTimeout(() => {
                            this.isLoading = false
                        });
                        toast.error(err.response.data.message);
                    })
            }
        }
    }
}
</script>
<style scoped>
.card{
    width: 500px;
    margin: 0 auto;
}
</style>
