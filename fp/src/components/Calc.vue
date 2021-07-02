<template>
    <div>
        <input v-on:focus="sum = 1 + 1"/>
        <button v-on:click="sum = 3">Click</button>
        <!--<div v-on:mouseover=""></div>-->
        result : {{ sum }}
    </div>
</template>

<script>
export default {
    name: "Calc",
    data:() => ({
        sum: 0
    })
}
</script>

<style>

</style>