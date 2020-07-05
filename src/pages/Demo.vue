<template>
    <main-wrapper :is-loading="isLoading">
        <demo-header/>

        <router-view name="demoIntro"/>
        <router-view name="pages"/>
        <router-view name="support"/>

        <demo-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from '@/components/MainWrapper.vue';
    import demoHeader from "@/components/demo/Header.vue";
    import demoFooter from '@/components/demo/Footer.vue';
    import app from '@/App.vue';

    export default {
        extends: app,
        components: { mainWrapper, demoHeader, demoFooter },
    }
</script>