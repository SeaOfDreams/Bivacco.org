<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />  
        
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body {
  font-family: 'Maven Pro', sans-serif;
}

.has-navbar-fixed-top {
  margin: 0 !important;
  padding: 0 !important;
}




</style>