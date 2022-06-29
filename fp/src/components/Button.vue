<template>
    <button @click="onClick">Clicked {{ counter }}</button>
</template>

<script>

export default {
    name: "ButtonClick",

    data() {
        return { 
            counter: 0
        }
    },

    methods: {
        onClick() {
            this.counter++
        }
    },

    beforeCreate() {
        this.counter = 1
        console.log("beforeCreate");
    },

    created() {
        console.log("created");
    },

    beforeMount() {
        console.log("beforeMount");
    },

    mounted() {
        console.log("mounted");
    },

    beforeUpdate() {
        console.log("beforeUpdate");
    },

    update() {
        console.log("update")
    },

    beforeDestroy() {
        console.log("beforeDestroy")
    },

    destroy() {
        console.log("destroy")
    }
}
</script>

<style>

</style>