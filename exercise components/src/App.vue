//terminal: npm run dev
<template>
  <div class="container">
    <server-header></server-header>
    <server-table></server-table>
    <server-footer></server-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import ServerTable from './components/Server/ServerTable.vue';
export default {
  components: {
    'server-header': Header,
    'server-footer': Footer,
    'server-table': ServerTable 
  }
};

</script>

<style>
</style>
