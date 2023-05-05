<template>
    <div :class="[$style.wrp]">
        <v-pagination
            v-model="activePage"
            :length="numberPage"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            :v-bind="onClick(activePage)"
        ></v-pagination>
        <br>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'PaginationElement',

    data() {
        return {
            numberPage: Math.ceil(this.length / this.n),
            activePage: 1
        }
    },

    props: {
        length: Number,
        // Количество элементов
        n: Number,
        // Текущая страница 
        cur: Number
    },
    computed: {
        /**
         * Рассчёт количство кнопок для переключения
         */
        amount() {
            return Math.ceil(this.length / this.n)
        }
    },
    methods: {
        /**
         * Опрокидывание страниц вверх с содержимым
         */
        onClick (p) {
            this.numberPage = Math.ceil(this.length / this.n);
            this.$emit('paginate', p)
        }
    }
}
</script>

<style module lang="scss">
    .wrp{

    }
</style>