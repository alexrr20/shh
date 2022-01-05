<template>
	<div class="container">
		<video id="videoBG" poster="" autoplay muted loop>
			<source
				id="vid"
				v-bind:src="arrayCategories[randomID].video"
				type="video/mp4"
			/>
		</video>
		<div class="textContainer">
			<div class="headerContainer">
				<h1>{{ arrayCategories[randomID].header }}</h1>
				<span id="headerUnderline"></span>
			</div>
			<div class="exploreLinkContainer">
				<router-link to="#"
					>Ver todos os ajudantes
					<img
						src="../../public/assets/noun-arrow-1778571.svg"
						id="arrow"
						alt=""
				/></router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			randomID: 0,
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
		};
	},
	mounted() {
		this.randomID = Math.floor(Math.random() * (5 - 0)) + 0;
	},
};
</script>

<style scoped>
.container {
	margin-top: 71px;
	height: 91vh;
	display: flex;
	align-items: center;
	background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

#videoBG {
	position: fixed;
	z-index: -1;
	min-width: 100%;
	min-height: 100%;
}

.headerContainer {
	display: flex;
	width: 70%;
	margin-left: 3%;
	position: relative;
}

h1 {
	margin: 0;
	padding: 0;
	font-family: 'gilroy', sans-serif;
	color: white;
	font-weight: 1000;
	font-size: 116px;
	line-height: 100%;
	z-index: 1;
}

#headerUnderline {
	height: 30px;
	background-color: #ff8ba0;
	position: absolute;
	bottom: -4px;
	left: 6px;
	width: 500px;
	z-index: 0;
}

.exploreLinkContainer {
	margin-left: 3.5%;
	padding-top: 25px;
}

a {
	text-decoration: none;
	color: white;
	font-family: 'Gilroy', sans-serif;
	font-weight: 700;
	font-size: 20px;
	display: flex;
	align-items: center;
}

#arrow {
	width: 43px;
	padding-left: 8px;
}
</style>
