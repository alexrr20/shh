<template>
	<div class="container">
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
</template>

<script>
export default {};
</script>

<style scoped>
.container {
	height: 95vh;
	background-color: white;
	position: relative;
}

h1 {
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
</style>
