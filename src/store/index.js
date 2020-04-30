import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    login(state, user) {
      state.user = user
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout(state) {
      state.user = null
      localStorage.removeItem("user")
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
})
