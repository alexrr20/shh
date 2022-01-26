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
import { mapGetters } from 'vuex';
export default {
	name: 'Signup',
	components: {},
	data() {
		return {
			form: {
				name: '',
				surname: '',
				number: '',
				dob: '',
				email: '',
				nif: '',
				password: '',
				confirmPassword: '',
			},
			users: [],
		};
	},
	created() {
		this.users = localStorage.users
			? JSON.parse(localStorage.users)
			: [
					{
						userID: 444,
						userName: 'Pedro',
						surname: 'Gomes',
						email: 'admin',
						password: 'admin',
						type: 'admin',
						dob: '',
						nif: '',
						helper: true,
					},
			  ];
	},
	watch: {
		users() {
			localStorage.setItem('users', JSON.stringify(this.users));
		},
	},
	computed: {
		...mapGetters(['isUserAvailable']),
	},
	methods: {
		addUser() {
			if (
				this.isUserAvailable(this.form.email) &&
				this.form.password == this.form.confirmPassword
			) {
				const newUser = {
					userID: 444,
					userName: this.form.name,
					surname: this.form.surname,
					email: this.form.email,
					password: this.form.password,
					type: 'user',
					dob: this.form.dob,
					nif: this.form.nif,
					helper: true,
				};
				this.users.push(newUser);
			} else {
				alert('NOP');
			}
		},
	},
};
</script>

<style scoped>
<<<<<<< HEAD
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
=======
nav,
footer {
  display: none !important;
}
.mainContainer {
  font-family: "Gilroy", sans-serif;
  width: 180px;
>>>>>>> 5eb89a6b0eb173eefb2b2ca3cf5c0ff27bcd436f
}
</style>
