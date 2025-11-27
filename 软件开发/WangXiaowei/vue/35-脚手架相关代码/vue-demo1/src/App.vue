<template>
  <div class="App">
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主题组件 -->
    <HmBody></HmBody>
    <!-- 底部组件 -->
    <HmFooter></HmFooter>

  <!--如果 HmFboter +tab 出不来 →需要配置 vscode
    设置中搜索trigger on tab → 勾 
  -->    
  </div>
</template>

<script>
// 导入
import HmHeader from "./commponents/HmHeader.vue";
import HmBody from "./commponents/HmBody.vue";
import HmFooter from "./commponents/HmFooter.vue";
export default {
  components: {
    // '组件名' : 组件对象
    HmHeader: HmHeader,
    HmBody,
    HmFooter
  }
}
</script>

<style>
.App {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>