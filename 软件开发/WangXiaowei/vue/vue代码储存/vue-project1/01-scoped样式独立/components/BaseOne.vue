<template>
  <div>
    BaseOne
    <span>111</span>
    <a href="#">链接</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  /*
    1.默认的style样式，会作用于全局 → 全局样式
    2.加上scoped属性的style样式，只会用作用于当前组件 -> 局部样式

    组件应该有着自己独立的样式，推荐加上scoped

    coped原理？
        1. 当前组件内标签都被添加 一个兹定于属性data-v-hash值 的属性
          data-v-hash值
          data-v-5f6a9d56px:区分不同的组件
        2. css选择器都被添加 [data-v-hash值] 的属性选择器
        最终效果: 必须是当前组件的元素, 才会有这个自定义属性, 才会被这个样式作用到
  */
  div{
    border: 3px solid blue;
    margin: 30px;
  }
</style>