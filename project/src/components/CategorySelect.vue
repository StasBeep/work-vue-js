<template>
    <select v-model="selected" class="selected">
        <option v-for="(option, idx) in categoryList" :key="idx">
            {{ option }}
        </option>
    </select>
</template>

<script>
export default {
    name: "CategorySelect",

    props: {
        categoryList: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return { 
            selected: ''
        }
    }
}
</script>

<style lang="scss">
    .selected {
        padding: 5px 50px;
    }
</style>