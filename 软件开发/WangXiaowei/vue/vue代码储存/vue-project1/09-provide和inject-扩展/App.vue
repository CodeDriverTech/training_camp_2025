<template>
  <div class="app">
    我是APP组件
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
  // provide & inject 作用：跨层级共享数据。
  // 1. 父组件 provide 提供数据
  provide() {
    //return是共享的数据，里面可以写多个数据
    return {
      // 简单类型 是非响应式的
      color: this.color,
      // 复杂类型 是响应式的
      userInfo: this.userInfo,
    }
  },
  data() {
    return {
      color: 'pink',  //简单类型
      userInfo: { //复杂类型
        name: 'zs',
        age: 18,
      },
    }
  },
  methods: {
    change() {
      this.color = 'green'
      this.userInfo.name = 'ls'
    },
  },
  components: {
    SonA,
    SonB,
  },
}

/*
provide & inject 作用：跨层级共享数据。
  1. 父组件 provide 提供数据
  2. 子/孙组件 inject 取值使用

*/
</script>

<style>
.app {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
}
</style>