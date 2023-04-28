<template>
  <div>
    <button>button 1</button>
    <button @click="changeSmt">button 2</button>
    {{ smt }}
  </div>
</template>

<script>
export default {
    name: 'BtnsElement',

    data() {
      return {
        smt: 0
      }
    },

    methods: {
      changeSmt() {
        this.smt++;
      }
    }
}
</script>

<style>

</style>