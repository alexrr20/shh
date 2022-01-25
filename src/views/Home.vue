<template>
	<div>
		<div class="container1">
			<video id="videoBG" poster="" autoplay muted loop>
				<source
					id="vid"
					v-bind:src="arrayCategories[randomID].video"
					type="video/mp4"
				/>
			</video>
			<div class="textContainer">
				<div class="headerContainer1">
					<h1>{{ arrayCategories[randomID].header }}</h1>
					<span
						id="headerUnderline"
						:style="{
							'background-color': arrayCategories[randomID].color,
						}"
					></span>
				</div>
				<div class="exploreLinkContainer">
					<router-link to="#"
						>Ver todos os ajudantes
						<img
							src="../../public/assets/noun-arrow-1778571.svg"
							id="arrow"
							alt=""
							:class="arrayCategories[randomID].color"
					/></router-link>
				</div>
			</div>
		</div>
		<div class="container2">
			<div class="headerContainer2">
				<h1>Eleva o teu projeto a um novo patamar</h1>
			</div>
		</div>
		<div class="container3">
			<h1>Categorias</h1>
			<div id="bannersContainer">
				<div class="bannerContainer">
					<router-link to="#">Fotografia</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Vídeo</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Desenho</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Web Design</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Modelo</router-link>
				</div>
			</div>
		</div>
		<div class="container4">
			<div class="contentContainer1">
				<h1>Queres te tornar num ajudante?</h1>
				<div class="routerContainer">
					<router-link to="OfferHelp">Começa já</router-link>
				</div>
				<div class="advantagesContainer">
					<span>
						<span class="plus">+ </span>Melhoras o teu
						currículo</span
					><span
						><span class="plus">+ </span>Praticas as tuas
						capacidades
					</span>
				</div>
			</div>
		</div>
		<div class="container5">
			<div class="contentContainer2">
				<h1>Ainda não criaste conta? Tu é que perdes...</h1>
				<h2>
					<router-link to="#">Sign Up</router-link>
				</h2>
				<h2>
					<router-link to="#">Login</router-link>
				</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
	data() {
		return {
			randomID: 0,
			arrayCategories: this.$store.state.arrayCategories,
		};
	},
	mounted() {
		this.randomID = Math.floor(Math.random() * (5 - 0)) + 0;
	},
};
</script>

<style scoped>
.container1 {
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

.headerContainer1 {
	display: flex;
	width: 70%;
	margin-left: 3%;
	position: relative;
}

.headerContainer1 h1 {
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

.exploreLinkContainer a {
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

.container2 {
	height: 100vh;
	background-color: white;
	display: flex;
	justify-content: center;
}
.headerContainer2 {
	max-width: 770px;
	margin-top: 50px;
}

.headerContainer2 h1 {
	font-size: 84px;
	font-family: 'Gilroy', sans-serif;
	font-weight: 900;
	text-align: center;
	line-height: 88.5%;
}

.container3 {
	height: 95vh;
	background-color: white;
	position: relative;
}

.container3 h1 {
	color: black;
	font-family: 'Gilroy', sans-serif;
	font-size: 84px;
	font-weight: 900;
	padding-left: 1%;
	margin: 0;
	position: relative;
	z-index: 1;
}

#bannersContainer {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 10px;
	width: 100%;
	height: 90%;
	position: absolute;
	top: 76px;
}

.bannerContainer {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
}

.bannerContainer:first-child {
	min-height: 100%;
	background: url(../../public/assets/photoBG.jpg);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(255, 186, 122, 0.92);
}

.bannerContainer:nth-child(2) {
	min-height: 100%;
	background: url(../../public/assets/videoBG.jpg);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(255, 139, 160, 0.92);
}

.bannerContainer:nth-child(3) {
	min-height: 100%;
	background: url(../../public/assets/drawBG.jpg);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(255, 153, 245, 0.92);
}

.bannerContainer:nth-child(4) {
	min-height: 100%;
	background: url(../../public/assets/codingBG.jpg);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(150, 236, 255, 0.92);
}

.bannerContainer:nth-child(5) {
	min-height: 100%;
	background: url(../../public/assets/modelBG.jpg);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.3) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(173, 255, 144, 0.92);
}

.bannerContainer a {
	text-decoration: none;
	color: white;
	font-family: 'Gilroy', sans-serif;
	margin-bottom: 85px;
	font-size: 23px;
	font-weight: 700;
	border-bottom: 4px solid;
	border-color: white;
	line-height: 23px;
	transition: all 0.06s ease-in;
}

.bannerContainer a:hover {
	border-width: 0;
	transform: scale(1.3);
	transform-origin: center 80%;
}

.container4 {
	height: 450px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
}

.contentContainer1 {
	height: 58%;
	max-width: 1000px;
	padding: 0 min(80px, 10%);
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	grid-template-rows: 1fr 1.5fr;
}

.contentContainer1 h1 {
	grid-row: 1/2;
	grid-column: 1/3;
	margin: 0;
	color: white;
	font-family: 'Gilroy', sans-serif;
	font-size: 82px;
	font-weight: 800;
	line-height: 94%;
}

.routerContainer {
	grid-row: 2/3;
	grid-column: 1/2;
	display: flex;
	justify-content: center;
	align-items: center;
}

.routerContainer a {
	color: white;
	text-decoration: none;
	font-family: 'gilroy', sans-serif;
	border: 4px solid white;
	width: 240px;
	height: 57px;
	font-size: 30px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
}

.advantagesContainer {
	grid-row: 2/3;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
}

.advantagesContainer span {
	color: white;
	font-family: 'gilroy', sans-serif;
	font-size: 32px;
	font-weight: 700;
}

.plus {
	font-weight: 1000 !important;
	font-size: 50px !important;
}

.container5 {
	height: 130px;
	background-color: white;
	display: flex;
	justify-content: center;
}

.contentContainer2 {
	width: 93%;
	height: 100%;
	display: flex;
	align-items: center;
}

.contentContainer2 h1 {
	margin: 0 auto 0 0;
	font-family: 'Gilroy', sans-serif;
	font-size: 33px;
}

.contentContainer2 h2 a {
	color: black;
	text-decoration: none;
	font-family: 'Gilroy', sans-serif;
	margin-right: 50px;
}
</style>
