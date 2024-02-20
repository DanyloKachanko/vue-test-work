<template>
  <v-app>
    <v-main>
      <CurrecyTable/>
    </v-main>
  </v-app>
</template>

<script>
import CurrecyTable from './components/CurrecyTable.vue'

export default {
  name: 'App',

  components: {
    CurrecyTable,
  },

  data: () => ({
    //
  }),
}
</script>
