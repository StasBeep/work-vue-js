<template>
  <div class="modal-wrapper">
    <div class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalElement",
};
</script>

<style scoped>
.modal-wrapper {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.9);
}
.modal-content {
  background-color: #fff;
  width: 80%;
  height: 300px;
}
</style>