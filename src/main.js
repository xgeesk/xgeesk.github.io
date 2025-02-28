import './reset.css'
import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import { routes } from './routes.js'

const history = createWebHistory()
const router = createRouter({
	history,
	routes,
})

try {
	const u = new URL(sessionStorage.getItem('redirect'))
	sessionStorage.removeItem('redirect')
	history.replace(u.pathname)
} catch (_) {}

createApp(App).use(router).mount('#app')
