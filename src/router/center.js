export default {
	path: '/center',
	name: 'Center',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import('@/views/center')
}