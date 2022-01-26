<template>
	<div class="mainContainer">
		<aside>
			<div>
				<img
					src="../../public/assets/profile.jpg"
					alt=""
					class="userAvatar"
					width="70"
					height="70"
				/>
				<h1>Rodrigo</h1>
			</div>
			<h2>Tecnologias e Sistemas de Informação para Web</h2>
			<h2>2º Ano</h2>
			<div class="divider"></div>
			<div>
				<div class="starsContainer">
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 1"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 2"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 3"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 4"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 5"
					/>
				</div>
				<span>4</span>
				<span>2 Avaliações</span>
			</div>
			<div>
				<router-link to="#" id="btnMessage"
					>Contactar Utilizador</router-link
				>
			</div>
		</aside>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.mainContainer {
	margin-top: 71px;
	margin-right: 0;
	height: 100vh;
	font-family: 'Gilroy', sans-serif;
	max-width: 1000px;
}

aside {
	position: fixed;
	max-width: 500px;
	right: 0;
	padding-right: 100px;
}

aside div:first-child {
	display: flex;
}

aside div:first-child h1 {
	font-weight: 800;
	font-size: 63px;
	margin: 10px 0;
}

aside h2 {
	font-size: 16px;
	margin: 10px 0;
}

aside div:nth-child(5) {
	display: flex;
}

aside div:nth-child(6) {
}

#btnMessage {
	width: 50%;
	background-color: white;
	height: 55px;
	border: 0;
	outline: 3px solid black;
	outline-offset: -2px;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 800;
	box-sizing: border-box;
	padding-top: 3px;
	margin-bottom: 1px;
	cursor: pointer;
	transition: all 0.08s ease-in-out;
	font-size: 15px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

.divider {
	width: 100%;
	height: 1px;
	background-color: #bababa;
}

.star {
	width: 17px;
	height: 17px;
	margin: 0 -2px;
}
</style>
