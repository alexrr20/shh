import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import ExploreCategory from '../views/ExploreCategory.vue';
import Signup from '../views/Signup.vue';
import OfferHelp from '../views/OfferHelp.vue';

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
		name: 'Signup',
		component: Signup,
	},
	{
		path: '/offerhelp',
		name: 'OfferHelp',
		component: OfferHelp,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
