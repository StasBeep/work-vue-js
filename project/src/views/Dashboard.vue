<template>
  <v-row>
    <v-col>
      <h1 class="text-h5 text-sm-h3 mb-8">My personal Cost</h1>
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <template v-slot:activator="{ on }">
          <v-btn color="teal" dark v-on="on">Add new cost <v-icon>mdi-plus</v-icon></v-btn>
        </template>
        <v-card>
          <AddPayment @addNewPayment="addData"/>
        </v-card>
      </v-dialog>
      <br />
      Total: {{ getFPV }}
      <br />
      <PaymentsDisplay :list="currentElements" />
      <Pagination
        :cur="curPage"
        :n="n"
        :length="paymentsList.length"
        @paginate="onChangePage"
      />
      <br />
    </v-col>
    <v-col> chart </v-col>
  </v-row>
</template>

<script>
import AddPayment from "../components/AddPayment.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";

import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "DashboardElement",

  components: {
    AddPayment,
    PaymentsDisplay,
    Pagination,
  },

  data() {
    return {
      page: "",
      curPage: 1,
      n: 10,
      modalSettings: {},
      dialog: false,
    };
  },

  methods: {
    // Для универсальной записи
    // Список mapActions
    ...mapActions(["fetchData", "fetchCategory"]),

    // Список мутаций
    ...mapMutations(["setPaymentListData", "addDataToPaymentList"]),

    addData(data) {
      console.log(data);
      // this.paymentsList.push(data);
      // Второй метод вывода
      // this.paymentsList = [...this.paymentsList, data];
      this.addDataToPaymentList(data);
    },

    /**
     * Изменение содержимого страницы (от номера страницы)
     * @param {number} номер страницы
     */
    onChangePage(p) {
      this.curPage = p;
    },
  },

  computed: {
    // Список getters
    ...mapGetters({
      paymentsList: "getPaymentList",
      categoryList: "getCategoryList",
    }),

    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },

    /**
     * Посчитать количество обрезанных страниц (Выделение 10 элементов)
     */
    currentElements() {
      const { n, curPage } = this;
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n);
    },
  },

  created() {
    this.fetchData();
    if (!this.categoryList.length) {
      this.fetchCategory();
    }
  },
};
</script>

<style>
</style>