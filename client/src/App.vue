<template>
  <div id="app">
    <app-header />
    <router-view />  
        
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    "app-header": Header,
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