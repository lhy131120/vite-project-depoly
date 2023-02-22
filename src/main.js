import { createApp } from 'vue'
import { createPinia } from 'pinia'

// vueloading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// bootstrap
import './assets/all.scss';


// Vite 原始path
import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.component('VueLoading', Loading) // global component
app.mount('#app')
