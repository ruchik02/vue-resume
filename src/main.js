import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "@mdi/font/css/materialdesignicons.css";
import store from "./store/store";

const vuetify = createVuetify({ 
    components,
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#2196F3',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    background: '#FFFFFF',
                    surface: '#FFFFFF',
                    'text-primary': '#333333',
                    'text-secondary': '#666666',
                }
            },
            dark: {
                dark: true,
                colors: {
                    primary: '#2196F3',
                    secondary: '#B0BEC5',
                    accent: '#82B1FF',
                    background: '#121212',
                    surface: '#1E1E1E',
                    'text-primary': '#FFFFFF',
                    'text-secondary': '#B0BEC5',
                }
            }
        }
    }
});

const app = createApp(App);
app.use(vuetify);
app.use(store);
app.use(router);
app.mount("#app");
