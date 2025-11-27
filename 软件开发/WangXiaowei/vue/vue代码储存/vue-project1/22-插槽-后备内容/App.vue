<template>
  <div>
    <MyDialog>
      <!-- 删除 -->
    </MyDialog>

    <MyDialog>
      你确定要退出吗
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}

/*
  插槽后备内容：封装组件时，可以为预留的 `<slot>` 插槽提供后备内容（默认内容）。
l 语法: 在 <slot> 标签内，放置内容, 作为默认显示内容
l 效果:
l 外部使用组件时，不传东西，则slot会显示后备内容 
l 外部使用组件时，传东西了，则slot整体会被换掉
*/
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>