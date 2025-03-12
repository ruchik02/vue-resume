<template>
  <v-container class="skills-container">
    <div class="skills-header text-center">
      <h1 class="text-h3 font-weight-bold text-center mb-6">My Skills</h1>
      <h1 class="text-h2 font-weight-bold mb-6 animated-text"></h1>
      <div class="floating-bubbles">
        <div v-for="n in 6" :key="n" class="bubble" :class="'bubble-' + n"></div>
      </div>
    </div>

    <!-- 3D Skills Showcase -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="10">
        <div class="skills-showcase">
          <div class="rotating-cube">
            <div class="cube-face front">
              <v-icon size="48" color="primary">mdi-language-javascript</v-icon>
            </div>
            <div class="cube-face back">
              <v-icon size="48" color="secondary">mdi-vuejs</v-icon>
            </div>
            <div class="cube-face right">
              <v-icon size="48" color="info">mdi-nodejs</v-icon>
            </div>
            <div class="cube-face left">
              <v-icon size="48" color="success">mdi-react</v-icon>
            </div>
            <div class="cube-face top">
              <v-icon size="48" color="warning">mdi-language-python</v-icon>
            </div>
            <div class="cube-face bottom">
              <v-icon size="48" color="error">mdi-database</v-icon>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Interactive Skill Categories -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="10">
        <div class="skill-categories">
          <v-card 
            v-for="(category, index) in skillCategories" 
            :key="index"
            class="skill-category-card"
            :class="{'active': selectedCategory === index}"
            @click="selectCategory(index)"
            elevation="8"
          >
            <div class="category-content">
              <div class="category-icon-wrapper">
                <v-icon size="48" :color="category.color">{{ category.icon }}</v-icon>
                <div class="ripple-background">
                  <div v-for="n in 4" :key="n" class="circle" :style="{ '--i': n }"></div>
                </div>
              </div>
              <v-card-title class="text-center">{{ category.name }}</v-card-title>
              <div class="skill-meter">
                <div class="meter-circle">
                  <svg>
                    <circle cx="60" cy="60" r="50"></circle>
                    <circle cx="60" cy="60" r="50" :style="{ 'stroke-dashoffset': 314 - (314 * category.level) / 100 }"></circle>
                  </svg>
                  <div class="percentage">{{ category.level }}%</div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Detailed Skills with 3D Cards -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-slide-y-transition group>
          <div v-if="selectedCategory !== null" class="detailed-skills" key="skills">
            <v-card 
              v-for="skill in getSkillsByCategory(selectedCategory)" 
              :key="skill"
              class="skill-detail-card"
              elevation="4"
            >
              <div class="skill-detail-content">
                <div class="skill-icon-3d">
                  <v-icon :icon="getSkillIcon(skill)" size="32" :color="skillCategories[selectedCategory].color"></v-icon>
                </div>
                <div class="skill-info">
                  <h3 class="text-h6">{{ skill }}</h3>
                  <div class="skill-progress-wrapper">
                    <div class="skill-progress">
                      <div 
                        class="progress-fill" 
                        :style="{ width: getSkillLevel(skill) + '%', backgroundColor: skillCategories[selectedCategory].color }"
                      ></div>
                      <div class="progress-particles">
                        <div v-for="n in 5" :key="n" class="particle" :style="{ '--n': n }"></div>
                      </div>
                    </div>
                    <span class="skill-percentage">{{ getSkillLevel(skill) }}%</span>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
          <div v-else class="text-center" key="placeholder">
            <p class="text-h6">Select a category to view detailed skills</p>
          </div>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SkillsView',
  data() {
    return {
      selectedCategory: null,
      skillCategories: [
        {
          name: 'Frontend',
          level: 90,
          color: '#2196F3',
          icon: 'mdi-monitor-dashboard'
        },
        {
          name: 'Backend',
          level: 85,
          color: '#4CAF50',
          icon: 'mdi-database'
        },
        {
          name: 'DevOps',
          level: 80,
          color: '#FF9800',
          icon: 'mdi-cloud'
        }
      ]
    }
  },
  methods: {
    selectCategory(index) {
      this.selectedCategory = this.selectedCategory === index ? null : index
    },
    getSkillsByCategory(categoryIndex) {
      const categories = ['frontend', 'backend', 'tools']
      return this.$store.getters.getSkills[categories[categoryIndex]] || []
    },
    getSkillIcon(skill) {
      const icons = {
        'Vue.js': 'mdi-vuejs',
        'React': 'mdi-react',
        'Node.js': 'mdi-nodejs',
        'Python': 'mdi-language-python',
        'JavaScript': 'mdi-language-javascript',
        'HTML5': 'mdi-language-html5',
        'CSS3': 'mdi-language-css3',
        'Git': 'mdi-git',
        'Docker': 'mdi-docker',
        'AWS': 'mdi-aws',
        'SQL': 'mdi-database',
        'MongoDB': 'mdi-database',
        'Redis': 'mdi-database',
        'Figma': 'mdi-figma'
      }
      return icons[skill] || 'mdi-code-tags'
    },
    getSkillLevel(skill) {
      const levels = {
        'Vue.js': 90,
        'React': 85,
        'Node.js': 88,
        'Python': 82,
        'JavaScript': 95,
        'HTML5': 95,
        'CSS3': 90,
        'Git': 88,
        'Docker': 80,
        'AWS': 75,
        'SQL': 85,
        'MongoDB': 82,
        'Redis': 78,
        'Figma': 85
      }
      return levels[skill] || 80
    }
  }
}
</script>

