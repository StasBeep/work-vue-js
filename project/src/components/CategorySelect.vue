<template>
    <select v-model="selected" class="selected" @click="onSelect">
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
    },

    methods: {
        onSelect() {
            const category = this.selected
            this.$emit('select', category)
        }
    }
}
</script>

<style lang="scss">
    .selected {
        padding: 5px 50px;
    }
</style>