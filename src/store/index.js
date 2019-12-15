import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: ''
  },
  mutations: {
    changeLoginState(state, loginState) {
      state.isLogin = loginState;
    }
  },
  actions: {
  },
  modules: {
  }
})
