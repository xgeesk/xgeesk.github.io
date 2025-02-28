import './reset.css'
import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import { routes } from './routes.js'

const router = createRouter({
	history: createWebHistory(),
	routes,
})

createApp(App).use(router).mount('#app')
