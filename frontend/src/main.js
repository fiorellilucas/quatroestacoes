import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import Home from "./components/Home.vue"
import "./assets/main.css"

const routes = [
  { path: "/", component: Home }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

createApp(App).use(router).mount('#app')
