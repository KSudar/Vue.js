<template>
   <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
         <li class="list-group-item" v-for="(server, index) in servers" :key="index" :server = "servers[index]">Server #{{ server.id }}</li>
      </ul>
   </div>
</template>

<script>
export default {
   data: function() {
      return {
         servers: [
            { id: 1, status: "Normal" },
            { id: 2, status: "Critical" },
            { id: 3, status: "Unknown" },
            { id: 4, status: "Normal" },
            { id: 5, status: "Unknown" }
         ]
      };
   }
};
</script>

<style>
</style>
