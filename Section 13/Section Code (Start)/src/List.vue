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

<script lang='js'>
  export default  {
    name: 'list',
    props: [],
    mounted() {

    },
    data() {
      return {
          fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
      }
    },
   	computed: {
   		filteredFruits() {
   			return this.fruits.filter(fruit => {
   				return fruit.match(this.filterText);
   			});
   		}
	},
}
</script>

<!-- <style scoped lang='scss'>
   .list {
   }
</style> -->
