import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/router.js";
import "./index.css"
import store from "@/store";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import "@/fontAwesome"

const app = createApp(App);
app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
