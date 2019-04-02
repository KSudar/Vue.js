<template>
   <div class="col-xs-12 col-sm-6">
      <div>
         <p v-if="!server">Please select a Server</p>
         <p v-else>Server #{{server.id}} selected, Status: {{ server.status }}</p>
         <hr>
         <button @click="resetStatus">Change to normal</button>
      </div>
   </div>
</template>

<script>
import { serverBus } from "../../main";
export default {
   data: function() {
      return {
         server: null
      };
   },
   methods: {
      resetStatus() {
         if (this.server) {
            this.server.status = "Normal";
         }
      }
   },
   created() {
      serverBus.$on("serverSelected", server => {
         this.server = server;
      });
   }
};
</script>

<style>
</style>
