<template>
  <div>
    <button @click="clickHandler">button 1</button>
    <Teleport to='.my-div'>
      <p> From Hello World </p>
    </Teleport>
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

    // Выявление emit на данном компоненте, правило хорошего тона
    emits: {
      'custom-event-1': null,
      // валидация emit
      'custom-event-2' (payload) {
          return !!(payload?.name && payload?.role);
        }
    },

    methods: {
      clickHandler() {
        this.$emit('custom-event-1', 'data-1');
        this.$emit('custom-event-2', {name: 'Vasia', role: 'admin'});
      }
    }
}
</script>

<style>

</style>