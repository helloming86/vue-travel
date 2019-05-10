import Vue from 'vue'
import Vuex from 'vuex

// 这是使用脚手架，默认自动生成的vuex应用
// 对于大型应用，我们会希望把 Vuex 相关代码分割到模块中
// 我们新增了store目录，并修改main.js的指向，同时将store.js的内容平移过去

// Vuex是一个插件，Vue通过Vue.use 方式来来使用插件
Vue.use(Vuex)

// 不同浏览器或者隐身模式，可能导致localStorage异常，导致程序不能正常运行，所以使用try catch 才更合理

let defaultCity = '洛阳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {

}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    mchangeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (error) {

      }
    }
  },
  actions: {
    changeCity (ctx, city) {
      // console.log(city)
      ctx.commit('mchangeCity', city)
    }
  }
})
