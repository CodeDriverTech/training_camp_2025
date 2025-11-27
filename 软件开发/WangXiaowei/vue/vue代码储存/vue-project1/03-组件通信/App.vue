<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 1.给组件标签，添加属性方式 赋值(父传子) -->

    <!-- 2.父组件，对消息进行监听 (子传父)-->
    <son :title="myTitle" @changeTitle="handleTitle"></son>
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  components: {
    Son,
  },
  data() {
    return {
      myTitle: "sciao",
    }
  },
   //3.提供处理函数，提供逻辑
  methods:{
    handleTitle(newvalue){
      // console.log(newvalue)
      this.myTitle = newvalue
    }
  }
};
</script>

<style>
</style>