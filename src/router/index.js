import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import ExploreCategory from '../views/ExploreCategory.vue';
import Signup from '../views/Signup.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/explore',
		name: 'explore',
		component: Explore,
		children: [
			{
				path: ':id',
				name: 'exploreCategory',
				component: ExploreCategory,
			},
		],
	},
	{
		path: '/signup',
		name: 'signup',
		component: Signup,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
