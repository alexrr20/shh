<template>
    <div class="mainContainer">
        <div class="container">
            <div class="headerContainer">
                <h1>Mensagens</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Messages',
        components:{},
    }
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
</style>