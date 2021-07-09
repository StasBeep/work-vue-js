<template>
    <button @click="onClick">Clicked {{ counter }}</button>
</template>

<script>
export default {
    name: "Button",

    data() {
        return {
            counter: 0
        }
    },

    methods: {
        onClick() {
            this.counter++;
        }
    },

    beforeCreate() {
        console.log('beforeCreate');
    },

    created() {
        console.log('created');
    },

    beforeMount() {
        console.log('beforeMount');
    },

    mounted() {
        console.log('mounted');
    }
}
</script>

<style>

</style>