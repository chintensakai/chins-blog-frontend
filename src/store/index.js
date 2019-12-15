import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    changeLoginState(state, loginState) {
      console.log("----------- " + loginState)
      state.isLogin = loginState;
    }
  },
  actions: {
  },
  modules: {
  }
})
