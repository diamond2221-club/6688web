import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    websiteConf: {}
  },
  mutations: {
    setWebSiteConf(state, conf) {
      state.websiteConf = conf;
    }
  },
  actions: {
  },
  modules: {
  }
})
