<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link @click="navigate('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div v-if="!loggedIn">
         <v-list-item link @click="navigate('/login')">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="navigate('/register')">
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </div>
        <div v-else>
          <v-list-item link @click="logout">
            <v-list-item-action>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-list-item link @click="navigate('/contact')">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ $t('title') }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-flag</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(language, $index) in languages"
            :key="$index"
            @click="() => {}"
          >
            <v-list-item-title @click="() => changeLocale(language.language)">
              {{ language.language }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <router-view @loginSuccess="() => this.loggedIn = true"></router-view>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import i18n from '@/plugins/i18n'

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      loggedIn: localStorage.getItem('__jexia_tokens__'),
      languages: [
        { language: 'en', title: 'English' },
        { language: 'ar', title: 'Arabic' }
      ]
    }),
    methods: {
      logout() {
        localStorage.removeItem('__jexia_tokens__')
        localStorage.removeItem('__default_auth__')

        this.loggedIn = false

        this.$router.push('/login')
      },
      changeLocale(locale) {
        i18n.locale = locale;
      },
      navigate: function(path) {
        this.$router.push(path).catch(() => {})
      }
    }
    }
</script>