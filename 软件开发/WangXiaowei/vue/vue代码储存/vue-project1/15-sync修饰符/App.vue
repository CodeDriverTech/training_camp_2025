<template>
  <div class="app">
    <button
      @click="isShow = true"
    >退出按钮</button>
     <!--:visible.sync => :visible + @update:visible  -->
     <!-- visible为显示隐藏的意思 -->
    <BaseDialog
   
      :visible.sync="isShow"
    >
  </BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    
  },
  components: {
    BaseDialog,
  },
}

/*
  作用：可以实现 子组件 与 父组件数据 的 双向绑定，简化代码
  特点：prop属性名，可以自定义，非固定为 value
  场景：封装弹框类的基础组件， visible属性 true显示 false隐藏
  本质：就是 :属性名 和 @update:属性名 合写

*/
</script>

<style>
</style>