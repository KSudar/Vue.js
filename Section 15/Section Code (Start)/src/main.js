import Vue from 'vue';
import VueResource from 'vue-resource'; //da bih koristio this.$http trebao sam isntalirati ovo sa npm install
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-9ed06.firebaseio.com';
Vue.http.interceptors.push((request, next) => {
	console.log(request);
	if (request.method == 'POST') {
		request.method = 'PUT';
	}
	next(response => {
		response.json = () => {
			return { messages: response.body };
		};
	});
});

new Vue({
	el: '#app',
	render: h => h(App),
});
