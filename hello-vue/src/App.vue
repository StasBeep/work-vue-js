<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Btns @custom-event-1="firstProsmotr" @custom-event-2="secondProsmotr"/>
    
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

  methods: {
    firstProsmotr(data) {
      console.log(data, 'event-1');
    },

    secondProsmotr(data) {
      console.log(data, 'event-2');
    }
  }
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

.my-div {
  margin-top: 20px;
  border: 1px solid #2c3e50;
  min-height: 100px;
  padding: 20px;
}
</style>
