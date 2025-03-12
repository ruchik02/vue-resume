<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
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
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <v-fade-transition mode="out-in">
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>

    <v-footer app class="d-flex flex-column">
      <div class="d-flex justify-space-between align-center w-100 px-4">
        <span>&copy; {{ new Date().getFullYear() }}</span>
        <div>
          <v-btn
            v-for="(link, platform) in $store.getters.getSocialLinks"
            :key="platform"
            :href="link"
            target="_blank"
            icon
            variant="text"
          >
            <v-icon>mdi-{{ platform }}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<style>
.v-navigation-drawer {
  transition: 0.2s ease-in-out;
}

.v-main {
  transition: background-color 0.2s ease-in-out;
}
</style>