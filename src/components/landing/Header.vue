<template>
    <div class="header landing_page">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-light px-0">
                        <router-link to="/" class="navbar-brand"><img src="/images/w_logo.png" alt="">
                        </router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul v-if="isLanding" class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#" data-scroll-nav="0">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#market" data-scroll-nav="1">Market</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio" data-scroll-nav="2">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact" data-scroll-nav="4">Contact</a>
                                </li>
                                <li class="nav-item d-lg-none">
                                      <router-link to="sign-in" class="nav-link">Sign In</router-link>
                                </li>
                                <li class="nav-item d-lg-none">
                                    <router-link to="sign-up" class="nav-link">Sign Up</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="dashboard_log">
                            <div class="d-flex align-items-center">
                                <div class="header_auth">
                                    <router-link to="sign-in" class="btn btn-primary">Sign In</router-link>
                                    <router-link to="sign-up" class="btn btn-outline-primary">Sign Up</router-link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            isLanding() {
                return this.$route.path === '/';
            }
        }
    }
</script>
<style scoped>
.header .navbar-brand img {
    max-width: 150px;
}
</style>
