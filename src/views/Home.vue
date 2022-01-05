<template>
	<div>
		<MainLanding />
		<MainLanding2 />
		<MainLanding3 />
		<MainLanding4 />
		<MainLanding5 />
	</div>
</template>

<script>
// @ is an alias to /src
import MainLanding from '../components/MainLanding.vue';
import MainLanding2 from '../components/MainLanding2.vue';
import MainLanding3 from '../components/MainLanding3.vue';
import MainLanding4 from '../components/MainLanding4.vue';
import MainLanding5 from '../components/MainLanding5.vue';

export default {
	name: 'Home',
	components: {
		MainLanding,
		MainLanding2,
		MainLanding3,
		MainLanding4,
		MainLanding5,
	},
	data() {
		return {};
	},
};
</script>
