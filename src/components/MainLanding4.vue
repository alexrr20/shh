<template>
	<div class="container">
		<div class="contentContainer">
			<h1>Queres te tornar num ajudante?</h1>
			<div class="routerContainer">
				<router-link to="#">Começa já</router-link>
			</div>
			<div class="advantagesContainer">
				<span>
					<span class="plus">+ </span>Melhoras o teu currículo</span
				><span
					><span class="plus">+ </span>Praticas as tuas capacidades
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
	height: 450px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
}

.contentContainer {
	height: 58%;
	max-width: 1000px;
	padding: 0 min(80px, 10%);
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	grid-template-rows: 1fr 1.5fr;
}

h1 {
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

a {
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
</style>
