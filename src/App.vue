<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
    <div style="display:flex; justify-content: flex-end"> Make by <img style="margin-left: 12px; width:100%; max-width:20px;" alt="Vue logo" src="./assets/logo.png"></div>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  created() {
    this.$store.dispatch('updateGameSettings');
    this.$store.dispatch('updateGameWinners');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}
</style>
