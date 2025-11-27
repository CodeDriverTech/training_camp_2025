<template>
  <div class="app">
    <input v-model="msg1" type="text" />
    <br />
    <!-- !--模板中获取事件的形参→$event 获取 -->
    <input :value="msg2" @input="msg2 = $event.target.value" type="text" >
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: '',
      msg2:''
    }
  },
}

/**
 * 原理：v-model本质上是一个语法糖。例如应用在输入框上，就是 value属性 和 input事件 的合写。
作用：提供数据的双向绑定
① 数据变，视图跟着变 :value 
② 视图变，数据跟着变 @input
注意：$event 用于在模板中，获取事件的形参
 */
</script>

<style>
</style>