<template>
  <div>
    <input type="text" :value="username" @input="$emit('update:username', event.target.value)">
    <input type="password" :value="password" @input="$emit('update:password', event.target.value)">
  </div>
</template>

<script>
export default {
    name: 'LoginForm',

    props: ['username', 'password'],
}
</script>

<style>

</style>