<template>
    <div :class="[$style.wrp]">
        <div @click="onClick(cur - 1)">-</div>
        <div
            v-for="i in amount" :key="i"
            :class="{
                [$style.active]: cur === i 
            }"
            @click="onClick(i)"
        >{{ i }}</div>
        <div @click="onClick(cur + 1)">+</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>