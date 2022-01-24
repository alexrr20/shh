<template>
	<div>
		<div id="mainContainer">
			<h1>Signup</h1><br>
			<h1>Signup</h1><br>
			<div id="formContainer">
				<form @submit.prevent="">
					<label for="firstname">Primeiro Nome</label>
					<br>
					<input type="text"  id="firstName">
					<br>
					<label for="lastname">Apelido</label>
					<br>
					<input type="text"  id="lastName">
					<br>
					<label for="number">Número de aluno</label>
					<br>
					<input type="text"  id="number">
					<br>
					<label for="nif">NIF</label>
					<br>
					<input type="text"  id="nif">
					<br>
					<label for="birthDate">Data de Nascimento</label>
					<br>
					<input type="date"  id="birthDate">
					<br>
					<hr>
					<label for="email">E-mail</label>
					<br>
					<input type="email"  id="email">
					<br>
					<label for="password">Palavra-passe</label>
					<br>
					<input type="password"  id="password">
					<br>
					<label for="confirmPassword">Confirmar Palavra-passe</label>
					<br>
					<input type="password"  id="confirmPassword">
					<br>
					<h4>A tua palavra-passe deve conter entre 8 e 16 caracteres.</h4>
					<input type="submit" value="Criar Conta"><p>Ao criares conta estás a concordar com os termos de <b>utilização</b> e de <b>privacidade</b></p>
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
nav,
footer {
	display: none !important;
}
.mainContainer{
	font-family: 'Gilroy', sans-serif;
	width: 180px;
}
</style>
