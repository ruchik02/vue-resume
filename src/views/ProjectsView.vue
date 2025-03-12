<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 font-weight-bold text-center mb-6">My Projects</h1>

        <v-row>
          <v-col cols="12" class="mb-4">
            <v-chip-group
              v-model="selectedCategory"
              selected-class="primary"
            >
              <v-chip
                v-for="category in categories"
                :key="category"
                :value="category"
                filter
                variant="elevated"
              >
                {{ category }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            v-for="(project, index) in filteredProjects"
            :key="index"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-card
              class="mx-auto project-card"
              elevation="4"
            >
              <v-img
                :src="project.image"
                height="200"
                cover
                class="align-end"
              >
                <v-card-title class="text-white bg-black-transparent pa-4">
                  {{ project.title }}
                </v-card-title>
              </v-img>

              <v-card-text>
                <p class="text-body-1 mb-4">{{ project.description }}</p>
                
                <v-chip-group>
                  <v-chip
                    v-for="tech in project.technologies"
                    :key="tech"
                    color="primary"
                    size="small"
                    variant="outlined"
                  >
                    {{ tech }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  v-if="project.demo"
                  color="primary"
                  variant="text"
                  :href="project.demo"
                  target="_blank"
                  prepend-icon="mdi-play-circle"
                >
                  Live Demo
                </v-btn>
                <v-btn
                  color="primary"
                  variant="text"
                  :href="project.github"
                  target="_blank"
                  prepend-icon="mdi-github"
                >
                  GitHub
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Web', 'Mobile', 'Backend', 'AI/ML'],
      projects: [
        {
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce platform with real-time inventory management and payment processing.',
          image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          category: 'Web',
          technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
          github: 'https://github.com/yourusername/project1',
          demo: 'https://project1-demo.com'
        },
        {
          title: 'AI Image Recognition',
          description: 'Machine learning model that can identify and classify objects in images with high accuracy.',
          image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          category: 'AI/ML',
          technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
          github: 'https://github.com/yourusername/project2',
          demo: 'https://project2-demo.com'
        },
        {
          title: 'Task Management App',
          description: 'Mobile application for task management with real-time collaboration features.',
          image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          category: 'Mobile',
          technologies: ['React Native', 'Firebase', 'Redux'],
          github: 'https://github.com/yourusername/project3',
          demo: null
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'All') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.selectedCategory)
    }
  }
}
</script>

<style scoped>
.project-card {
  transition: transform 0.2s;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
}

.bg-black-transparent {
  background: rgba(0, 0, 0, 0.6);
}

.v-chip {
  margin: 4px;
}
</style> 