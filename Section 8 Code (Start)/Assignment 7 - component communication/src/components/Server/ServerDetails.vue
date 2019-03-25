<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server"><p>Server Details are currently not updated</p></div>
        <div v-else><p>Server Details</p>
        <p>Server #{{ server.id }} status is {{server.status}}</p></div>
    </div>

</template>

<script>
export default {
   props: {
      server: {
         type: Object
      }
   },
   methods: {
      switchName() {
         return this.myName
            .split("")
            .reverse()
            .join("");
      }
   },
   created() {
      eventBus.$on('ageWasEdited', (age) => {
         this.userAge = age;
      });
   }
};

</script>

<style>

</style>
