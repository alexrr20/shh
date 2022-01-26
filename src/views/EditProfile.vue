<template>
	<div class="mainContainer">
		<div class="container">
			<img
				src="../../public/assets/profile.jpg"
				id="profile"
				alt=""
				width="100"
				height="100"
			/>
			<h1>Olá {{ getLoggedUser.userName }}!</h1>
			<h4>Informações do Utilizador</h4>
			<div class="editContainer">
				<button>Editar</button><br />
				<span
					>Primeiro Nome
					<b>{{ getLoggedUser.userName }}</b>
				</span>
				<br />
				<span
					>Apelido
					<b>{{ getLoggedUser.surname }}</b>
				</span>
				<br />
				<span
					>Número de aluno
					<b>{{ getLoggedUser.number }}</b>
				</span>
				<br />
				<span
					>Data de Nascimento
					<b>{{ getLoggedUser.dob }}</b>
				</span>
				<br />
				<span
					>Email
					<b>{{ getLoggedUser.email }}</b>
				</span>
				<br />
				<span
					>NIF
					<b>{{ getLoggedUser.nif }}</b>
				</span>
			</div>
			<div class="passContainer">
				<h4>Editar Palavra-passe</h4>
				<hr />
				<div class="formContainer">
					<form>
						<label for="actualPass">Palavra-passe atual</label>
						<input type="password" name="" id="" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'EditProfile',
	data() {
		return {};
	},
	computed: {
		...mapGetters(['getLoggedUser']),
	},
};
</script>

<style scoped></style>
