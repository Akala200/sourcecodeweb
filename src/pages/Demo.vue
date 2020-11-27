<template>
    <main-wrapper :is-loading="isLoading">
        <demo-header/>

        <router-view name="pages"/>
        <router-view name="support"/>

        <demo-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from '@/components/MainWrapper.vue';
    import app from '@/App.vue';

    export default {
        extends: app,
        components: { mainWrapper },
    }
</script>