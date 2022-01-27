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
						photos: ['https://quantocustaviajar.com/blog/wp-content/uploads/2020/03/como-tirar-fotos-sozinha-em-viagens-14.jpg'],
						shortDescription:
							'Eu consigo fazer uma sessão de fotografias dentro de água.',
						description: 'Estarei disponível para sessões de fotografia em qualquer ocasião ou altura do ano.Tiro fotos a qualquer coisa, tenho muitos trabalhos anteriores realizados com estudantes.Não hesites em contactar-me!!',
						faq: [
							{
								title: 'Em que dias da semana estás disponível para tirar fotos?',
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
						likes: 26,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 1,
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
						photos: ['https://img.elo7.com.br/product/zoom/2CCA5F0/desenho-realista-desenho-profissional.jpg'],
						shortDescription:
							'Consigo fazer o desenho de qualquer coisa.',
						description: 'Tenho experiência em desenho abstrato, mas faço qualquer tipo de desenho á tua escolha, sou sem dúvida a tua melhor opção no que toca a desenho.Não procures mais, contacta me e vamos deixar esse projeto perfeito!',
						faq: [
							{
								title: 'Demoro muito tempo a entregar os desenhos?',
								description: 'Costumo ser rápido a não ser que esteja ocupado com trabalhos da faculdade!Mas não te preocupes , terás o teu desenho a tempo!',
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
						likes: 25,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 2,
						userID: 127,
						userName: 'Ana',
						category: {
							id: 4,
							name: 'Modelo',
							color: '#ADFF90',
							secondColor:
								'invert(87%) sepia(34%) saturate(339%) hue-rotate(52deg) brightness(104%) contrast(97%)',
							header: 'PRECISAS DE UM MODELO?',
							video: '../../assets/bgVideoLanding5.mp4',
						},
						photos: ['http://blog.selfiemodels.com.br/wp-content/uploads/2017/05/modelo-fotografico-1200x800.jpg?x65681'],
						shortDescription:
							'Consigo tornar o teu projeto viral em pouco tempo.',
						description: 'Sou uma modelo profissional agenciada há 3 anos, faço sessões para os teus projetos em qualquer sítio, basta contactar-me. Podes verificar mais os meus trabalhos em todas as minhas redes sociais.',
						faq: [
							{
								title: 'Estás dísponivel para sessões a qualquer altura?',
								description: 'Em princípio sim , mas nada que uma mensagem não resolva melhor! :)',
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
						likes: 22,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 3,
						userID: 129,
						userName: 'Miguel',
						category: {
							id: 1,
							name: 'Vídeo',
							color: '#FF8BA0',
							secondColor:
								'invert(78%) sepia(26%) saturate(569%) hue-rotate(307deg) brightness(108%) contrast(108%)',
							header: 'PRECISAS DE AJUDA COM UM VÍDEO?',
							video: '../../assets/bgVideoLanding2.mp4',
						},
						photos: ['https://animalleestudio.com.br/wp-content/uploads/2019/09/video-promocional.jpg'],
						shortDescription:
							'Farei um vídeo para o teu projeto á tua maneira.',
						description: 'Sou experiente em filmagens e edição de vídeo em diversas plataformas tais como o Adobe Premier, Sony Vegas, Entre outras... Para além disso, também costuma fazer animações 3D para vídeos promocionais infantis. Sente-te á vontade para me Contactar!',
						faq: [
							{
								title: 'Tens todo o equipamento para a gravação de vídeos promocionais?',
								description: 'Sim, não te preocupes, todo o material que necessites, eu terei!',
							},
						],
						overallRating: 3,
						reviews: [
							{
								reviewID: 0,
								rating: 3,
								description: '',
								date: '15/12/2021',
								complimentID: '',
							},
						],
						likes: 19,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 4,
						userID: 428,
						userName: 'Matilde',
						category: {
							id: 1,
							name: 'Vídeo',
							color: '#FF8BA0',
							secondColor:
								'invert(78%) sepia(26%) saturate(569%) hue-rotate(307deg) brightness(108%) contrast(108%)',
							header: 'PRECISAS DE AJUDA COM UM VÍDEO?',
							video: '../../assets/bgVideoLanding2.mp4',
						},
						photos: ['https://clickandplaylive.com/wp-content/uploads/2020/11/APAVT-Promo-Tutorial-Oculos-360-Video-Promocional.jpg'],
						shortDescription:
							'Eu consigo editar o teu vídepo promocional em qualquer plataforma.',
						description: 'Tenho 3 cursos de edição de vídeo, estarei disponível para editar o teu vídeo em qualquer formato, a qualquer altura, fiz imensos vídeos promocionais, alguns deles até passam na TV!',
						faq: [
							{
								title: 'Consegues fazer um vídeo promocional em menos de uma semana?',
								description: 'Dependendo da dimansão do vídeo...mas sim, não considero nada impossível!',
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
						likes: 17,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 5,
						userID: 86,
						userName: 'Tomás',
						category: {
							id: 0,
							name: 'Fotografia',
							color: '#FFBA7A',
							secondColor:
								'invert(100%) sepia(35%) saturate(1828%) hue-rotate(299deg) brightness(99%) contrast(105%)',
							header: 'PRECISAS DE AJUDA EM FOTOGRAFIA?',
							video: '../../assets/bgVideoLanding.mp4',
						},
						photos: ['https://pdimagemecarreira.com/principal/wp-content/uploads/2019/01/271651-desafios-profissionais-voce-esta-preparado-para-2019.jpg'],
						shortDescription:
							'Tenho disponiblilidade para fotografar qualquer coisa(pessoas/objetos).',
						description: 'Estarei disposto para fotografar em qualquer parte do país.Tenho 2 cursos diplomados em edição de fotografia.Sou a melhor escolha desta plataforma no que toca a fotografia.Contacta-me!!',
						faq: [
							{
								title: 'Tens como te deslocar a qualquer ponto do país?',
								description: 'Sim, tenho carro, isso não é problema!',
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
						likes: 16,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 6,
						userID: 39,
						userName: 'Gabriel',
						category: {
							id: 4,
							name: 'Modelo',
							color: '#ADFF90',
							secondColor:
								'invert(87%) sepia(34%) saturate(339%) hue-rotate(52deg) brightness(104%) contrast(97%)',
							header: 'PRECISAS DE UM MODELO?',
							video: '../../assets/bgVideoLanding5.mp4',
						},
						photos: [],
						shortDescription:
							'Estou disponível para ser fotografado a qualquer altura do dia.',
						description: '',
						faq: [
							{
								title: '',
								description: '',
							},
						],
						overallRating: 3,
						reviews: [
							{
								reviewID: 0,
								rating: 3,
								description: '',
								date: '15/12/2021',
								complimentID: '',
							},
						],
						likes: 15,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 7,
						userID: 790,
						userName: 'Martim',
						category: {
							id: 3,
							name: 'Web design',
							color: '#58D9F5',
							secondColor:
								'invert(86%) sepia(16%) saturate(873%) hue-rotate(175deg) brightness(105%) contrast(104%)',
							header: 'PRECISAS DE AJUDA EM WEB DESIGN?',
							video: '../../assets/bgVideoLanding4.mp4',
						},
						photos: [],
						shortDescription:
							'Eu consigo criar um design único para o seu website',
						description: '',
						faq: [
							{
								title: '',
								description: '',
							},
						],
						overallRating: 2,
						reviews: [
							{
								reviewID: 0,
								rating: 2,
								description: '',
								date: '15/12/2021',
								complimentID: '',
							},
						],
						likes: 13,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 3,
						userID: 129,
						userName: 'Miguel',
						category: {
							id: 1,
							name: 'Vídeo',
							color: '#FF8BA0',
							secondColor:
								'invert(78%) sepia(26%) saturate(569%) hue-rotate(307deg) brightness(108%) contrast(108%)',
							header: 'PRECISAS DE AJUDA COM UM VÍDEO?',
							video: '../../assets/bgVideoLanding2.mp4',
						},
						photos: [],
						shortDescription:
							'Farei um vídeo para o teu projeto á tua maneira.',
						description: '',
						faq: [
							{
								title: '',
								description: '',
							},
						],
						overallRating: 3,
						reviews: [
							{
								reviewID: 0,
								rating: 3,
								description: '',
								date: '15/12/2021',
								complimentID: '',
							},
						],
						likes: 19,
						course: 'TSIW',
						year: '2',
					},
					{
						postID: 3,
						userID: 129,
						userName: 'Miguel',
						category: {
							id: 1,
							name: 'Vídeo',
							color: '#FF8BA0',
							secondColor:
								'invert(78%) sepia(26%) saturate(569%) hue-rotate(307deg) brightness(108%) contrast(108%)',
							header: 'PRECISAS DE AJUDA COM UM VÍDEO?',
							video: '../../assets/bgVideoLanding2.mp4',
						},
						photos: [],
						shortDescription:
							'Farei um vídeo para o teu projeto á tua maneira.',
						description: '',
						faq: [
							{
								title: '',
								description: '',
							},
						],
						overallRating: 3,
						reviews: [
							{
								reviewID: 0,
								rating: 3,
								description: '',
								date: '15/12/2021',
								complimentID: '',
							},
						],
						likes: 19,
						course: 'TSIW',
						year: '2',
					},
			  ],
		users: localStorage.users
			? JSON.parse(localStorage.users)
			: [
					{
						userID: 444,
						userName: 'Pedro',
						surname: 'Gomes',
						email: 'admin@admin.com',
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
		search: '',
		filteredPosts: [],
	},
	getters: {
		isUser: (state) => (email, password) =>
			state.users.some(
				(user) => user.email === email && user.password === password
			),
		isAdmin: (state) => state.loggedUser((user) => user.type === 'admin'),
		isUserAvailable: (state) => (email) =>
			state.users.every((user) => user.email !== email),
		getLoggedUser: (state) => state.loggedUser,
		getPostsByCategory: (state) => (category) =>
			state.posts.filter((post) => post.categoryID == category),
		getCategoryByID: (state) => (id) =>
			state.arrayCategories.filter((category) => category.id == id),
		getUsers: (state) => state.users,
	},
	mutations: {
		SET_NEW_USER(state, payload) {
			state.users.push(payload);
			localStorage.users = JSON.stringify(state.users);
		},
		SET_LOGGED_USER(state, payload) {
			state.loggedUser = state.users.find(
				(user) => user.email === payload
			);
			localStorage.loggedUser = JSON.stringify(state.loggedUser);
		},
		SET_REMOVE_USER(state, payload) {
			state.users = state.users.filter((user) => user.email != payload);
			localStorage.users = JSON.stringify(state.users);
		},
		SET_LOGOUT(state) {
			state.loggedUser = null;
			localStorage.removeItem('loggedUser');
		},
		updateSearch(state, input) {
			state.search = input;
		},
		SET_POSTS_BY_SEARCH(state) {
			state.filteredPosts = state.posts.filter((post) =>
				post.userName.includes(state.search)
			);
		},
		SET_ALL_POSTS(state) {
			state.filteredPosts = state.posts;
		},
	},
	actions: {},
	modules: {},
});
