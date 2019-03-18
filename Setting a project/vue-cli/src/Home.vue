<template>
  <div>
    <!-- <div v-for="server in 5"> -->
    <app-server-status></app-server-status>
    <!-- </div> -->
  </div>
</template>



<script>
import ServerStatus from "./ServerStatus.vue";

export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>
