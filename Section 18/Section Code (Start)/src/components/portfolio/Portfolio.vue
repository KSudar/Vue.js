<template>
	<div>
		<appStock v-for="stock in stocks" :stock="stock"></appStock>
	</div>
</template>

<script>
import Stock from './Stock.vue';
export default {
	computed: {
		stocks() {
			return this.$store.getters.stockPortfolio;
		},
	},
	components: {
		appStock: Stock,
	},
};
</script>
