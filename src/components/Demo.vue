<template>
  <div>
    <input type="button" @click="deincrement" value="点击减少">
    <input type="button" @click="increment" value="点击增加">
    <!-- <div>当前的计数为：{{count}}</div> -->
    <div>当前的计数为：{{doneCount}}</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex' // 利用es6解构，需要的时候调用vuex
export default {
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // ...mapGetters([ // 获取默认值和状态变化时候的值, 多个值的时候用逗号分开
    //   'count'
    // ])  // 第一种形式
    ...mapGetters({ // 将一个 getter 属性另取一个名字，使用对象形式
      doneCount: 'count'
    })
  },
  methods: {
    // ...mapActions([ // mapActions管理注册事件---第一种形式
    //   'increment',
    //   'deincrement',
    //   'getDataObj'
    // ])
    ...mapActions({ // 将一个事件属性另取一个名字，使用对象形式--第二种形式
      'increment': 'increment',
      'deincrement': 'deincrement'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
