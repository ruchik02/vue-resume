<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 font-weight-bold text-center mb-6">Work Experience</h1>

        <v-timeline side="end" align="start">
          <v-timeline-item
            v-for="(exp, index) in experiences"
            :key="index"
            :dot-color="exp.color"
            size="small"
            fill-dot
          >
            <template v-slot:opposite>
              <div class="text-h6">{{ exp.period }}</div>
              <div class="text-subtitle-2 text-medium-emphasis">{{ exp.location }}</div>
            </template>

            <v-card elevation="4" class="mb-4 experience-card">
              <v-card-title class="d-flex align-center">
                <v-avatar size="48" class="mr-4" color="grey-lighten-2">
                  <v-img :src="exp.companyLogo" cover></v-img>
                </v-avatar>
                <div>
                  <div class="text-h5">{{ exp.role }}</div>
                  <div class="text-subtitle-1 text-primary">{{ exp.company }}</div>
                </div>
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <div class="text-subtitle-1 font-weight-medium mb-3">Key Responsibilities:</div>
                    <v-list density="comfortable">
                      <v-list-item
                        v-for="(responsibility, i) in exp.responsibilities"
                        :key="i"
                        :title="responsibility"
                        prepend-icon="mdi-check-circle"
                        class="text-body-1"
                      ></v-list-item>
                    </v-list>
                  </v-col>

                  <v-col cols="12" class="mt-2">
                    <div class="text-subtitle-1 font-weight-medium mb-3">Achievements:</div>
                    <v-list density="comfortable">
                      <v-list-item
                        v-for="(achievement, i) in exp.achievements"
                        :key="i"
                        class="text-body-1"
                      >
                        <template v-slot:prepend>
                          <v-icon color="success">mdi-star</v-icon>
                        </template>
                        {{ achievement }}
                      </v-list-item>
                    </v-list>
                  </v-col>

                  <v-col cols="12">
                    <div class="text-subtitle-1 font-weight-medium mb-2">Technologies Used:</div>
                    <v-chip-group>
                      <v-chip
                        v-for="tech in exp.technologies"
                        :key="tech"
                        color="primary"
                        variant="outlined"
                        size="small"
                        class="ma-1"
                      >
                        {{ tech }}
                      </v-chip>
                    </v-chip-group>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-expand-transition>
                <div v-if="exp.projects && exp.projects.length">
                  <v-divider></v-divider>
                  <v-card-text>
                    <div class="text-subtitle-1 font-weight-medium mb-3">Notable Projects:</div>
                    <v-row>
                      <v-col
                        v-for="(project, i) in exp.projects"
                        :key="i"
                        cols="12"
                        sm="6"
                      >
                        <v-card variant="outlined" class="project-card">
                          <v-card-title class="text-subtitle-1">{{ project.name }}</v-card-title>
                          <v-card-text>
                            <p class="text-body-2">{{ project.description }}</p>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ExperienceView',
  data() {
    return {
      experiences: [
        {
          period: '2024 - Present',
          role: 'Software Engineer 2',
          company: 'GeekyAnts',
          companyLogo: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1455093153/ft8vyhw8hulcadw8akdy.png',
          location: 'Bengaluru, Karnataka',
          color: 'primary',
          responsibilities: [
            'Led the development of SwiftUI and Vue.js projects, ensuring high-quality and maintainable code.',
            'Built and optimized cross-platform mobile applications using React Native and SwiftUI.',
            'Developed client-focused web applications with Vue.js and Vuetify, ensuring responsive and intuitive UI.',
            'Mentored junior developers, providing guidance on best practices and performance optimization.',
            'Collaborated with designers and product teams to translate requirements into functional applications.'
          ],
          achievements: [
            'Successfully delivered a booking app and a recruiter app (Kingsley Gate) within a 4-5 month timeline.',
            'Successfully led team of 5 developers in major platform upgrade',
            'Reduced frontend load times by 40% through performance optimizations in Vue and SwiftUI applications.',
            'Spearheaded the implementation of Tailwind CSS and Vue.js in modernizing frontend design systems.'
          ],
          technologies: ['Vue.js', 'Node.js', 'SwiftUI', 'React Native', 'Vuetify'],
          projects: [
            {
              name: 'Booking App',
              description: 'Designed and built a SwiftUI-based booking application, optimizing user experience and navigation.s'
            },
            {
              name: 'Recruiter App & Website (Kingsley Gate)',
              description: 'Developed a recruiter platform and website as a client project, ensuring seamless integration and UI/UX consistency.'
            }
          ]
        },
        {
          period: '2023 - 2024',
          role: 'Software Engineer 1',
          company: 'GeekyAnts',
          companyLogo: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1455093153/ft8vyhw8hulcadw8akdy.png',
          location: 'Bengaluru, Karnataka',
          color: 'secondary',
          responsibilities: [
            'Developed and maintained multiple client applications using React Native and SwiftUI.',
            'Designed and implemented responsive UI/UX for cross-platform mobile and web applications.',
            'Integrated third-party APIs and services, ensuring seamless backend communication.',
            'Followed agile development methodologies, collaborating with teams to meet project goals.'
          ],
          achievements: [
            'Successfully completed React Native training and applied learnings to real-world projects.',
            'Led the development of the PayPenny project, ensuring a smooth and intuitive user experience.',
            'Delivered client projects on time, maintaining high-quality standards and performance.',
            'Improved application efficiency and reduced bug reports by 40% through rigorous testing.'
          ],
          technologies: ['React', 'React Native,', 'Tailwind CSS', 'Supabase', 'Hasura'],
          projects: [
            {
              name: 'PayPenny Project',
              description: 'Developed a React Native-based financial application, ensuring seamless transactions and user experience.'
            },
          ]
        },
        {
          period: '2022 - 2023',
          role: 'Trainee Software Engineer',
          company: 'GeekyAnts',
          companyLogo: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1455093153/ft8vyhw8hulcadw8akdy.png',
          location: 'Bengaluru, Karnataka',
          color: 'info',
          responsibilities: [
            'Developed and maintained web applications using HTML, CSS, JavaScript, and React.',
            'Built and optimized responsive UIs for various web projects',
            'Implemented NativeBase components to enhance mobile-friendly designs.',
            'Wrote unit tests and documentation to improve code reliability and maintainability.'
          ],
          achievements: [
            'Successfully completed React training and applied skills to multiple projects.',
            'Built and launched a Twitter clone with modern UI and real-time features.',
            'Developed multiple websites using React, ensuring performance and scalability.',
            'Improved frontend performance and user experience through efficient state management.'
          ],
          technologies: ['HTML', 'CSS', 'JavaScript', 'NativeBase', 'GraphQL', 'Firebase'],
          projects: [
            {
              name: 'Twitter Clone',
              description: 'Built a fully functional Twitter clone, implementing features like tweets, likes, and user authentication.'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience-card {
  transition: transform 0.3s;
}

.experience-card:hover {
  transform: translateX(-8px);
}

.project-card {
  transition: all 0.2s;
  height: 100%;
}

.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.v-timeline-item {
  margin-bottom: 24px;
}

.v-chip {
  margin: 4px;
}

.v-list-item {
  transition: background-color 0.2s;
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style> 