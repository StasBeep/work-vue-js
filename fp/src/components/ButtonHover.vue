<template>
    <button class="btn">Hover</button>
</template>

<script>

export default {
    name: "ButtonHover",

    methods: {
        onMouseOver() {
            console.log("Hover on Button")
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
        if(this.$el){
            this.$el.addEventListener("mouseover", this.onMouseOver)
        }
        console.log("mounted");
    },

    beforeUpdate() {
        console.log("beforeUpdate");
    },

    update() {
        console.log("update")
    },

    beforeDestroy() {
        console.log("beforeDestroy");
        this.$el.removeEventListener('mouseover', this.onMouseOver)
    },

    destroy() {
        console.log("destroy")
    }
}
</script>

<style>

</style>