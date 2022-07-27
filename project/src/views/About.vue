<template>
    <div>About
        <button @click="showCalc">Show Calculator</button>
    </div>
</template>

<script>
export default {
    name: "About",

    methods: {
        showCalc() {
            this.$modal.show('calc', {header: "Calculator"})
        }
    }
}
</script>

<style>

</style>