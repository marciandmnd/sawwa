import Vue from 'vue'
import App from './App.vue'
import Contact from './components/Contact.vue'
import Main from './components/Main.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import i18n from '@/plugins/i18n'
import jexia from '@/plugins/jexia'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Main},
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard}  
]

Vue.use(jexia)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/dashboard') {
    const tokens = localStorage.getItem('__jexia_tokens__')
    if(!tokens) next('/login')
  }
  next();
});

Vue.config.productionTip = false

new Vue({
  jexia,
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
