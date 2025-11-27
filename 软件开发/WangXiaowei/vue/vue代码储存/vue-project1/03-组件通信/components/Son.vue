<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值(父传子) -->
    我是son组件{{ title }}
    <button @click="changeFn">修改</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受 (父传子)
  props:['title'],
   
  methods:{
    changeFn(){
      //1、通过 $emit,向父组件发送消息通知(子传父)
      this.$emit('changeTitle','打打怪假')
    }
  }
 
}
</script>

<style>

</style>