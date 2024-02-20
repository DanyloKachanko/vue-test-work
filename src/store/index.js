import { defineStore } from "pinia";
import axios from "axios";

export const useRatesStore = defineStore("rates", {
  state: () => ({
    rates: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async fetchRates() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        );
        this.rates = response.data;
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
