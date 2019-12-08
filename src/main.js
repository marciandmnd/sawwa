import Vue from 'vue'
import App from './App.vue'
import Contact from './components/Contact.vue'
import Main from './components/Main.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

import { jexiaClient } from "jexia-sdk-js/browser";

import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import i18n from '@/plugins/i18n'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Main},
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// Jexia client code
const clientPromise = jexiaClient()
  .init({
    projectID: "09e9ee1a-0d0d-456b-a7de-6a65adc0e5e2",
    key: "41d64e3b-27a4-4ae7-a6ef-6c4d047eb152",
    secret: "R2owLy1BuGXqDAkQkUFKbYCalOJwuv2RFfpItMqLEu8ysmbRyf8KrjpL5W3Qvt21ExyoRZXwKghXDao2LAWYMA==",
  });

clientPromise.then((/*client*/) => {
  // you have been succesfully logged in!
  // eslint-disable-next-line no-console
  console.log('Jexia login success');
}).catch((error) => {
  // uh-oh, there was a problem logging in, check error.message for more info
  // eslint-disable-next-line no-console
  console.error(error.message);
});

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
