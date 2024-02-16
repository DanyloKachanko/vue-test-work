import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rates: [],
    loading: false,
  },
  getters: {},
  mutations: {
    setRates(state, rates) {
      state.rates = rates;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchRates({ commit }) {
      commit("setLoading", true);
      try {
        const response = await axios.get(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        );
        commit("setRates", response.data);
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  modules: {},
});
