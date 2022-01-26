<template>
	<div class="mainContainer">
		<div class="container">
			<div class="headerContainer"><h1>Signup</h1></div>
			<div class="formContainer">
				<form @submit.prevent="">
					<label for="firstName">Primeiro Nome</label>
					<br />
					<input type="text" id="firstName" />
					<br />
					<label for="lastName">Apelido</label>
					<br />
					<input type="text" id="lastName" />
					<br />
					<label for="number">Número de aluno</label>
					<br />
					<input type="text" id="number" />
					<br />
					<label for="nif">NIF</label>
					<br />
					<input type="text" id="nif" />
					<br />
					<label for="birthDate">Data de Nascimento</label>
					<br />
					<input type="date" id="birthDate" />
					<br />
					<label for="email">E-mail</label>
					<br />
					<input type="email" id="email" />
					<br />
					<label for="password">Palavra-passe</label>
					<br />
					<input type="password" id="password" />
					<br />
					<label for="confirmPassword">Confirmar Palavra-passe</label>
					<br />
					<input type="password" id="confirmPassword" />
					<br />
					<h4>
						A tua palavra-passe deve conter entre 8 e 16 caracteres.
					</h4>
					<input type="submit" value="Criar Conta" />
					<p>
						Ao criares conta estás a concordar com os termos de
						<b>utilização</b> e de <b>privacidade</b>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Signup',
	components: {},
};
</script>

<style scoped>
.mainContainer {
	font-family: 'Gilroy', sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	height: 80vh;
}

.container {
	display: flex;
	justify-content: center;
	width: 90%;
}

h1 {
	font-weight: 900;
	margin: 0;
	font-size: 70px;
}

.formContainer {
	margin-left: 60px;
}

.formContainer input {
	max-width: 500px;
	width: 60%;
	height: 45px;
	background-color: black;
	border: 0;
	color: white;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
}
</style>
