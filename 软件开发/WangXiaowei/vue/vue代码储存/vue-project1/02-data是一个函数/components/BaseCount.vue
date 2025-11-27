<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{count}}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  //data必须是一个函数→保证每个组件实例，维护独立的一个数据对象
  data() {
    //return 在这里的作用就是 “提供组件的初始数据，并确保这些数据具备响应式特性和实例独立性”
    console.log('data执行了')
    return {
      count: 999,
    }
  }
}
</script>
  
<style>
.base-count {
  margin: 20px;
}
</style>