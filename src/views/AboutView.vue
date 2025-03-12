<template>
  <v-container class="about-container">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <div class="about-header text-center">
          <h1 class="text-h2 font-weight-bold mb-6 gradient-text">About Me</h1>
          <div class="diagonal-background"></div>
        </div>
        
        <v-card class="about-card mb-6" elevation="8" rounded="xl">
          <div class="profile-section">
            <v-row>
              <v-col cols="12" md="4" class="text-center position-relative">
                <div class="profile-image-container">
                  <v-avatar size="200" class="profile-avatar">
                    <v-img
                      src="https://avatars.githubusercontent.com/u/83516020?v=4"
                      alt="Profile"
                    ></v-img>
                  </v-avatar>
                  <div class="profile-background"></div>
                </div>
                <div class="contact-info mt-4">
                  <v-chip class="ma-2" color="primary" size="large">
                    <v-icon start>mdi-map-marker</v-icon>
                    {{ $store.getters.getPersonalInfo.location }}
                  </v-chip>
                  <v-chip class="ma-2" color="primary" size="large">
                    <v-icon start>mdi-email</v-icon>
                    {{ $store.getters.getPersonalInfo.email }}
                  </v-chip>
                </div>
              </v-col>
              
              <v-col cols="12" md="8">
                <div class="bio-section pa-4">
                  <h2 class="text-h4 font-weight-bold mb-4 primary--text">Professional Summary</h2>
                  <p class="text-body-1 mb-6 bio-text">
                    {{ $store.getters.getPersonalInfo.desc }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </div>

          <v-divider class="my-6"></v-divider>
                
          <div class="services-section pa-4">
            <h2 class="text-h4 font-weight-bold mb-6 text-center primary--text">What I Do</h2>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-card class="service-card" elevation="4" rounded="lg">
                  <div class="service-icon">
                    <v-icon color="primary" size="48">mdi-web</v-icon>
                  </div>
                  <v-card-text class="text-center">
                    <h3 class="text-h6 font-weight-bold mb-2">Web Development</h3>
                    <p>Creating responsive and dynamic web applications using modern frameworks and technologies.</p>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <v-col cols="12" sm="6" md="3">
                <v-card class="service-card" elevation="4" rounded="lg">
                  <div class="service-icon">
                    <v-icon color="primary" size="48">mdi-database</v-icon>
                  </div>
                  <v-card-text class="text-center">
                    <h3 class="text-h6 font-weight-bold mb-2">Backend Development</h3>
                    <p>Building robust and scalable server-side applications and APIs.</p>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <v-col cols="12" sm="6" md="3">
                <v-card class="service-card" elevation="4" rounded="lg">
                  <div class="service-icon">
                    <v-icon color="primary" size="48">mdi-palette</v-icon>
                  </div>
                  <v-card-text class="text-center">
                    <h3 class="text-h6 font-weight-bold mb-2">UI/UX Design</h3>
                    <p>Designing intuitive and beautiful user interfaces with great user experience.</p>
                  </v-card-text>
                </v-card>
              </v-col>
              
              <v-col cols="12" sm="6" md="3">
                <v-card class="service-card" elevation="4" rounded="lg">
                  <div class="service-icon">
                    <v-icon color="primary" size="48">mdi-cloud</v-icon>
                  </div>
                  <v-card-text class="text-center">
                    <h3 class="text-h6 font-weight-bold mb-2">Cloud Services</h3>
                    <p>Deploying and managing applications using cloud platforms and DevOps practices.</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-container {
  position: relative;
  padding-top: 2rem;
}

.diagonal-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-secondary-base) 100%);
  transform: skewY(-3deg);
  transform-origin: top left;
  z-index: -1;
}

.gradient-text {
  background: linear-gradient(45deg, var(--v-primary-base), var(--v-secondary-base));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.about-card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.profile-section {
  position: relative;
  padding: 2rem;
}

.profile-image-container {
  position: relative;
  display: inline-block;
}

.profile-avatar {
  border: 4px solid var(--v-primary-base);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}

.profile-background {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(45deg, var(--v-primary-base), var(--v-secondary-base));
  opacity: 0.1;
  border-radius: 50%;
  z-index: 1;
}

.bio-text {
  line-height: 1.8;
  font-size: 1.1rem;
}

.service-card {
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  border: 1px solid rgba(var(--v-primary-base), 0.1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.service-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-top: 1rem;
  position: relative;
}

.service-icon::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  background: var(--v-primary-base);
  opacity: 0.1;
  border-radius: 50%;
  z-index: 1;
}

.service-icon .v-icon {
  z-index: 2;
}

.contact-info {
  margin-top: 2rem;
}

.contact-info .v-chip {
  transition: transform 0.2s;
}

.contact-info .v-chip:hover {
  transform: scale(1.05);
}
</style>