export default {
	path: '/',
	name: 'Film',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import('@/views/films')
}