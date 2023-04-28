<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Btns />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Btns from "./components/Btns.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Btns
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
