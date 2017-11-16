# 一个简单的vuex的自学demo

可以参考vuex官网：[vuex.vuejs.org](https://vuex.vuejs.org) 文档来学习

## 什么是vuex，有什么用？
>官方解释是：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

首先要安装：cnpm install vuex -D，而不是install vuex -S

*1*.这个状态自管理应用包含以下几个部分：

- state，驱动应用的数据源；
- view，以声明方式将 state 映射到视图；
- actions，响应在 view 上的用户输入导致的状态变化

'单向数据流'结构的示意图：
  ![](https://vuex.vuejs.org/zh-cn/images/flow.png)

官方的vuex的工作流程图：
  ![](https://vuex.vuejs.org/zh-cn/images/vuex.png)

*2*.每一个 Vuex 应用的核心就是 store（仓库），通过改变*提交*(commit) mutation，来改变store中的状态，几种状态： State, Getters, Actions, Mutations

话不多少，直接上简单的vuex代码：

1.首先创建一个store.js文件，代码如下

```
import vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  count: state => state.count
}

const actions = {
  increment: ({ commit }) => {
    commit('increment')
  }
}

const mutations = {
  increment (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

```
2.在main.js文件中引入store.js文件

```
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 路径为创建的时候

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

```

3.在Demo.vue中写入事件名：（点击的时候，依次增加）, 具体见Demo.vue

HTML代码：

```
  <div>
    <input type="button" @click="increment" value="点击增加">
    <div>当前的计数为：{{count}}</div>
  </div>

```
js代码： 

```
  import {mapGetters, mapActions} from 'vuex'
  computed: {
    ...mapGetters({
      count: 'count'
    })
  }
  methods: {
    ...mapActions({
      'increment': 'increment',
    })
  }
```

