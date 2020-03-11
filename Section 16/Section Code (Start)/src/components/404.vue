<template>
	<div>
		<h1>Error 404: Page not found</h1>
		<hr />
		<button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
	</div>
</template>
<script>
export default {
	methods: {
		navigateToHome() {
			this.$router.push({ name: 'home'});
		},
	},
};
</script>