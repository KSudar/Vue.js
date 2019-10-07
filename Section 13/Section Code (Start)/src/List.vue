<template lang='html'>
  	<div>
	  <section class='list'>
	      <h1>list Component</h1>
	      <h1>Filters & Mixins</h1>
	              <hr>
	              <input v-model='filterText'>
	              <ul>
	                 <li v-for='fruit in filteredFruits'>{{ fruit }}</li>
	              </ul>
	    </section>
  	</div>
</template>

<script>
   import { fruitMixin } from './fruitMixin';
   export default {
		mixins: [fruitMixin],
		created() {
			console.log('inside list created hook');
		},
   };
</script>

<!-- <style scoped lang='scss'>
   .list {
   }
</style> -->
