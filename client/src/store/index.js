import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: ''
  },
  mutations: {
    SET_USER (state, data) {
      state.users = data
    }
  },
  actions: {
  },
  modules: {
  }
})
