<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <main>
      <AddPayment @addNewPayment="addData" />
      <br />
      <PaymentsDisplay :list="PaymentList"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue"
import AddPayment from "./components/AddPayment.vue"

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPayment
  },

  data: () => ({
    PaymentList: [],
  }),

  methods: {
    addData(data){
      this.PaymentList.push(data);
    },

    fetchData() {
      return [
        {
          data: "28.03.2020",
          category: "Food",
          value: 169
        },
        {
          data: "28.03.2020",
          category: "Sport",
          value: 2000
        },
        {
          data: "28.03.2020",
          category: "Internet",
          value: 900
        },
        {
          data: "28.03.2020",
          category: "Car",
          value: 5600
        },
      ]
    }
  },

  created() {
    this.PaymentList = this.fetchData();
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
</style>
