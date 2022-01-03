<template>
	<div id="app">
		<NavBar />
		<router-view />
	</div>
</template>

<script type="text/javascript">
import NavBar from './components/NavBar.vue';
export default {
	name: 'app',
	components: {
		NavBar, // register component
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
