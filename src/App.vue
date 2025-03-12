<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheFooter
  },
  setup() {
    const drawer = ref(false)
    const store = useStore()

    const menuItems = [
      { title: 'Home', path: '/', icon: 'mdi-home' },
      { title: 'About', path: '/about', icon: 'mdi-account' },
      { title: 'Skills', path: '/skills', icon: 'mdi-lightning-bolt' },
      { title: 'Experience', path: '/experience', icon: 'mdi-briefcase' },
      { title: 'Education', path: '/education', icon: 'mdi-school' },
      { title: 'Projects', path: '/projects', icon: 'mdi-folder-multiple' },
      { title: 'Contact', path: '/contact', icon: 'mdi-email' }
    ]

    const toggleTheme = () => {
      store.dispatch('toggleTheme')
    }

    return {
      drawer,
      menuItems,
      toggleTheme
    }
  }
}
</script>

<template>
  <v-app :theme="$store.getters.getThemeMode ? 'dark' : 'light'">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="elevation-4"
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://avatars.githubusercontent.com/u/83516020?v=4"
          :title="$store.getters.getPersonalInfo.name"
          :subtitle="$store.getters.getPersonalInfo.title"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          :prepend-icon="item.icon"
          :title="item.title"
          rounded="lg"
        ></v-list-item>
      </v-list>

      <!-- <template v-slot:append>
        <v-list>
          <v-list-item
            prepend-icon="mdi-brightness-6"
            title="Toggle Theme"
            @click="toggleTheme"
          ></v-list-item>
        </v-list>
      </template> -->
    </v-navigation-drawer>

    <v-app-bar app elevation="4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Portfolio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ $store.getters.getThemeMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height">
        <router-view v-slot="{ Component }">
          <v-fade-transition mode="out-in">
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>

    <TheFooter />
  </v-app>
</template>

<style>
.v-navigation-drawer {
  transition: 0.2s ease-in-out;
}

.v-main {
  transition: background-color 0.2s ease-in-out;
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>