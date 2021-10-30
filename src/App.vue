<template>
  <div id="app">
    <transition name="fade">
      <div
        v-if="isLoading"
        id="preloader"
      >
        <div class="sk-three-bounce">
          <div class="sk-child sk-bounce1" />
          <div class="sk-child sk-bounce2" />
          <div class="sk-child sk-bounce3" />
        </div>
      </div>
      <notifications group="foo" />

    </transition>

    <router-view :is-loading="isLoading" />
  </div>
</template>

<script>
import Waves from 'node-waves'

export default {
  data () {
    return {
      isLoading: true,
      year: new Date().getFullYear()
    }
  },

  computed: {
    title () {
      return this.$route.meta.title
    }
  },

  mounted () {
    this.isLoading = false
    this.initWaves()
  },

  updated () {
    this.setTitle()
  },

  methods: {
    setTitle () {
      document.title = this.title ? ' Sourcecode ~ ' + this.title : 'Sourcecode'
    },

    initWaves () {
      Waves.init()
      Waves.attach('.wave-effect')
      Waves.attach('.btn')
      Waves.attach('button')
    }
  }
}
</script>

<style>
    input[type=date]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
