import { createStore } from 'vuex'

export default createStore({
    state: {
        isDarkMode: false,
        personalInfo: {
            name: 'Ruchika Sharma',
            title: 'Full Stack Developer',
            email: 'sruchika004@gmail.com',
            location: 'Yamunanagar, Haryana',
            bio: 'A passionate developer with expertise in modern web technologies',
            desc: 'I am a skilled software developer with over 3+ year of valuable experience, currently employed at GeekyAnts. My expertise primarily lies in React, Next.js, Vue.js and React-Native. I possess in-depth knowledge of various technologies and tools including git, state management, routing, and lifecycle methods within React applications. My passion for coding drives me to continually expand my skill set and stay up-to-date with industry trends. I am committed to delivering high-quality software solutions and thrive in collaborative, innovative environments.'
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