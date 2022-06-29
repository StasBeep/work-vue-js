<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Calc />

    <ButtonClick v-if="!show"/>
    <ButtonClick v-if="show"/>

    <ButtonHover></ButtonHover>

    <button @click="show = !show">Change</button>

    <HelloWorld msg="Welcome to Your Vue.js App" :myArr= "arr"/>
    Text : {{ message }} длина {{ message.length }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Calc from './components/Calc.vue'
import ButtonClick from './components/Button.vue'
import ButtonHover from './components/ButtonHover.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calc,
    ButtonClick,
    ButtonHover
  },

  data: () => ({
    show: false,
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
