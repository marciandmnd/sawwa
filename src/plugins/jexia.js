// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)

// const messages = {    'en': {
//   title: 'Sawwa'
// },
// 'ar': {
//   title: 'سواء'
// }};

// export default new VueI18n({
//   locale: 'en', // set locale
//   // fallbackLocale: 'es', // set fallback locale
//   messages, // set locale messages
// })

///
// import Vue from 'vue'
import { jexiaClient, UMSModule } from "jexia-sdk-js/browser";

// const ums = new UMSModule(); 

// const clientPromise = jexiaClient()
//   .init({
//     projectID: "09e9ee1a-0d0d-456b-a7de-6a65adc0e5e2",
//     key: "41d64e3b-27a4-4ae7-a6ef-6c4d047eb152",
//     secret: "R2owLy1BuGXqDAkQkUFKbYCalOJwuv2RFfpItMqLEu8ysmbRyf8KrjpL5W3Qvt21ExyoRZXwKghXDao2LAWYMA==",
//   }, ums);

// clientPromise.then((client) => {
//   // you have been succesfully logged in!
//   // eslint-disable-next-line no-console
//   console.log('Jexia login success');
//   window.test = client
//   Vue.use(client)
// }).catch((error) => {
//   // uh-oh, there was a problem logging in, check error.message for more info
//   // eslint-disable-next-line no-console
//   console.error(error.message);
// // });



// const optionsDefaults = {
//   // // Retrieves the current logged in user that is posting a comment
//   // commenterSelector() {
//   //     return {
//   //         id: null,
//   //         fullName: 'Anonymous',
//   //         initials: '--',
//   //         email: null
//   //     }
//   // },
//   data: {
//       // Hash object of all elements that can be commented on
//       // targets: {},
//       // onCreate(created) {
//       //     this.targets[created.targetId].comments.push(created)
//       // },
//       // onEdit(editted) {
//       //     // This is obviously not necessary
//       //     // It's there to illustrate what could be done in the callback of a remote call
//       //     let comments = this.targets[editted.targetId].comments
//       //     comments.splice(comments.indexOf(editted), 1, editted);
//       // },
//       // onRemove(removed) {
//       //     let comments = this.targets[removed.targetId].comments
//       //     comments.splice(comments.indexOf(removed), 1);
//       // }
//   }
// }

export default {
  install(vue, opts){
      // eslint-disable-next-line no-console
      console.log(vue, opts)
      // eslint-disable-next-line no-console
      console.log('Installing the Jexia plugin!')
      // Fun will happen here
      const ums = new UMSModule(); 

      const clientPromise = jexiaClient()
        .init({
          projectID: "09e9ee1a-0d0d-456b-a7de-6a65adc0e5e2",
          key: "41d64e3b-27a4-4ae7-a6ef-6c4d047eb152",
          secret: "R2owLy1BuGXqDAkQkUFKbYCalOJwuv2RFfpItMqLEu8ysmbRyf8KrjpL5W3Qvt21ExyoRZXwKghXDao2LAWYMA==",
        }, ums);

      clientPromise.then((client) => {
        // you have been succesfully logged in!
        // eslint-disable-next-line no-console
        console.log('Jexia login success');
        vue.prototype.$jexiaClient = client
      }).catch((error) => {
        // uh-oh, there was a problem logging in, check error.message for more info
        // eslint-disable-next-line no-console
        console.error(error.message);
      });

  }
}