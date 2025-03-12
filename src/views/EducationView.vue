<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 font-weight-bold text-center mb-6">Education</h1>

        <v-timeline density="comfortable" align="start">
          <v-timeline-item
            v-for="(edu, index) in education"
            :key="index"
            dot-color="primary"
            size="small"
          >
            <template v-slot:opposite>
              <div class="text-h6">{{ edu.year }}</div>
            </template>
            
            <v-card elevation="4" class="mb-4">
              <v-card-title class="text-h5">
                {{ edu.degree }}
              </v-card-title>
              <v-card-subtitle class="pt-2">
                <div class="d-flex align-center">
                  <v-icon color="primary" class="mr-2">mdi-school</v-icon>
                  {{ edu.institution }}
                </div>
                <div class="d-flex align-center mt-2">
                  <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
                  {{ edu.location }}
                </div>
              </v-card-subtitle>
              <v-card-text>
                <div class="text-subtitle-1 mb-2">Key Achievements:</div>
                <v-list density="comfortable">
                  <v-list-item
                    v-for="(achievement, i) in edu.achievements"
                    :key="i"
                    :title="achievement"
                    prepend-icon="mdi-check-circle"
                  ></v-list-item>
                </v-list>

                <v-chip-group class="mt-4">
                  <v-chip
                    v-for="(subject, i) in edu.subjects"
                    :key="i"
                    color="primary"
                    variant="outlined"
                    size="small"
                  >
                    {{ subject }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EducationView',
  data() {
    return {
      education: [
        {
          year: '2019 - 2023',
          degree: 'Bachelor of Science in Computer Science',
          institution: 'Chitkara University',
          location: 'Baddi, Himachal Pradesh',
          achievements: [
            'Graduated with First Class Honours',
            'President of Computer Science Society',
            'Published research paper on AI applications'
          ],
          subjects: [
            'Data Structures',
            'Algorithms',
            'Database Systems',
            'Web Development',
            'AI & Machine Learning'
          ]
        },
        {
          year: '2018 - 2019',
          degree: 'High Secondary Education',
          institution: 'SD Public School',
          location: 'Yamunanagar, Haryana',
          achievements: [
            'Dean\'s List for academic excellence',
            'Led team project for local business',
            'Won coding competition'
          ],
          subjects: [
            'Programming Fundamentals',
            'Web Design',
            'Software Engineering',
            'Mobile Development'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateX(8px);
}

.v-timeline-item {
  margin-bottom: 24px;
}

.v-chip {
  margin: 4px;
}
</style> 