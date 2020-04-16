import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: '',
    isConnected: false
  },
  mutations: {
    SET_USER (state, data) {
      state.users = data
    },
    SET_CONNECT (state, payload) {
      state.isConnected = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
