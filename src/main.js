// import './assets/main.css'
import "./Style.css";

import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);
axios.defaults.baseURL = 'http://localhost:8080'

app.use(router);
app.use(store);
app.mount("#app");
