import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {    'en': {
  title: 'Sawwa'
},
'ar': {
  title: 'سواء'
}};

export default new VueI18n({
  locale: 'en', // set locale
  // fallbackLocale: 'es', // set fallback locale
  messages, // set locale messages
})
