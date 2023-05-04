<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="showModal = !showModal">Click</button>
    <teleport to="#modal">
      <ModalElement v-if="showModal">
        <p>Modal Window</p>
        <button @click="showModal = false">Click</button>
      </ModalElement>
    </teleport>

    <login-form v-model:username="user.name" v-model:password="user.pass"/>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import ModalElement from './ModalElement.vue';

export default {
  name: "HelloWorld",

  components: {
    ModalElement,
    LoginForm
  },

  props: {
    msg: String,
  },

  data() {
    return {
      showModal: false,
      user: {
        name: 'Vasia',
        isAdmin: false
      }
    }
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
