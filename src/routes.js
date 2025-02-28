export const routes = [
	{ path: '/', name: 'home', component: () => import('./pages/HomePage.vue') },
	{ path: '/search', name: 'search', component: () => import('./pages/SearchPage.vue') },
	{
		name: 'notFound',
		path: '/:match(.*)',
		component: () => import('./pages/NotFoundPage.vue'),
	},
]
