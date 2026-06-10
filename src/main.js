import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // or import './style.css' depending on your file name

const app = createApp(App)

app.use(router)

app.mount('#app')
