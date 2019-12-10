import { jexiaClient, UMSModule, dataOperations } from "jexia-sdk-js/browser";

export default {
  install(vue, opts){
      // eslint-disable-next-line no-console
      console.log(vue, opts)
      // eslint-disable-next-line no-console
      console.log('Installing the Jexia plugin!')
      // Fun will happen here
      const ums = new UMSModule()
      const dataModule = dataOperations()
      const clientPromise = jexiaClient()
        .init({
          projectID: "09e9ee1a-0d0d-456b-a7de-6a65adc0e5e2",
          key: "41d64e3b-27a4-4ae7-a6ef-6c4d047eb152",
          secret: "R2owLy1BuGXqDAkQkUFKbYCalOJwuv2RFfpItMqLEu8ysmbRyf8KrjpL5W3Qvt21ExyoRZXwKghXDao2LAWYMA==",
        }, ums, dataModule);

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