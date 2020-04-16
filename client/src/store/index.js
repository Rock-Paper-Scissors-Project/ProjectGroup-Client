import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isConnected: false
  },
  mutations: {
    SET_CONNECT (state, payload) {
      state.isConnected = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
