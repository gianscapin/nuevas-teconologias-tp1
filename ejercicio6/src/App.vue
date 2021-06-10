<template>
  <div id="app">
    <div class="jumbotron">
      <h1> TP6 Gianfranco Scapin </h1>
      <br/>
      <Navbar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  h1 {
    color: blue;
  }

  .jumbotron {
    padding: 32px !important;
  }
</style>
