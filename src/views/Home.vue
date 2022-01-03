<template>
	<div>
		<MainLanding />
		<MainLanding2 />
		<MainLanding3 />
	</div>
</template>

<script>
// @ is an alias to /src
import MainLanding from '../components/MainLanding.vue';
import MainLanding2 from '../components/MainLanding2.vue';
import MainLanding3 from '../components/MainLanding3.vue';

export default {
	name: 'Home',
	components: { MainLanding, MainLanding2, MainLanding3 },
	data() {
		return {};
	},
};
</script>
