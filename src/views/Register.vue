<template>
  <div>
    <h1>Register</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-row>
        <v-btn
          :disabled="!valid"
          color="success"
          @click="register"
        >
          Register
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
  export default {
      methods: {
          async register() {
              var vm = this
              await this.$jexiaClient.modules[0].signUp({  
                email: vm.email,  
                password: vm.password  
              });

              vm.$emit('loginSuccess')
              vm.$router.push('/dashboard')
          }
      },
      data: () => ({
        valid: false,
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
      }),
  }
</script>