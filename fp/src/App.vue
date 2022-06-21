<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Calc />
    <HelloWorld msg="Welcome to Your Vue.js App" :myArr= "arr"/>
    Text : {{ message }} длина {{ message.length }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Calc from './components/Calc.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calc
  },

  data: () => ({
    message: "Ваша реклама",
    arr: [1,2,3,4,5]
  })
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
