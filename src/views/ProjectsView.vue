<template>
  <v-container class="projects-container pt-0">
    <v-row justify="center">
      <v-col cols="12" md="10" class="pt-0">
        <h1 class="text-h3 font-weight-bold text-center mb-6">My Projects</h1>

        <v-row>
          <v-col cols="12" class="mb-4">
            <v-chip-group
              v-model="selectedCategory"
              selected-class="primary"
              class="justify-center"
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

        <!-- No Projects Found Message -->
        <v-row v-if="filteredProjects.length === 0">
          <v-col cols="12">
            <v-card class="text-center pa-6 my-4" elevation="0">
              <div class="no-projects-content">
                <v-icon
                  size="64"
                  color="grey"
                  class="mb-4"
                >
                  mdi-folder-search-outline
                </v-icon>
                <h3 class="text-h5 mb-2">No Projects Found</h3>
                <p class="text-body-1 text-grey mb-4">
                  No projects available for the selected category: {{ selectedCategory }}
                </p>
                <v-btn
                  color="primary"
                  @click="selectedCategory = 'All'"
                >
                  VIEW ALL PROJECTS
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Projects Grid -->
        <v-row v-else class="mt-2">
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
import portfolioImage from '@/assets/1.png'
import image2 from '@/assets/2.png'
import image3 from '@/assets/3.png'
export default {
  name: 'ProjectsView',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Web', 'Mobile', 'Backend', 'AI/ML'],
      projects: [
        {
          title: 'Modern Website',
          description: 'A modern portfolio and creative hub built with Vue.js, featuring dark/light modes, interactive components, and a responsive design.',
          image: portfolioImage,
          category: 'Web',
          technologies: ['Vue.js', 'Vuetify', 'Vuex', 'Vue Router', 'Firebase'],
          github: 'https://github.com/ruchik02/portfolio-vue',
          demo: null
        },
        {
          title: 'Portfolio',
          description: 'Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dark/light mode, responsive design, and smooth animations.',
          image: image2,
          category: 'Web',
          technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/ruchik02/my-Resume',
          demo: 'https://my-resume-five-bay.vercel.app/'
        },
        {
          title: 'Developer Community',
          description: 'A full-stack social media platform for developers to share their work, post articles, and connect with others. Features include user authentication, real-time interactions, and a modern UI.',
          image: image3,
          category: 'Web',
          technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/ruchik02/dev-connect',
          demo: 'https://dev-connect-ten-eta.vercel.app/'
        },
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
.projects-container {
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  margin-top: 0;
}

.text-h3 {
  margin-top: 1rem;
}

.no-projects-content {
  padding: 2rem 0;
  max-width: 400px;
  margin: 0 auto;
}

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

/* Add animation for the no projects found message */
.v-card {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Center align chips on mobile */
@media (max-width: 600px) {
  .v-chip-group {
    justify-content: center;
  }
}
</style> 