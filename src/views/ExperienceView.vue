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
            'Lead development of enterprise-level web applications',
            'Architect and implement scalable backend solutions',
            'Mentor junior developers and conduct code reviews',
            'Collaborate with cross-functional teams to define project requirements'
          ],
          achievements: [
            'Reduced application load time by 40% through optimization',
            'Successfully led team of 5 developers in major platform upgrade',
            'Implemented CI/CD pipeline reducing deployment time by 60%'
          ],
          technologies: ['Vue.js', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
          projects: [
            {
              name: 'Enterprise Dashboard',
              description: 'Led development of company\'s flagship analytics dashboard used by 500+ clients'
            },
            {
              name: 'API Gateway',
              description: 'Designed and implemented microservices architecture serving 1M+ requests daily'
            }
          ]
        },
        {
          period: '2023 - 2024',
          role: 'Software Engineer',
          company: 'GeekyAnts',
          companyLogo: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1455093153/ft8vyhw8hulcadw8akdy.png',
          location: 'Bengaluru, Karnataka',
          color: 'secondary',
          responsibilities: [
            'Developed and maintained multiple client web applications',
            'Implemented responsive designs and user interfaces',
            'Integrated third-party APIs and services',
            'Participated in agile development processes'
          ],
          achievements: [
            'Received "Developer of the Year" award in 2020',
            'Reduced bug reports by 45% through improved testing practices',
            'Successfully delivered 12 major projects ahead of schedule'
          ],
          technologies: ['React', 'Python', 'PostgreSQL', 'Redis', 'GCP'],
          projects: [
            {
              name: 'E-commerce Platform',
              description: 'Built scalable e-commerce solution handling $2M+ in annual transactions'
            },
            {
              name: 'CRM System',
              description: 'Developed custom CRM system improving customer service efficiency by 35%'
            }
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
            'Assisted in development of web applications',
            'Fixed bugs and implemented new features',
            'Wrote unit tests and documentation',
            'Participated in code reviews'
          ],
          achievements: [
            'Promoted to lead developer on mobile app project',
            'Implemented feature that increased user engagement by 25%',
            'Created developer documentation framework'
          ],
          technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
          projects: [
            {
              name: 'Social Media Dashboard',
              description: 'Developed analytics dashboard for social media management'
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