import Vue from 'vue'
import App from './App.vue'
import Title from './Title.vue'

Vue.component('status-title', Title)

new Vue({
  el: '#app',
  render: h => h(App)
})
