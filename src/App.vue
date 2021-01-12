<template>
  <div id="app">
    <app-header  :key="$route.fullPath" />
    <router-view />
    <app-footer />  
        
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
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



.btn.add-incidente {  
  min-width: 120px;
  padding: 10px 30px;
  background-color: #F26522;  
  color: white;
  border: none;
  font-family: 'Maven Pro', sans-serif;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 12px;
  margin-top: 20px;
  outline: none;
}

.submit.btn.add-incidente button {
  padding: 15px 20px;
  background-color:#F26522;
  color: white;
  border: none;
  font-family: "Maven Pro", sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  outline: none !important;
}



.already_registered {
  text-align: center;
}




</style>