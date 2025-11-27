<template>
  <div class="hm-body">
    我是hm-body
    <HmButton></HmButton>
  </div>
</template>

<script>
import HmButton from './HmButton.vue';
export default {
  //局部注册:注册的组件只能在当前的组件范围内使用
  components:{
    HmButton
  }
};
</script>

<style>
.hm-body {
  height: 400px;
  line-height: 400px;
  background-color: #f79646;
  text-align: center;
  font-size: 30px;
  color: white;
  margin: 40px 0;
}
</style>