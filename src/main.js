import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({ components });

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
