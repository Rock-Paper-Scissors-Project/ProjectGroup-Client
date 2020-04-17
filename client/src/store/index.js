import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: '',
    playerChoise: ''
  },
  mutations: {
    SET_USER (state, data) {
      state.users = data
    },
    SET_CHOISE (state, data) {
      state.playerChoise = data
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
