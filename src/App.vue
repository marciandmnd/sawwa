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
      <div id="locale-select">
        <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
          <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
        </button>
      </div>
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