<style scoped>
.skills-container {
  position: relative;
  padding-top: 2rem;
  overflow: hidden;
}

/* Animated Text */
.animated-text {
  background: linear-gradient(45deg, var(--v-primary-base), var(--v-secondary-base));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(var(--v-primary-base), 0.2),
                 0 0 20px rgba(var(--v-primary-base), 0.2),
                 0 0 30px rgba(var(--v-primary-base), 0.2);
  }
  to {
    text-shadow: 0 0 20px rgba(var(--v-primary-base), 0.4),
                 0 0 30px rgba(var(--v-primary-base), 0.4),
                 0 0 40px rgba(var(--v-primary-base), 0.4);
  }
}

/* Floating Bubbles */
.floating-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.bubble {
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(var(--v-primary-base), 0.1);
  border-radius: 50%;
  animation: float 8s infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-100px) rotate(180deg);
  }
}

.bubble-1 { left: 10%; animation-delay: 0s; }
.bubble-2 { left: 30%; animation-delay: 2s; }
.bubble-3 { left: 50%; animation-delay: 4s; }
.bubble-4 { left: 70%; animation-delay: 6s; }
.bubble-5 { left: 90%; animation-delay: 8s; }
.bubble-6 { left: 20%; animation-delay: 10s; }

/* 3D Rotating Cube */
.skills-showcase {
  perspective: 1000px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rotating-cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 20s infinite linear;
}

.cube-face {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.front  { transform: translateZ(50px); }
.back   { transform: rotateY(180deg) translateZ(50px); }
.right  { transform: rotateY(90deg) translateZ(50px); }
.left   { transform: rotateY(-90deg) translateZ(50px); }
.top    { transform: rotateX(90deg) translateZ(50px); }
.bottom { transform: rotateX(-90deg) translateZ(50px); }

@keyframes rotate {
  from { transform: rotateX(0) rotateY(0) rotateZ(0); }
  to { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

/* Skill Categories */
.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.skill-category-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 16px;
  overflow: hidden;
}

.skill-category-card.active {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.category-content {
  padding: 2rem;
  position: relative;
}

.category-icon-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ripple Effect */
.ripple-background {
  position: absolute;
  width: 100%;
  height: 100%;
}

.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--v-primary-base);
  border-radius: 50%;
  animation: ripple 2s linear infinite;
  opacity: 0;
}

@keyframes ripple {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.circle:nth-child(1) { animation-delay: calc(0.5s * var(--i)); }

/* Skill Meter */
.skill-meter {
  margin-top: 1rem;
}

.meter-circle {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.meter-circle svg {
  position: relative;
  width: 120px;
  height: 120px;
  transform: rotate(-90deg);
}

.meter-circle svg circle {
  width: 100px;
  height: 100px;
  fill: none;
  stroke-width: 8;
  stroke: rgba(var(--v-primary-base), 0.1);
  transform: translate(5px, 5px);
  stroke-dasharray: 314;
  stroke-dashoffset: 0;
}

.meter-circle svg circle:nth-child(2) {
  stroke: var(--v-primary-base);
  stroke-dashoffset: calc(314 - (314 * 90) / 100);
  transition: stroke-dashoffset 1s ease;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
}

/* Detailed Skills */
.detailed-skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.skill-detail-card {
  border-radius: 12px;
  transition: all 0.3s ease;
}

.skill-detail-card:hover {
  transform: translateY(-5px) rotate(2deg);
}

.skill-detail-content {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.skill-icon-3d {
  width: 60px;
  height: 60px;
  background: rgba(var(--v-primary-base), 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: perspective(500px) rotateY(15deg);
  transition: transform 0.3s ease;
}

.skill-detail-card:hover .skill-icon-3d {
  transform: perspective(500px) rotateY(-15deg);
}

.skill-info {
  flex: 1;
}

.skill-progress-wrapper {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-progress {
  flex: 1;
  height: 8px;
  background: rgba(var(--v-primary-base), 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
  position: relative;
}

.progress-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  animation: particle 2s infinite;
  opacity: 0;
}

@keyframes particle {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-20px) scale(0);
    opacity: 0;
  }
}

.particle:nth-child(1) { left: 10%; animation-delay: calc(0.2s * var(--n)); }
.particle:nth-child(2) { left: 30%; animation-delay: calc(0.3s * var(--n)); }
.particle:nth-child(3) { left: 50%; animation-delay: calc(0.4s * var(--n)); }
.particle:nth-child(4) { left: 70%; animation-delay: calc(0.5s * var(--n)); }
.particle:nth-child(5) { left: 90%; animation-delay: calc(0.6s * var(--n)); }

.skill-percentage {
  min-width: 45px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .skills-showcase {
    height: 150px;
  }
  
  .rotating-cube {
    width: 80px;
    height: 80px;
  }
  
  .cube-face {
    width: 80px;
    height: 80px;
  }
  
  .detailed-skills {
    grid-template-columns: 1fr;
  }
}
</style>