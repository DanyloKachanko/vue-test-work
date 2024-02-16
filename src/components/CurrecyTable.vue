<template>
  <v-container fluid>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Пошук по валюті"
      class="mb-3"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="filteredRates"
      :loading="loading"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'Валюта', value: 'txt' },
        { text: 'Курс', value: 'rate' },
      ],
    };
  },
  computed: {
    ...mapState(['rates', 'loading']),
    filteredRates() {
      return this.search ? this.rates.filter(rate => rate.txt.toLowerCase().includes(this.search.toLowerCase())) : this.rates;
    }
  },
  created() {
    this.$store.dispatch('fetchRates');
  },
};
</script>