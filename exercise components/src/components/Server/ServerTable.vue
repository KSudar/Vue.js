<template>
  <div>
    <div class="row">
    <server-list></server-list>
    <server-details></server-details>
    </div>
  </div>
</template>

<script>
import ServerDetails from './ServerDetails.vue';
import ServerList from './ServerList.vue';
export default {
  components: {
    'server-list': ServerList,
    'server-details': ServerDetails
  }
};
</script>

<style>
</style>
