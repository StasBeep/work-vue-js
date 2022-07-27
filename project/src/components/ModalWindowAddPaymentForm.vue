<template>
    <div class="wrapper">
        <header class="header">
            {{ settings.header }}
        </header>
        <main class="content">
            <!-- Задача таких условие требует много ресурсов и постоянно нужно возвращаться,
                чтобы не упустить все условия, для того, чтобы такого не возникало - 
                нужно использовать тег: <component>-->
            <!--<AddPayment v-if="settings.name === 'addPaymentForm'"/>
            <div v-if="settings.name === 'calc'">Calc</div>-->
            <component :is="settings.name" />
        </main>
        <footer class="footer">
            <button @click="$modal.hide()">Close</button>
        </footer>
    </div>
</template>

<script>

import AddPayment from './AddPayment.vue' 

export default {
    name: 'ModalWindowAddPaymentForm',

    components: {
        AddPayment
    },

    props: {
        settings: Object
    },
}
</script>

<style scoped lang="scss">
.wrapper {
    padding: 20px;
    background-color: #505050;
    position: absolute;
    top: 0;
}

</style>