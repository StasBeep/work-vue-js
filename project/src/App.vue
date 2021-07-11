<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <main>
      <AddPayment @addNewPayment="addData" />
      <br>
      <PaymentsDisplay :list="paymentsList"/>
    </main>
  </div>
</template>

<script>

import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPayment from './components/AddPayment.vue'

export default {
  name: 'App',
  
  components: {
    PaymentsDisplay,
    AddPayment
  },

  data: () => ({
    paymentsList: []
  }),

  methods: {
    addData(data) {
      console.log(data);
      this.paymentsList.push(data);
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
      ]
    }
  },

  // Хук (компонент ещё не смонтирован)
    created() {
      // реактивность
      this.paymentsList = this.fetchData()
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
