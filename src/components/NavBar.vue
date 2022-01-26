<template>
	<nav v-bind:class="navSize">
		<div id="firstDiv">
			<router-link class="logoLink" :to="{ name: 'Home' }">
				<img
					src="../../public/assets/logo-pb-2.svg"
					alt="Logo"
					id="logo"
				/>
			</router-link>
		</div>
		<div id="secondDiv">
			<div id="secondDivTop">
				<div id="categoryDropdownContainer" @click="toggleNav">
					<span v-if="tagSearch">#{{ tagSearch }}</span>
					<span v-else>Categoria</span>
				</div>
				<div class="inputContainer">
					<input type="text" v-model="search" @click="updatePosts" />
				</div>

				<router-link id="btnSearch" to="explore">Procurar</router-link>
			</div>
			<div id="secondDivBottom" v-bind:class="categoriesToggle">
				<span class="category 0" @click="addTag($event)" id="category1"
					>Fotografia</span
				>
				<span class="category 1" @click="addTag($event)" id="category2"
					>Vídeo</span
				>
				<span class="category 2" @click="addTag($event)" id="category3"
					>Desenho</span
				>
				<span class="category 3" @click="addTag($event)" id="category4"
					>Web Design</span
				>
				<span class="category 5" @click="addTag($event)" id="category5"
					>Modelo</span
				>
			</div>
		</div>
		<div id="thirdDiv">
			<router-link class="link" to="#">Oferecer Ajuda</router-link>
			<router-link class="link" to="/explore">Explorar</router-link>
			<router-link class="link" to="#">Mensagens</router-link>
		</div>
		<div id="fourthDiv">
			<router-link class="link" to="/signup">Sign Up</router-link>
			<router-link class="link" to="/login">Login</router-link>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			tagSearch: '',
			navSize: 'short',
			categoriesToggle: 'hidden',
		};
	},
	methods: {
		addTag(e) {
			this.tagSearch = e.target.innerHTML;
		},
		toggleNav() {
			if (this.navSize == 'short') {
				this.navSize = 'expanded';
				this.categoriesToggle = 'shown';
			} else {
				this.navSize = 'short';
				this.categoriesToggle = 'hidden';
			}
		},
		updatePosts() {
			this.$store.commit('SET_POSTS_BY_SEARCH');
		},
	},
	computed: {
		search: {
			get() {
				return this.$store.state.search;
			},
			set(value) {
				this.$store.commit('updateSearch', value);
			},
		},
	},
};
</script>

<style scoped>
nav {
	font-family: 'Gilroy', sans-serif;
	background-color: white;
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: minmax(80px, 10%) 563px 10% 2fr 1fr;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
}

.short {
	height: 71px;
	transition: height 0.1s ease;
}

.expanded {
	height: 115px;
	transition: height 0.1s ease;
}

#firstDiv {
	height: 71px;
	position: absolute;
}

#secondDiv {
	grid-column: 2 / 3;
}

#thirdDiv {
	grid-column: 4/5;
	padding-right: 50px;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 2fr 1fr 2fr 1fr 2fr 2fr;
}

#fourthDiv {
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr 40px;
}

#fourthDiv a {
	margin: auto;
}

#secondDivTop {
	display: grid;
	grid-template-columns: 100px 3px 360px 100px;
	margin-top: 15px;
}

.inputContainer {
	grid-column: 3 / 4;
	position: relative;
	align-self: end;
}

#secondDiv input {
	width: 95%;
	height: 35px;
	background-color: black;
	border: 0;
	color: white;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
}

#secondDiv a {
	grid-column: 4 / 5;
	background-color: white;
	height: 35px;
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
	align-self: end;
	font-size: 13px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

#secondDiv a:hover {
	font-size: 15px;
}

#secondDiv a:active {
	font-size: 12.3px;
}

#categoryDropdownContainer {
	height: 100%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: black;
	font-weight: 700;
}

#categoryDropdownContainer span {
	font-size: 13px;
}

#secondDivBottom {
	margin-top: 10px;
	display: grid;
	grid-template-columns: 100px 1fr 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr;
}

.category {
	font-weight: 800;
	font-size: 13px;
	border-bottom: 4px solid;
	line-height: 7px;
	margin: 19px 0;
	cursor: pointer;
	transition: all 0.06s ease-in;
}

.category:hover {
	border-width: 0;
	transform: scale(1.2);
	transform-origin: left -20%;
}

#category1 {
	grid-column: 2/3;
	border-color: #ffba7a;
}

#category2 {
	grid-column: 4/5;
	border-color: #ff8ba0;
}

#category3 {
	grid-column: 6/7;
	border-color: #ff99f5;
}

#category4 {
	grid-column: 8/9;
	border-color: #58d9f5;
}

#category5 {
	grid-column: 10/11;
	border-color: #adff90;
}

#logo {
	width: 68px;
	position: relative;
	left: -10px;
}

.link {
	font-weight: 800;
	font-size: 13px;
	cursor: pointer;
	align-self: end;
	text-decoration: none;
	color: black;
}

#thirdDiv a:first-child {
	grid-column: 1/2;
	text-align: center;
	margin: auto;
}

#thirdDiv a:nth-child(2) {
	grid-column: 3/4;
	margin: auto;
}

#thirdDiv a:nth-child(3) {
	grid-column: 5/6;
	margin: auto;
}

.hidden {
	display: none !important;
}
</style>
