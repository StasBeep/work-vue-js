<template>
    <button class="btn">Hover</button>
</template>

<script>
export default {
    name: "ButtonHover",

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
        if(this.$el) {
            this.$el.addEventListener('mouseover', this.onMouseOver);
        }
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
        // Отписка от слушателя (чтобы экономитть место)
        // Происходит само разрушение
        this.$el.removeEventListener('mouseover', this.onMouseOver)
    },

    // Используется, когда копонент вырезан из DOM дерева
    destroyed() {
        
    }
}
</script>

<style>

</style>