<template>
    <div class="payments-list">
        <div class="signature">
            <span class="signature-num">#</span>
            <span class="signature-date">Date</span>
            <span class="signature-category">Category</span>
            <span class="signature-value">Value</span>
        </div>
        <hr>
        <div v-for="(item, idx) in list" :key="idx" class="list">
            <span class="list-num">{{ item.id }}</span>
            <span class="list-data">{{ item.data }}</span>
            <span class="list-category">{{ item.category }}</span>
            <span class="list-value">{{ item.value }}</span>
        </div>
    </div>
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
    }
}
</script>

<style scoped>
    .payments-list {
        max-width: 470px;
    }

    .signature {
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }

    .signature-num {
        display: block;
        margin-left: 20px;
    }

    .signature-date {
        display: block;
        margin: 0 20px 2px;
    }

    .signature-category {
        display: block;
    }

    .signature-value {
        display: block;
        margin-right: 18px;
    }

    .list{
        display: flex;
        justify-content: space-between;
    }

    .list-num {
        display: block;
        margin: 0 0 10px 8px;
        width: 30px;
        text-align: center;
    }

    .list-data {
        display: block;
        margin: 0 0 0 0;
        width: 75px;
        text-align: left;
    }

    .list-category {
        display: block;
        margin: 0 0 0 0;
        width: 75px;
        text-align: center;
    }

    .list-value {
        display: block;
        margin: 0 12px 0 0;
        width: 50px;
        text-align: center;
    }
</style>