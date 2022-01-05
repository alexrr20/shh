<template>
	<div id="app">
		<NavBar />
		<router-view />
		<Footer />
	</div>
</template>

<script type="text/javascript">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'app',
	components: {
		NavBar,
		Footer, // register component
	},
};
</script>
<style>
body {
	background-color: black;
	margin: 0;
	padding: 0;
}
</style>
