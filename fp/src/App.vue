<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <main>
      <AddPayment @addNewPayment="addData" />
      <br />
      Total: {{ getFPV }}
      <PaymentsDisplay :list="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue"
import AddPayment from "./components/AddPayment.vue"

import { mapMutations, mapGetters, mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPayment
  },

  methods: {
    ...mapMutations([
      'setPaymentListData',
      'addDataToPaymentsList'
    ]),

    ...mapActions([
      'fetchData'
    ]),

    addData(data){
      this.addDataToPaymentsList(data);
    },
  },

  computed: {
    ...mapGetters([
      'getPaymentList',
      'getFullPaymentValue'
    ]),

    getFPV() {
      return this.getFullPaymentValue
    },

    paymentsList() {
      return this.getPaymentList
    }
  },

  created() {
    // this.setPaymentListData(this.fetchData());
    // this.PaymentList = this.fetchData();
    this.fetchData();
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
