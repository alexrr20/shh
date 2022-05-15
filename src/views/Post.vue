<template>
	<div class="mainContainer">
		<div class="mainContentContainer">
			<div
				class="category"
				id="category1"
				v-bind:style="{ 'border-color': postInfo.category.color }"
			>
				<router-link
					:to="{ name: 'exploreCategory', params: { id: 0 } }"
					>{{ postInfo.category.name }}</router-link
				>
			</div>
			<img id="photoContainer" :src="postInfo.photos" alt="" />
			<div class="descriptionContainer">
				<h4>Descrição</h4>
				<p>{{ postInfo.description }}</p>
			</div>
			<div class="divider"></div>
			<div class="faqContainer">
				<h4>Perguntas Frequentes</h4>
				<div class="questionContainer">
					<div
						class="filterHeader"
						@click="toggleAccordion()"
						:aria-expanded="isOpen"
						:aria-controls="`collapse${_uid}`"
					>
						<p>
							Em que dias da semana estás disponível para tirar
							fotos?
						</p>
						<img
							src="../../public/assets/noun-arrow-2601642.svg"
							alt=""
							:class="{ down: isOpen, up: !isOpen }"
						/>
					</div>
					<div
						class="filterContent"
						v-show="isOpen"
						:id="`collapse${_uid}`"
					>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Modi et iste, sapiente mollitia dolorem neque
							quaerat aliquam autem dicta ratione. Iste tempore
							nesciunt odit possimus enim doloribus nemo!
							Voluptate, excepturi?
						</p>
					</div>
				</div>
			</div>
			<div class="divider"></div>
			<div class="ratingContainer1">
				<h4>Avaliação</h4>
				<div class="ratingContainer2">
					<div class="starsContainer">
						<img
							src="../../public/assets/noun-star-1187057.svg"
							alt=""
							class="star 1"
							:class="{ faded: postInfo.overallRating < 1 }"
						/>
						<img
							src="../../public/assets/noun-star-1187057.svg"
							alt=""
							class="star 2"
							:class="{ faded: postInfo.overallRating < 2 }"
						/>
						<img
							src="../../public/assets/noun-star-1187057.svg"
							alt=""
							class="star 3"
							:class="{ faded: postInfo.overallRating < 3 }"
						/>
						<img
							src="../../public/assets/noun-star-1187057.svg"
							alt=""
							class="star 4"
							:class="{ faded: postInfo.overallRating < 4 }"
						/>
						<img
							src="../../public/assets/noun-star-1187057.svg"
							alt=""
							class="star 5"
							:class="{ faded: postInfo.overallRating < 5 }"
						/>
					</div>
					<span
						class="overallRating"
						v-bind:style="{ color: postInfo.category.color }"
						>{{ postInfo.overallRating }}</span
					>
					<span class="numRating"
						>{{ postInfo.reviews.length }} Avaliações</span
					>
				</div>
			</div>
		</div>
		<aside>
			<div>
				<img
					src="../../public/assets/profile.webp"
					alt=""
					class="userAvatar"
					width="70"
					height="70"
				/>
				<h1>{{ postInfo.userName }}</h1>
			</div>
			<h2 v-bind:style="{ color: postInfo.category.color }">
				{{ postInfo.course }}
			</h2>
			<h2 v-bind:style="{ color: postInfo.category.color }">{{ postInfo.year }}</h2>
			<div class="divider"></div>
			<div class="ratingContainer">
				<div class="starsContainer">
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 1"
						:class="{ faded: postInfo.overallRating < 1 }"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 2"
						:class="{ faded: postInfo.overallRating < 2 }"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 3"
						:class="{ faded: postInfo.overallRating < 3 }"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 4"
						:class="{ faded: postInfo.overallRating < 4 }"
					/>
					<img
						src="../../public/assets/noun-star-1187057.svg"
						alt=""
						class="star 5"
						:class="{ faded: postInfo.overallRating < 5 }"
					/>
				</div>
				<span
					class="overallRating"
					v-bind:style="{ color: postInfo.category.color }"
					>{{ postInfo.overallRating }}</span
				>
				<span class="numRating"
					>{{ postInfo.reviews.length }} Avaliações</span
				>
			</div>
			<div class="btnClockContainer">
				<router-link
					:to="{
						name: 'NewMessage',
						params: { id: postInfo.postID },
					}"
					id="btnMessage"
					>Contactar {{ postInfo.userName }}</router-link
				>
				<img
					src="../../public/assets/noun-clock-1495285.svg"
					alt=""
					id="clock"
				/>
				<div>
					<span>Tempo de Resposta: No mesmo dia</span>
					<span>Tempo de Entrega: 2 a 3 dias</span>
				</div>
			</div>
		</aside>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
			postInfo: this.$store.state.posts[this.$route.params.id],
		};
	},
	methods: {
		toggleAccordion() {
			this.isOpen = !this.isOpen;
		},
	},
	created() {
		console.log(this.postInfo);
	},
};
</script>

<style scoped>
.mainContainer {
	margin-top: 71px;
	margin-right: 0;
	font-family: 'Gilroy', sans-serif;
	max-width: 1000px;
	margin-bottom: 70px;
}

aside {
	position: fixed;
	max-width: 550px;
	top: 30%;
	right: 50px;
	padding-right: 30px;
	width: 38%;
}

aside div:first-child {
	display: flex;
	align-items: center;
}

aside div:first-child h1 {
	font-weight: 800;
	font-size: 63px;
	margin: 10px 0;
	padding-left: 20px;
}

aside h2 {
	font-size: 16px;
	margin: 10px 0;
}

aside div:nth-child(5) {
	margin: 13px 0;
	display: flex;
}

.ratingContainer {
	display: flex;
	align-items: center;
}

.overallRating {
	padding-left: 5px;
	font-size: 25px;
	font-weight: 700;
}

.numRating {
	font-size: 13px;
	font-weight: 700;
	color: #b4b4b4;
	padding-left: 10px;
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

.mainContentContainer {
	margin-top: 170px;
	padding-left: 100px;
	max-width: 640px;
}

.category {
	border-bottom: 5px solid;
	line-height: 7px;
	margin: 19px 0;
	transition: all 0.06s ease-in;
	width: 110px;
}

.category a {
	text-decoration: none;
	color: black;
	font-weight: 700;
}

.category:hover {
	border-width: 0;
	transform: scale(1.2);
	transform-origin: left -20%;
}

#category1 {
	grid-column: 2/3;
}

.descriptionContainer {
	margin-top: 60px;
}

h4 {
	font-size: 20px;
}

.descriptionContainer p {
	font-weight: 400;
	font-size: 15px;
}

.up {
	transform: rotate(180deg);
}

.down {
	transform: rotate(0deg);
}

.filterHeader {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0 0 0;
	cursor: pointer;
}

h5 {
	margin: 0;
}

.filterHeader img {
	height: 27px;
}

.ratingContainer1 {
	display: flex;
	flex-direction: column;
}

.ratingContainer2 {
	display: flex;
}

.faded {
	opacity: 31%;
}

.btnClockContainer {
	display: flex;
}

#clock {
	width: 40px;
	padding-left: 20px;
}

.btnClockContainer div {
	display: flex;
	flex-direction: column;
	font-weight: 700;
	font-size: 13px;
}

#photoContainer {
	display: flex;
	width: 700px;
	height: 500px;
	object-fit:cover;
}
</style>
