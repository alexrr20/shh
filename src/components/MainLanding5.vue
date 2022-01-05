<template>
	<div class="container">
		<div class="contentContainer">
			<h1>Ainda não criaste conta? Tu é que perdes...</h1>
			<h2>
				<router-link to="#">Sign Up</router-link>
			</h2>
			<h2>
				<router-link to="#">Login</router-link>
			</h2>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
	height: 130px;
	background-color: white;
	display: flex;
	justify-content: center;
}

.contentContainer {
	width: 93%;
	height: 100%;
	display: flex;
	align-items: center;
}

h1 {
	margin: 0 auto 0 0;
	font-family: 'Gilroy', sans-serif;
	font-size: 33px;
}

a {
	color: black;
	text-decoration: none;
	font-family: 'Gilroy', sans-serif;
	margin-right: 50px;
}
</style>
