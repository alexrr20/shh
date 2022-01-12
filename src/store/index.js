import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		posts: localStorage.posts
			? JSON.parse(localStorage.posts)
			: [
					{
						postID: 0,
						userID: 444,
						userName: 'Pedro',
						category: {
							id: 0,
							name: 'Fotografia',
							color: '#FFBA7A',
							secondColor:
								'invert(100%) sepia(35%) saturate(1828%) hue-rotate(299deg) brightness(99%) contrast(105%)',
							header: 'PRECISAS DE AJUDA EM FOTOGRAFIA?',
							video: '../../assets/bgVideoLanding.mp4',
						},
						photos: [],
						shortDescription:
							'Eu consigo fazer uma sessão de fotografias dentro de água.',
						description: '',
						faq: [
							{
								title: '',
								description: '',
							},
						],
						overallRating: 4,
						reviews: [
							{
								reviewID: 0,
								rating: 4,
								description: '',
								date: '15/12/2021',
								complimentID: '',
							},
						],
						likes: 13,
					},
					{
						postID: 0,
						userID: 555,
						userName: 'Afonso',
						category: {
							id: 2,
							name: 'Desenho',
							color: '#FF99F5',
							secondColor:
								'invert(80%) sepia(40%) saturate(178%) hue-rotate(275deg) brightness(104%) contrast(104%)',
							header: 'PRECISAS DE AJUDA COM UM DESENHO?',
							video: '../../assets/bgVideoLanding3.mp4',
						},
						photos: [],
						shortDescription:
							'Consigo fazer o desenho do teu website em pouco tempo.',
						description: '',
						faq: [
							{
								title: '',
								description: '',
							},
						],
						overallRating: 5,
						reviews: [
							{
								reviewID: 0,
								rating: 5,
								description: '',
								date: '15/12/2021',
								complimentID: '',
							},
						],
						likes: 13,
					},
			  ],
		users: localStorage.users
			? JSON.parse(localStorage.users)
			: [
					{
						userID: 444,
						userName: 'Pedro',
						email: 'admin',
						password: 'admin',
						type: 'admin',
						dob: '',
						nif: '',
						helper: true,
					},
			  ],
		loggedUser: null,
		arrayCategories: [
			{
				id: 0,
				name: 'Fotografia',
				color: '#FFBA7A',
				secondColor:
					'invert(100%) sepia(35%) saturate(1828%) hue-rotate(299deg) brightness(99%) contrast(105%)',
				header: 'PRECISAS DE AJUDA EM FOTOGRAFIA?',
				video: '../../assets/bgVideoLanding.mp4',
			},
			{
				id: 1,
				name: 'Vídeo',
				color: '#FF8BA0',
				secondColor:
					'invert(78%) sepia(26%) saturate(569%) hue-rotate(307deg) brightness(108%) contrast(108%)',
				header: 'PRECISAS DE AJUDA COM UM VÍDEO?',
				video: '../../assets/bgVideoLanding2.mp4',
			},
			{
				id: 2,
				name: 'Desenho',
				color: '#FF99F5',
				secondColor:
					'invert(80%) sepia(40%) saturate(178%) hue-rotate(275deg) brightness(104%) contrast(104%)',
				header: 'PRECISAS DE AJUDA COM UM DESENHO?',
				video: '../../assets/bgVideoLanding3.mp4',
			},
			{
				id: 3,
				name: 'Web design',
				color: '#58D9F5',
				secondColor:
					'invert(86%) sepia(16%) saturate(873%) hue-rotate(175deg) brightness(105%) contrast(104%)',
				header: 'PRECISAS DE AJUDA EM WEB DESIGN?',
				video: '../../assets/bgVideoLanding4.mp4',
			},
			{
				id: 4,
				name: 'Modelo',
				color: '#ADFF90',
				secondColor:
					'invert(87%) sepia(34%) saturate(339%) hue-rotate(52deg) brightness(104%) contrast(97%)',
				header: 'PRECISAS DE UM MODELO?',
				video: '../../assets/bgVideoLanding5.mp4',
			},
		],
	},
	getters: {
		isUser: (state) => (email, password) =>
			state.users.some(
				(user) => user.email === email && user.password === password
			),
		isUserAvailable: (state) => (email) =>
			state.users.every((user) => user.email !== email),
		getLoggedUser: (state) => state.loggedUser,
		getPostsByCategory: (state) => (category) =>
			state.posts.filter((post) => post.categoryID == category),
	},
	mutations: {
		SET_LOGGED_USER(state, payload) {
			state.loggedUser = state.users.find(
				(user) => user.email === payload
			);
			localStorage.loggedUser = JSON.stringify(state.loggedUser);
		},
		SET_LOGOUT(state) {
			state.loggedUser = null;
			localStorage.removeItem('loggedUser');
		},
	},
	actions: {},
	modules: {},
});
