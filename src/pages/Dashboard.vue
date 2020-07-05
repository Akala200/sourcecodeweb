<template>
    <main-wrapper :is-loading="isLoading">
        <dashboard-header/>
        <sidebar/>
        <router-view name="dashboardPageTitle"/>
        <router-view/>
        <dashboard-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from "@/components/MainWrapper.vue";
    import dashboardHeader from "@/components/dashboard/Header.vue";
    import sidebar from "@/components/dashboard/Sidebar.vue";
    import pageTitle from "@/components/dashboard/PageTitle.vue";
    import dashboardFooter from "@/components/dashboard/Footer.vue";
    import app from '@/App.vue';

    export default {
        extends: app,
        components: {dashboardHeader, sidebar, mainWrapper, pageTitle, dashboardFooter},
    }
</script>