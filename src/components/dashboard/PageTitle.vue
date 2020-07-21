<template>
    <div class="page_title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <div class="page_title-content">
                        <p>
                            Welcome Back,<span> {{firstname}} {{lastname}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                firstname:  '',
                  lastname:  '',
                    email:  ''
            }
        },

    
        mounted() {

               if (process.browser) {
                 this.firstname =  localStorage.getItem("firstname");
                 this.lastname  =  localStorage.getItem("lastname");
                 this.email  =   localStorage.getItem("email");
                }

      
        },
    }
</script>