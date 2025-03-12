<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 font-weight-bold text-center mb-6">Contact Me</h1>

        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="4" class="mb-6">
              <v-card-text>
                <h2 class="text-h5 mb-4">Get in Touch</h2>
                <v-form @submit.prevent="handleSubmit" ref="form">
                  <v-text-field
                    v-model="form.name"
                    label="Name"
                    prepend-icon="mdi-account"
                    :rules="[v => !!v || 'Name is required']"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    prepend-icon="mdi-email"
                    :rules="[
                      v => !!v || 'Email is required',
                      v => /.+@.+\..+/.test(v) || 'Email must be valid'
                    ]"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="form.subject"
                    label="Subject"
                    prepend-icon="mdi-format-title"
                    :rules="[v => !!v || 'Subject is required']"
                    required
                  ></v-text-field>

                  <v-textarea
                    v-model="form.message"
                    label="Message"
                    prepend-icon="mdi-message-text"
                    :rules="[v => !!v || 'Message is required']"
                    required
                  ></v-textarea>

                  <v-btn
                    type="submit"
                    color="primary"
                    block
                    class="mt-4"
                    :loading="loading"
                  >
                    Send Message
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="4" class="mb-6">
              <v-card-text>
                <h2 class="text-h5 mb-4">Contact Information</h2>
                
                <v-list>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-email</v-icon>
                    </template>
                    <v-list-item-title>Email</v-list-item-title>
                    <v-list-item-subtitle>
                      <a :href="'mailto:' + $store.getters.getPersonalInfo.email">
                        {{ $store.getters.getPersonalInfo.email }}
                      </a>
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-map-marker</v-icon>
                    </template>
                    <v-list-item-title>Location</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ $store.getters.getPersonalInfo.location }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>

                <v-divider class="my-4"></v-divider>

                <h3 class="text-h6 mb-4">Social Media</h3>
                <div class="d-flex justify-space-around">
                  <v-btn
                    v-for="(link, platform) in $store.getters.getSocialLinks"
                    :key="platform"
                    :href="link"
                    target="_blank"
                    icon
                    color="primary"
                    variant="tonal"
                  >
                    <v-icon>mdi-{{ platform }}</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>

            <v-card elevation="4">
              <!-- <v-card-text>
                <h2 class="text-h5 mb-4">Office Hours</h2>
                <v-list density="compact">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-clock-outline</v-icon>
                    </template>
                    <v-list-item-title>Monday - Friday</v-list-item-title>
                    <v-list-item-subtitle>9:00 AM - 5:00 PM</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-clock-outline</v-icon>
                    </template>
                    <v-list-item-title>Saturday</v-list-item-title>
                    <v-list-item-subtitle>10:00 AM - 2:00 PM</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-clock-outline</v-icon>
                    </template>
                    <v-list-item-title>Sunday</v-list-item-title>
                    <v-list-item-subtitle>Closed</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      snackbar: {
        show: false,
        text: '',
        color: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate()
      
      if (valid) {
        this.loading = true
        // Simulate form submission
        setTimeout(() => {
          this.loading = false
          this.snackbar = {
            show: true,
            text: 'Message sent successfully!',
            color: 'success'
          }
          this.$refs.form.reset()
        }, 1500)
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-2px);
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: var(--v-primary-base);
}
</style> 