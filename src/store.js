/*
* @Author: lenggx1046
* @Date:   2017-11-15 11:53:25
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-11-16 16:14:34
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 10
}

const getters = {
  // count (state) {
  //   return state.count
  // }
  count: state => state.count // ES6中箭头函数
}

const actions = {
  increment: ({ commit }) => {
    // console.log(commit)
    commit('increment')
  },
  deincrement: ({ commit }) => {
    commit('deincrement')
  }
}

const mutations = {
  increment (state) {
    state.count++
  },
  deincrement (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
