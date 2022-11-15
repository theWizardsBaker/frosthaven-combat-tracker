import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from "@/components/icons/icons.js";

import "./assets/main.css";

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router)

app.mount('#app')
