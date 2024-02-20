<template>
  <v-container>
     <v-text-field
      v-model="search"
      label="Поиск"
      class="mb-4"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="filteredRates"
      :loading="loading"
      class="elevation-1"
      loading-text="Loading... Please wait"
    ></v-data-table>
  </v-container>
</template>

<script>
import { onMounted, computed,ref } from 'vue';
import { useRatesStore } from '@/store';

export default {
  setup() {
    const store = useRatesStore();
    const search = ref("");
    onMounted(() => {
      if (store.rates.length === 0) {
        store.fetchRates();
      }
    });

    const headers = [
      { text: 'Currency', align: 'start', value: 'txt' },
      { text: 'Date', value: 'exchangedate' },
      { text: 'Rate', value: 'rate' },
      { text: 'Code', value: 'cc' }, 
    ];
    const rates = computed(() => store.rates.map(rate => ({
      ...rate,
      currency: rate.txt,
    })));

    const filteredRates = computed(() => {
      if (!search.value) {
        return store.rates;
      }
      return store.rates.filter((rate) =>
        rate.txt.toLowerCase().includes(search.value.toLowerCase()) ||
        rate.cc.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    return {
      rates: rates,
      loading: store.loading,
      headers,
      search,
      filteredRates,
    };
  },
};
</script>
