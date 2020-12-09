<template>
    <main-wrapper :is-loading="isLoading">

    

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