import { createRouter, createWebHistory } from "vue-router";

// Import your components

// Define routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('../views/SkillsView.vue')
    },
    {
        path: '/experience',
        name: 'Experience',
        component: () => import('../views/ExperienceView.vue')
    },
    {
        path: '/education',
        name: 'Education',
        component: () => import('../views/EducationView.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/ProjectsView.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/ContactView.vue')
    }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
