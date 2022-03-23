<template>
	<div class="mainContainer">
		<div class="headerContainer">
			<h1>
				Ouvimos dizer que estás a pensar tornar-te num ajudante
				<span>(Fazes muito bem já agora)</span>
			</h1>
		</div>
		<div class="categoryContainer">
			<h3>Seleciona uma categoria</h3>
			<div class="radioContainer">
				<input
					type="radio"
					id="radioFotografia"
					name="category"
					value="fotografia"
					v-model="content.category"
				/>
				<label for="radioFotografia">FOTOGRAFIA</label>
				<input
					type="radio"
					id="radioVideo"
					name="category"
					value="video"
					v-model="content.category"
				/>
				<label for="radioVideo">VÍDEO</label>
				<input
					type="radio"
					id="radioDesenho"
					name="category"
					value="desenho"
					v-model="content.category"
				/>
				<label for="radioDesenho">DESENHO</label>
				<input
					type="radio"
					id="radioWebDesign"
					name="category"
					value="webDesign"
					v-model="content.category"
				/>
				<label for="radioWebDesign">WEB DESIGN</label>
				<input
					type="radio"
					id="radioModelo"
					name="category"
					value="modelo"
					v-model="content.category"
				/>
				<label for="radioModelo">MODELO</label>
			</div>
		</div>
		<div class="descriptionContainer">
			<h3>Escreve uma pequena descrição (máx. 100 carateres)</h3>
			<textarea v-model="content.shortDescription" placeholder="Descrição"></textarea>
		</div>
		<div class="descriptionContainer">
			<h3>E aqui uma descrição maior (máx. 2000 carateres)</h3>
			<textarea v-model="content.description" placeholder="Descrição"></textarea>
		</div>
		<div class="descriptionContainer">
			<h3>
				Adiciona algumas perguntas frequentes (podes sempre adicionar
				mais tarde)
			</h3>
			<textarea v-model="content.faq" placeholder="Pergunta"></textarea>
		</div>
		<div class="descriptionContainer">
			<h3>Adiciona o link de uma foto ilustrativa do teu projeto:</h3> 
			<input type="text" placeholder="Link Fotografia" id="photoContainer" v-model="content.photos">
		</div>
		<div class="submitContainer">
			<router-link v-on:click.native="addPost" to="#" >Criar Anúncio</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	name: 'OfferHelp',
	data() {
		return {
			content:{
				//category:'',
				shortDescription:'',
				description: '',
				faq:'',
				photos:'',
				userName:this.$store.getters.getLoggedUser.userName,
			},
		};
	},
	computed: {
		...mapGetters(['getLoggedUser']),
	},
	methods: {
		addPost() {
			if(this.getLoggedUser != null){
				this.SET_NEW_POST(this.content)
				//console.log(this.content)
			}else{
				alert('PRECISAS DE TE AUTENTICAR PARA CRIAR UM ANÚNCIO')
			}
		},
		...mapMutations(['SET_NEW_POST']),
	},
};
</script>

<style scoped>
.mainContainer {
	margin-top: 100px;
	font-family: 'Gilroy', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: black;
	color: white;
}

.headerContainer {
	width: 80%;
}

h1 {
	font-weight: 900;
	font-size: 89px;
	line-height: 100%;
}

h1 span {
	font-weight: 800;
	font-size: 13px;
}

.categoryContainer {
	width: 80%;
}

.radioContainer {
	display: flex;
	justify-content: space-around;
	margin-top: 40px;
}

label {
	display: inline-block;
	font-weight: 900;
	font-size: 28px;
	transition: all 0.06s ease-in;
	cursor: pointer;
}

input[type='radio'] {
	display: none;
}

input[type='radio']:checked + label[for=radioFotografia] {
	transform: scale(1.2);
	color: #ffba7a;
}

input[type='radio']:checked + label[for=radioVideo] {
	transform: scale(1.2);
	color: #ff8ba0;
}

input[type='radio']:checked + label[for=radioDesenho] {
	transform: scale(1.2);
	color: #ff99f5;
}

input[type='radio']:checked + label[for=radioWebDesign] {
	transform: scale(1.2);
	color: #58d9f5;
}

input[type='radio']:checked + label[for=radioModelo] {
	transform: scale(1.2);
	color: #adff90;
}

.descriptionContainer {
	margin-top: 70px;
	width: 80%;
}

.descriptionContainer textarea {
	margin-top: 10px;
	width: 100%;
	height: 300px;
}

.submitContainer {
	width: 35%;
	display: flex;
	margin-right: 680px;
	margin-top: 70px;
}

.submitContainer p {
	font-size: 9px;
	font-weight: 700;
	width: 40%;
	padding-left: 40px;
}

.submitContainer a {
	width: 50%;
	background-color:black;
	height: 45px;
	border: 0;
	outline: 3px solid white;
	outline-offset: -2px;
	color: white;
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

.descriptionContainer input {
	box-sizing: border-box;
	max-width: 500px;
	width: 100%;
	height: 45px;
	background-color:white;
	border: 0;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
}

</style>