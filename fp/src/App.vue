<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <router-link to="/dashboard">Dashboard</router-link> /
    <router-link to="/about">About</router-link> /
    <router-link to="/notfound">NotFound</router-link>
    <!--<div class="menu">
      <a href="dashboard">Dashboard</a> /
      <a href="about">About</a> /
      <a href="NotFound">Not Found</a>
    </div>--->
    <router-view></router-view>
    <main>

      <!--<div class="comtemt-page">
        <About v-if="page === 'about'"/>
        <Dashboard v-if="page === 'dashboard'"/>
        <NotFound v-if="page === 'NotFound'"/>
      </div>-->

      <AddPayment @addNewPayment="addData" />
      <br />
      Total: {{ getFPV }}
      <PaymentsDisplay :list="currentElements"/>
      <Pagination :cur="curPage" :n="n" :length="paymentsList.length" @paginate="changePage" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue"
import AddPayment from "./components/AddPayment.vue"

// import About from "./views/About.vue"
// import Dashboard from "./views/Dashboard.vue"
// import NotFound from "./views/NotFound.vue"

import Pagination from "./components/Pagination.vue"

import { mapMutations, mapGetters, mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPayment,
    // About,
    // Dashboard,
    // NotFound,
    Pagination
  },

  data: () => {
    return {
      page: '',
      curPage: 1,
      n: 10, // Количество отображаемых элементов

    }
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
    /*setPage() {
      this.page = location.pathname.slice(1)
    }*/

    changePage(p) {
      this.curPage = p
    }
  },

  computed: {
    ...mapGetters([
      'getPaymentList',
      'getFullPaymentValue'
    ]),

    getFPV() {
      return this.getFullPaymentValue
    },

    currentElements () {
      const {n, curPage} = this
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n)
    },

    paymentsList() {
      return this.getPaymentList
    }
  },

  created() {
    // this.setPaymentListData(this.fetchData());
    // this.PaymentList = this.fetchData();
    this.fetchData();
  },

  mounted() {
    const page = this.$route.params.page || 1;
    this.curPage = page
    /*this.setPage()
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
        history.pushState({}, "", link.href)
        this.setPage()
      })
    })
    window.addEventListener('popstate', this.setPage)*/
    /*window.addEventListener('hashchange', () => {
      this.setPage()
    })*/
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
