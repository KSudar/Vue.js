import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		value: 0,
	},
	getters: {
		valueGet: state => {
			return state.value;
		},
	},
	mutations: {
		updateValue: (state, payload) => {
			state.value = payload;
		},
	},
	actions: {
		updateValue({ commit }, payload) {
			commit('updateValue', payload);
		},
	},
	modules: {
		counter
	}
});
