<template>
	<div class="mainContainer">
		<div class="container">
			<div class="headerContainer"><h1>Signup</h1></div>
			<div class="formContainer">
				<form @submit.prevent="addUser()">
					<div class="inputContainer">
						<label for="firstName">Primeiro Nome</label>
						<br />
						<input type="text" id="firstName" v-model="form.name" />
					</div>
					<div class="inputContainer">
						<label for="lastName">Apelido</label>
						<br />
						<input
							type="text"
							id="lastName"
							v-model="form.surname"
						/>
					</div>
					<div class="inputContainer">
						<label for="number">Número de aluno</label>
						<br />
						<input type="text" id="number" v-model="form.number" />
					</div>
					<div class="inputContainer">
						<label for="nif">NIF</label>
						<br />
						<input type="text" id="nif" v-model="form.nif" />
					</div>
					<div class="inputContainer">
						<label for="birthDate">Data de Nascimento</label>
						<br />
						<input type="date" id="birthDate" v-model="form.dob" />
					</div>
					<div class="divider"></div>
					<div class="inputContainer">
						<label for="email">E-mail</label>
						<br />
						<input type="email" id="email" v-model="form.email" />
					</div>
					<div class="inputContainer">
						<label for="password">Palavra-passe</label>
						<br />
						<input
							type="password"
							id="password"
							v-model="form.password"
						/>
					</div>
					<div class="inputContainer">
						<label for="confirmPassword"
							>Confirmar Palavra-passe</label
						>
						<br />
						<input
							type="password"
							id="confirmPassword"
							v-model="form.confirmPassword"
						/>
						<span class="pwLength">
							A tua palavra-passe deve conter entre 8 e 16
							caracteres.
						</span>
					</div>
					<div class="divider divider2"></div>
					<div class="submitContainer">
						<router-link v-on:click.native="addUser" to="#" >Criar Conta</router-link>
						<p>
							Ao criares conta estás a concordar com os termos de
							utilização e de privacidade
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	name: 'Signup',
	components: {},
	data() {
		return {
			form: {
				userName: '',
				surname: '',
				number: '',
				dob: '',
				email: '',
				nif: '',
				password: '',
				confirmPassword: '',
				type:'user',
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
						email: 'admin@admin.com',
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
				this.SET_NEW_USER(this.form);
			} else {
				alert('NOP');
			}
		},
		...mapMutations(['SET_NEW_USER']),
	},
};
</script>

<style scoped>
.mainContainer {
	font-family: 'Gilroy', sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 110px;
	height: 135vh;
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
	box-sizing: border-box;
	max-width: 500px;
	width: 100%;
	height: 45px;
	background-color: black;
	border: 0;
	color: white;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
}

.formContainer label {
	font-size: 11px;
	font-weight: 700;
}

.inputContainer {
	margin-bottom: 30px;
}
.divider {
	width: 100%;
	height: 1px;
	background-color: #e4e4e4;
	margin: 50px 0 30px 0;
}

.divider2 {
	margin-bottom: 50px;
}

.submitContainer {
	width: 100%;
	display: flex;
}

.submitContainer p {
	font-size: 9px;
	font-weight: 700;
	width: 40%;
	padding-left: 40px;
}

.submitContainer a {
	width: 50%;
	background-color: white;
	height: 45px;
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
	font-size: 20px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

.pwLength {
	font-weight: 700;
	font-size: 12px;
}
</style>
