import { createStore } from 'vuex'

export default createStore({
    state: {
        isDarkMode: false,
        personalInfo: {
            name: 'Ruchika Sharma',
            title: 'Full Stack Developer',
            email: 'sruchika004@gmail.com',
            location: 'Haryana, Yamunanagar',
            bio: 'A passionate developer with expertise in modern web technologies'
        },
        skills: {
            frontend: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'React', 'Next.js'],
            backend: ['Node.js', 'Express', 'MongoDB', 'SQL'],
            tools: ['Git', 'Docker', 'AWS', 'Figma']
        },
        socialLinks: {
            github: 'https://github.com/ruchik02',
            linkedin: 'https://linkedin.com/in/er-ruchika-sharma',
            twitter: 'https://x.com/RuchikaRuchikas'
        }
    },
    mutations: {
        toggleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode
        },
        updatePersonalInfo(state, info) {
            state.personalInfo = { ...state.personalInfo, ...info }
        },
        updateSkills(state, skills) {
            state.skills = { ...state.skills, ...skills }
        },
        updateSocialLinks(state, links) {
            state.socialLinks = { ...state.socialLinks, ...links }
        }
    },
    actions: {
        toggleTheme({ commit }) {
            commit('toggleDarkMode')
        },
        updateProfile({ commit }, info) {
            commit('updatePersonalInfo', info)
        }
    },
    getters: {
        getThemeMode: state => state.isDarkMode,
        getPersonalInfo: state => state.personalInfo,
        getSkills: state => state.skills,
        getSocialLinks: state => state.socialLinks
    }
})