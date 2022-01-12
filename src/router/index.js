import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import Signup from '../views/Signup.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/Explore',
		name: 'Explore',
		component: Explore,
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
