<template>
  <v-footer class="custom-footer">
    <div class="footer-content">
      <!-- <div class="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> -->

      <!-- <div class="footer-main pa-6">
        <v-row justify="center" align="center">
          <v-col cols="12" md="4" class="text-center">
            <div class="footer-logo">
              <v-avatar size="80" class="mb-4">
                <v-img src="https://avatars.githubusercontent.com/u/83516020?v=4" alt="Ruchika Sharma"></v-img>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold gradient-text mb-2">Ruchika Sharma</h3>
              <p class="text-body-2">Full Stack Developer</p>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <div class="social-links">
              <v-btn
                v-for="(link, platform) in socialLinks"
                :key="platform"
                :href="link.url"
                target="_blank"
                icon
                variant="text"
                class="mx-2 social-btn"
                :color="link.color"
              >
                <v-icon size="24">{{ link.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <div class="quick-links">
              <v-btn
                v-for="(link, index) in quickLinks"
                :key="index"
                :to="link.path"
                variant="text"
                class="mx-2 quick-link-btn"
                rounded
              >
                {{ link.text }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div> -->

      <v-divider class="my-4"></v-divider>

      <div class="footer-bottom pa-4 text-center">
        <p class="copyright-text mb-0">
          © Ruchika Sharma All rights reserved.
        </p>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      socialLinks: {
        github: {
          url: 'https://github.com/yourusername',
          icon: 'mdi-github',
          color: 'grey'
        },
        linkedin: {
          url: 'https://linkedin.com/in/yourusername',
          icon: 'mdi-linkedin',
          color: '#0077B5'
        },
        twitter: {
          url: 'https://twitter.com/yourusername',
          icon: 'mdi-twitter',
          color: '#1DA1F2'
        }
      },
      quickLinks: [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Projects', path: '/projects' },
        { text: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
.custom-footer {
  position: relative;
  background: transparent !important;
  margin-top: 4rem;
}

.footer-content {
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, var(--v-surface-variant-base) 0%, var(--v-surface-base) 100%);
}

.footer-wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.footer-wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
  transform: rotateY(180deg);
}

.footer-wave path {
  fill: var(--v-primary-base);
}

.footer-logo {
  position: relative;
}

.footer-logo .v-avatar {
  border: 3px solid var(--v-primary-base);
  box-shadow: 0 0 15px rgba(var(--v-primary-base), 0.2);
  transition: transform 0.3s;
}

.footer-logo .v-avatar:hover {
  transform: scale(1.1);
}

.gradient-text {
  background: linear-gradient(45deg, var(--v-primary-base), var(--v-secondary-base));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.social-btn {
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 0.5rem;
}

.social-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.quick-link-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.quick-link-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--v-primary-base);
  transition: all 0.3s;
  transform: translateX(-50%);
}

.quick-link-btn:hover::after {
  width: 80%;
}

.copyright-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 600px) {
  .footer-wave {
    top: -50px;
    height: 50px;
  }

  .quick-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .quick-link-btn {
    margin: 0.25rem 0;
  }
}
</style> 