<template>
    <v-container>
        <v-row>
            <v-col :cols="1">#</v-col>
            <v-col :cols="4">Date</v-col>
            <v-col :cols="4">Category</v-col>
            <v-col :cols="2">Value</v-col>
            <v-col>...</v-col>
        </v-row>
        <hr>
        <v-row v-for="(item, idx) in list" :key="idx">
            <v-col :cols="1">{{ item.id }}</v-col>
            <v-col :cols="4">{{ item.data }}</v-col>   
            <v-col :cols="4">{{ item.category }}</v-col>
            <v-col :cols="2">{{ item.value }}</v-col>
            <v-col @click="onContextMenuClick()">...</v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    // Отображение данных
    name: "PaymentsDisplay",

    props: {
        list: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {

        }
    },

    methods: {
        onContextMenuClick() {
            /*console.log(event)
            const items = [
                { text: "Edit", action: () => { this.actionEdit(item)} },
                { text: "Detele", action: () => { this.actionDetele(item) } },
                { text: "Add", action: () => { console.log('Add', item.id)} }
            ];
            this.$context.show({event, items});*/
        },
        
        actionEdit(item) {
            this.$modal.show('AddPayment', {header: "Add", editedValue: item});
        },

        actionDetele(item) {
            console.log(item);
            this.$context.close();
        }
    }
}
</script>

<style scoped>
    
</style>