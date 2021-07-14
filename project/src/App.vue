<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <main>
      <AddPayment @addNewPayment="addData" />
      <br>
      Total: {{ getFPV }}
      <br>
      <PaymentsDisplay :list="paymentsList"/>
    </main>
  </div>
</template>

<script>

import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPayment from './components/AddPayment.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  
  components: {
    PaymentsDisplay,
    AddPayment
  },

  methods: {
    // Для универсальной записи
    // Список мутаций
    ...mapMutations([
        'setPaymentListData'
    ]),

    addData(data) {
      console.log(data);
      // this.paymentsList.push(data);
      // Второй метод вывода
      this.paymentsList = [...this.paymentsList, data];
    },

    fetchData() {
      return [
        {
          data: "28.03.2020",
          category: "Food",
          value: 169
        },
        {
          data: "20.04.2021",
          category: "Sport",
          value: 400
        },
        {
          data: "20.05.2021",
          category: "Internet",
          value: 200
        },
        {
          data: "01.03.2019",
          category: "Family",
          value: 2000
        },
        {
          data: "25.07.2020",
          category: "Sport",
          value: 500
        },
      ]
    }
  },

  computed: {
    getFPV() {
      return this.$store.getters.getFullPaymentValue
    },

    paymentsList() {
      return this.$store.getters.getPaymentList
    }
  },

  /**
   * Эмитация загрузки данных
   */
  // Хук (компонент ещё не смонтирован)
  created() {
    // реативность с хранилищем
    // Тяжёлая запись через commit и $store, можно проще
    // через mapMutations
    // this.$store.commit('setPaymentListData', this.fetchData())

    // Адаптивная и универсальная запись при помощи spread
    this.setPaymentListData(this.fetchData());

    // реактивность (без хранилища)
    // this.paymentsList = this.fetchData()
  }
}
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  
}
</style>
