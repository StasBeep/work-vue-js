<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <div class="menu">
      <!-- Запросы (переходы) -->
      <router-link to='/dashboard/5'>Dashboard</router-link> /
      <router-link to='/about'>About</router-link> /
      <router-link to='/add/payment/Food?value=200&second=200'>Add (Food)</router-link> /
      <router-link to='/add/payment/Transport?value=50'>Add (Transport)</router-link> /
      <router-link to='/add/payment/Entertainment?value=2000'>Add (Entertainment)</router-link> /
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
      <br>
      <AddPayment @addNewPayment="addData" />
      <br>
      Total: {{ getFPV }}
      <br>
      <PaymentsDisplay :list="currentElements"/>
      <Pagination :cur="curPage" :n="n" :length="paymentsList.length" @paginate="onChangePage"/>
      <br>
      <transition name="fade">
        <modalWindowAddPaymentForm @close="onClose" v-if="modalSettings.name" :settings="modalSettings" />
      </transition>
      <button @click="showPaymentsForm">Show Payments Form</button>
      <button @click="closePaymentsForm">Close</button>
    </main>
  </div>
</template>

<script>

import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPayment from './components/AddPayment.vue'

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
    // About,
    // Dashboard,
    // NotFound,
    Pagination,
    /* TODO: Иногда компонент не запрашивается, но он грузится,
      для того, чтобы он не грузился и не занимал память, если он
      не нужен используют import */
    ModalWindowAddPaymentForm: ()=> import(/* webpackChunkName: 'ModalWindow' */'./components/ModalWindowAddPaymentForm.vue')
  },

  data() {
    return { 
      page: '',
      curPage: 1,
      n: 10,
      modalSettings: {}
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

    /**
     * Изменение содержимого страницы (от номера страницы)
     * @param {number} номер страницы
     */
    onChangePage(p) {
      this.curPage = p
    },

    onClose() {
      this.addFormShown = false
    },

    // Настройка плагина (модального окна)
    onShown(settings) {
      this.modalSettings = settings
    },

    // При закрытии модальное окно очищается
    onHide() {
      this.modalSettings = {}
    },

    showPaymentsForm() {
      // this.$modal.show('addPaymentForm', {header: 'Add'})
      this.$modal.show('AddPayment', {header: 'Add'})
    },

    closePaymentsForm() {
      this.$modal.hide()
    }
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

    /**
     * Посчитать количество обрезанных страниц (Выделение 10 элементов)
     */
    currentElements() {
      const { n, curPage } = this
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n)
    }

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
    // Определяет параметр route, и если параметра нет,
    // то берётся первая страница, если есть, то применяется
    // следующее свойство
    const page = this.$route.params.page || 1
    // если параметр page сущеуствует, то переключится на номер
    // страница цикла содержимого (базы данных)
    this.curPage = page

    // Перед первой загрузкой вывести вот это:
    // this.setPage()

    // const links = document.querySelectorAll('a')

    // Нативная реализация
    // links.forEach(link => {
      // link.addEventListener('click', event => {
        // event.preventDefault()
        // history.pushState({}, "", link.href)
        // this.setPage()
      // })
    //})

    // window.addEventListener('popstate', this.setPage)

    // Реализация через прослушивание
    /*window.addEventListener('hashchange', () => {
      this.setPage()
    })*/

    // TODO: Это слушатели, от них нужно отписываться, чтобы не загружать память
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },

  beforeDestroy() {
    this.$modal.EventBus.$off('shown', this.onShown)
    this.$modal.EventBus.$off('hide', this.onHide)
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

// Для работы с transition нужно, чтобы стили были глобальными
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
