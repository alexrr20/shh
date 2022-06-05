<template>
	<div>
		<div class="container">
			<div class="topContainer">
				<img
					:src="getLoggedUser.photo"
					id="profile"
					alt=""
					width="100"
					height="100"
				/>
				<h1>Olá {{ getLoggedUser.firstName }}!</h1>
			</div>
			<div class="secondContainer">
				<h4>Informações do Utilizador</h4>
				
				<div class="editContainer">
					<div class="infoContainer nameContainer">
						<span>Primeiro Nome</span>
						<span class="value">{{ getLoggedUser.firstName }}</span>
					</div>
					<div class="infoContainer surnameContainer">
						<span>Apelido</span>
						<span class="value">{{ getLoggedUser.surname }}</span>
					</div>
					<div class="infoContainer numberContainer">
						<span>Número de aluno</span>
						<span class="value">{{ getLoggedUser.number }}</span>
					</div>
					<div class="infoContainer dobContainer">
						<span>Data de Nascimento</span>
						<span class="value">{{ getLoggedUser.dob }}</span>
					</div>
					<div class="infoContainer emailContainer">
						<span>Email</span>
						<span class="value">{{ getLoggedUser.email }}</span>
					</div>
					<div class="infoContainer nifContainer">
						<span>NIF</span>
						<span class="value">{{ getLoggedUser.nif }}</span>
					</div>
				</div>
			</div>

			<div class="thirdContainer">
				<h4>Editar Palavra-passe</h4>
				<!-- <div class="divider"></div> -->
				<div class="formContainer">
					<form>
						<!-- <div class="passContainer"> -->
							<label for="actualPass">Palavra-passe atual:</label>
							<input type="password" name="" id="currentPassword" placeholder="Palavra-passe atual" v-model="password" />
							<br>
							<div class="oldPass">
								<label for="newPass">Palavra-passe nova:</label>
								<input type="password" name="" id="oldPassword" placeholder="Palavra-passe nova" v-model="newPassword" />
							</div>
						<!-- </div>	 -->
					</form>
				</div>
				<div class="submitContainer">
					<button @click="checkPass()">Editar</button>
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
		return {
			password:'',
			newPassword: '',
		};
	},
	computed: {
		...mapGetters(['getLoggedUser']),
	},
	methods: {
		checkPass() {
			if(this.password == this.getLoggedUser.password){
				this.getLoggedUser.password = this.newPassword;
				alert('PASSWORD ALTERADA!')
			}
		}
	},
};
</script>

<style scoped>
.container {
	height: 121vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	background-color: black;
	font-family: 'Gilroy', sans-serif;
	color: white;
}

.topContainer {
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 44px;
	font-weight: 800;
	object-fit: cover;
}

img{
	object-fit: cover;
}

.topContainer h1 {
	margin-top: 20px;
	margin-bottom: 20px;
}

.secondContainer {
	width: 70%;
}

.secondContainer h4 {
	padding-left: 30px;
}

.infoContainer {
	display: flex;
	flex-direction: column;
}

.infoContainer span:first-child {
	font-size: 12px;
}

.value {
	font-weight: 700;
	font-size: 21px;
}

/* .divider {
	width: 100%;
	height: 0px;
	background-color: #bababa;
} */

.submitContainer button {
	width: 10%;
	background-color: black;
	height: 37px;
	border: 0;
	outline: 3px solid white;
	outline-offset: -2px;
	color: white;
	font-family: 'gilroy', sans-serif;
	font-weight: 700;
	box-sizing: border-box;
	padding-top: 3px;
	margin-left: 30px;
	margin-top:15px;
	margin-bottom: 1px;
	cursor: pointer;
	transition: all 0.08s ease-in-out;
	font-size: 20px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

.editContainer {
	margin-top: 50px;
	margin-bottom: 50px;
	padding-left: 50px;
	display: grid;
	width: 50%;
	grid-template-columns: 1.9fr 2fr 0.5fr 2fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.thirdContainer {
	width: 70%;
}

.thirdContainer h4 {
	padding-left: 30px;
}

.dobContainer {
	grid-row: 3/4;
}

.nifContainer {
	grid-row: 5/6;
}
.numberContainer {
	grid-row: 3/4;
	grid-column: 4/5;
}

.emailContainer {
	grid-row: 1/2;
	grid-column: 4/5;
}

label {
	padding-left: 45px;
	display: inline-block;
	font-weight: 400;
	font-size: 15px;
	transition: all 0.06s ease-in;
	margin-bottom: 5px;
}

.formContainer input {
	box-sizing: border-box;
	max-width: 300px;
	width: 30%;
	height: 25px;
	background-color: white;
	border: 0;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
	margin-top: -3px;
	margin-left: 15px;
}

.oldPass input {
	box-sizing: border-box;
	max-width: 300px;
	width: 30%;
	height: 25px;
	background-color: white;
	border: 0;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
	margin-top: 15px;
	margin-left: 18px;
}
</style>
