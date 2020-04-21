<template>
  <div id="app">
    <Sketchpad/>
  </div>
</template>

<script>
import Sketchpad from './components/Sketchpad.vue'

export default {
  name: 'App',
  components: {
    Sketchpad
  }
}
</script>

<style>
  @import './assets/styles/styles.css';
</style>
