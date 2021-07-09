<template>
    <button @click="onClick">Hover {{ counter }}</button>
</template>

<script>
export default {
    name: "ButtonHover",

    data() {
        return {
            counter: 0
        }
    },

    methods: {
        onMouseOver() {
            console.log('Hovered on Button');
        }
    },

    // Данные компонента
    beforeCreate() {
        console.log('beforeCreate');
    },

    created() {
        console.log('created');
    },

    // Визуальная часть
    beforeMount() {
        console.log('beforeMount');
    },

    mounted() {
        console.log('mounted');
    },

    beforeUpdate() {
        console.log('beforeUpdate');
    },

    updated() {
        console.log('updated');
    },

    // Разрушение компонента
    beforeDestroy() {

    },

    destroyed() {
        
    }
}
</script>

<style>

</style>