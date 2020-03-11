<template>
	<div>
		<h3>Some User Details</h3>
		<p>User loaded has ID: {{ $route.params.id }}</p>
		<br />
		<router-link tag="button" class="btn btn-primary" :to="link"
			>Edit user</router-link
		>
	</div>
</template>
<script>
export default {
	data() {
		return {
			link: {
				name: 'userEdit',
				params: { id: this.$route.params.id },
				query: { q: 100, locale: 'en' },
				hash: '#data',
			},
		};
	},
};
</script>
