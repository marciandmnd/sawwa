<style scoped>
  button {
    padding: 15px;
    border: 1px solid green;
    font-size: 18px;
    margin: 15px;
  }
</style>

<template>
  <v-app>
    <v-content>
      <Layout/>
    </v-content>
  </v-app>
</template>

<script>

import Layout from './components/Layout';

export default {
  name: 'App',

  components: {
    Layout,
  },


};
</script>
