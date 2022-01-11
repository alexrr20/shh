import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		arrayCategories: [
			{
				id: 0,
				name: 'fotografia',
				color: '#FFBA7A',
				header: 'PRECISAS DE AJUDA EM FOTOGRAFIA?',
				video: '../../assets/bgVideoLanding.mp4',
			},
			{
				id: 1,
				name: 'video',
				color: '#FF8BA0',
				header: 'PRECISAS DE AJUDA COM UM VÍDEO?',
				video: '../../assets/bgVideoLanding2.mp4',
			},
			{
				id: 2,
				name: 'desenho',
				color: '#FF99F5',
				header: 'PRECISAS DE AJUDA COM UM DESENHO?',
				video: '../../assets/bgVideoLanding3.mp4',
			},
			{
				id: 3,
				name: 'web design',
				color: '#58D9F5',
				header: 'PRECISAS DE AJUDA EM WEB DESIGN?',
				video: '../../assets/bgVideoLanding4.mp4',
			},
			{
				id: 4,
				name: 'modelo',
				color: '#ADFF90',
				header: 'PRECISAS DE UM MODELO?',
				video: '../../assets/bgVideoLanding5.mp4',
			},
		],
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
