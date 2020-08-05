/* eslint-disable vue/no-unused-components */
/* eslint-disable vue/no-unused-components */
<template>
  <main-wrapper :is-loading="isLoading">
    <dashboard-header />
    <sidebar />
    <router-view name="dashboardPageTitle" />
    <router-view />
    <dashboard-footer />
  </main-wrapper>
</template>

<script>
import mainWrapper from '@/components/MainWrapper.vue'
import dashboardHeader from '@/components/dashboard/Header.vue'
import sidebar from '@/components/dashboard/Sidebar.vue'
import pageTitle from '@/components/dashboard/PageTitle.vue'
import dashboardFooter from '@/components/dashboard/Footer.vue'
import app from '@/App.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { dashboardHeader, sidebar, mainWrapper, pageTitle, dashboardFooter },
  extends: app
}
</script>
