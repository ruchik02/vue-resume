<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="mx-auto" elevation="8" rounded="lg">
          <v-parallax
            height="200"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          >
            <div class="d-flex fill-height align-center justify-center">
              <div class="text-center">
                <v-avatar size="120" class="mb-3">
                  <v-img
                    src="https://avatars.githubusercontent.com/u/83516020?v=4"
                    alt="Profile"
                  ></v-img>
                </v-avatar>
                <h1 class="text-h4 font-weight-bold white--text">
                  {{ $store.getters.getPersonalInfo.name }}
                </h1>
                <p class="text-h6 white--text">
                  {{ $store.getters.getPersonalInfo.title }}
                </p>
              </div>
            </div>
          </v-parallax>

          <v-card-text class="text-center pa-6">
            <p class="text-body-1">
              {{ $store.getters.getPersonalInfo.bio }}
            </p>

            <v-row class="mt-6">
              <v-col cols="12" sm="6">
                <v-btn
                  block
                  color="primary"
                  variant="elevated"
                  to="/projects"
                  prepend-icon="mdi-folder-multiple"
                >
                  View Projects
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  block
                  color="secondary"
                  variant="elevated"
                  to="/contact"
                  prepend-icon="mdi-email"
                >
                  Contact Me
                </v-btn>
              </v-col>
            </v-row>

            <v-divider class="my-6"></v-divider>

            <div class="d-flex justify-space-around">
              <v-btn
                v-for="(link, platform) in $store.getters.getSocialLinks"
                :key="platform"
                :href="link"
                target="_blank"
                icon
                color="primary"
              >
                <v-icon size="24">mdi-{{ platform }}</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.v-card {
  transition: transform 0.3s;
}

.v-card:hover {
  transform: translateY(-5px);
}

.v-avatar {
  border: 4px solid white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
</style> 