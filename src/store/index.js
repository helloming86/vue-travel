import Vue from 'vue'
import Vuex from 'vuex'
import state from './state' // 引用state.js
import mutations from './mutations' // 引用mutations.js
import actions from './actions' // 引用actions.js

Vue.use(Vuex)

export default new Vuex.Store({
  // state: state  ES6中可以简写为state
  state,
  mutations,
  actions
})
