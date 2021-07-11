<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <Calc/>

    <HelloWorld 
      msg="message" 
      :myArr="arr"
    />
    Text : {{ message }} длина {{ message.length }}

    <div>
          <ButtonHover />
          <div v-if="show">
            <Button />
          </div>
          <!-- <button @click="show = !show">Change</button> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Calc from './components/Calc.vue'
import Button from './components/Button.vue'
import ButtonHover from './components/ButtonHover.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calc,
    Button,
    ButtonHover,
  },
  data:() => ({
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
