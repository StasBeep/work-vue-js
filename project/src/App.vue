<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <div class="menu">
      <!-- Запросы (переходы) -->
      <router-link to='/dashboard'>Dashboard</router-link> /
      <router-link to='/about'>About</router-link> /
      <router-link to='/notfound'>Not Found</router-link> / 
      <!-- Второй способ запроса через button -->
      <button @click='goToThePageNotFound'>Not Found</button>
      <!-- <a href="dashboard">Dashboard</a> /
      <a href="about">About</a> /
      <a href="notfound">Not Found</a> -->
    </div>
    <main>
      <div class="content-page">
        <!-- Отображение данный router-link -->
        <router-view />
        <!-- <About v-if="page === 'about'" />
        <Dashboard v-if="page === 'dashboard'" />
        <NotFound v-if="page === 'notfound'" /> -->
      </div>

      <AddPayment @addNewPayment="addData" />
      <br>
      <CategorySelect :categoryList="categoryList" />
      Total: {{ getFPV }}
      <br>
      <PaymentsDisplay :list="paymentsList"/>
      <Pagination />
    </main>
  </div>
</template>

<script>

import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPayment from './components/AddPayment.vue'
import CategorySelect from './components/CategorySelect.vue'

// Пагинация
import Pagination from './components/Pagination.vue'

// import About from './views/About.vue'
// import Dashboard from './views/Dashboard.vue'
// import NotFound from './views/NotFound.vue'

import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  
  components: {
    PaymentsDisplay,
    AddPayment,
    CategorySelect,
    // About,
    // Dashboard,
    // NotFound,
    Pagination
  },

  data() {
    return { 
      page: ''
    }
  },

  methods: {
    // Для универсальной записи
    // Список mapActions
    ...mapActions([
      'fetchData',
      'fetchCategory'
    ]),

    // Список мутаций
    ...mapMutations([
        'setPaymentListData',
        'addDataToPaymentList'
    ]),

    addData(data) {
      console.log(data);
      // this.paymentsList.push(data);
      // Второй метод вывода
      // this.paymentsList = [...this.paymentsList, data];
      this.addDataToPaymentList(data);
    },

    setPage() {
      this.page = location.pathname.slice(1)
    },

    // Проверка
    goToThePageNotFound() {
      // Перейди по этому адресу
      this.$router.push({name: 'NotFound'})
    },

    /*fetchData() {
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
    }*/
  },

  computed: {
    // Список getters
    ...mapGetters({
      paymentsList: 'getPaymentList',
      categoryList: 'getCategoryList'
    }),

    getFPV() {
      return this.$store.getters.getFullPaymentValue
    },

    // Один из вариантов
    /*paymentsList() {
      return this.getPaymentList
    }*/
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
    // this.setPaymentListData(this.fetchData());

    this.fetchData();
    if(!this.categoryList.length) {
      this.fetchCategory();
    }

    // реактивность (без хранилища)
    // this.paymentsList = this.fetchData()
  },

  /**
   * Момент монтирования
   */
  mounted() {
    // Перед первой загрузкой вывести вот это:
    this.setPage()

    const links = document.querySelectorAll('a')

    // Нативная реализация
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
        history.pushState({}, "", link.href)
        this.setPage()
      })
    })

    window.addEventListener('popstate', this.setPage)

    // Реализация через прослушивание
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

.wrapper {
  margin: 0 auto;
}
</style>
