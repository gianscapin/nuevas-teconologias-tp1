
<template>
  <div id="app" class="container-fluid mt-3">
    <div>
      <h1>Trabajo Practico N°8 - Gianfranco Scapin 2°1°D</h1>
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
#app {
 
}
.jumbotron{
  background-color: white;
  color:blue;
}
</style>
