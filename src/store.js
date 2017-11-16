/*
* @Author: lenggx1046
* @Date:   2017-11-15 11:53:25
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-11-16 18:30:12
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 声明变量
const state = {
  count: 1
}

// 获取数据
const getters = {
  // count (state) {
  //   return state.count
  // }
  count: state => state.count // ES6中箭头函数
}

// 处理异步请求，判断，流程控制
const actions = {
  increment: ({ commit }) => {
    // console.log(commit)
    commit('increment')
  },
  deincrement: ({ commit }) => {
    commit('deincrement')
  }
}

// 处理数据状态的变化
const mutations = {
  increment (state) {
    state.count++
  },
  deincrement (state) {
    state.count--
  }
}

// 导出store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
