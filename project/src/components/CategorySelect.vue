<template>
    <div>
        <select v-model="selected">
            <option v-for="(option, idx) in categoryList" :key="idx">
                {{ option }}
            </option>
        </select>
    </div>
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

<style>

</style>