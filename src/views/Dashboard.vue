<template>
  <div class="col-10">
    <p>Welcome, {{email}}</p>
    <h1>Dashboard</h1>
    <div v-if="isAdmin">
      <h2>Admin Area</h2>
      <hr/>
      <v-text-field label="text" v-model="text"></v-text-field>
      <v-btn depressed small color="primary" @click="addText">Add text</v-btn>
    </div>
  </div>

</template>
<script>
  export default {
    beforeCreate() {
      if(!localStorage.getItem('__jexia_tokens__')) {
        this.$router.push('/login')
      }
    },
    async mounted() {
      // Redirect to root to allow Jexia client to load
      if(!this.$jexiaClient) window.location.href = '/'
      
      try {
        const corpora = await this.$jexiaClient.modules[1].dataset('corpora')
          .select()
          .execute();
        // eslint-disable-next-line no-console
        console.log(corpora)
        
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        // there was a problem retrieving the records 
      }

    },
    data: function () {
      const tokens = localStorage.getItem('__jexia_tokens__')
      const email = Object.keys(JSON.parse(tokens))[0]

      return {
        isAdmin: email == 'urry@urry.com',
        email,
        text: "",
        // corpora
      }
    },
    methods: {
      addText() {
        const vm = this
        /* eslint-disable no-debugger */
        // debugger
        const corpora = this.$jexiaClient.modules[1].dataset('corpora')

        // Single record
        const insertQuery = corpora.insert({
          corpus: vm.text
        });

        insertQuery.execute()
          .then(records => {
            // eslint-disable-next-line no-console
            console.log(records)
            // you will always get an array of created records, including their generated IDs (even when inserting a single record)
          }).catch(error => {
            // eslint-disable-next-line no-console
            console.error(error)
            // you can see the error info here, if something goes wrong
          });
      }
      
    }
  }
</script>
