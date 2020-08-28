<template>
  <div id="app">
    <app-header />
    <div class="container">
      <router-view />
    </div>
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
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>