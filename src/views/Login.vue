<template>
  <div>
    <h1>Login</h1>
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
          @click="login"
        >
          Login
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
  export default {
    methods: {
      async login() {
        var vm = this

        const token = await vm.$jexiaClient.modules[0].signIn({  
          email: vm.email,  
          password: vm.password
        })

        localStorage.setItem('token', token)
        const user = await vm.$jexiaClient.modules[0].getUser(vm.email)
        localStorage.setItem('user', user)

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