import Vue from 'vue'
import App from './App.vue'
import { jexiaClient } from "jexia-sdk-js/browser";

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
  render: h => h(App),
}).$mount('#app')
