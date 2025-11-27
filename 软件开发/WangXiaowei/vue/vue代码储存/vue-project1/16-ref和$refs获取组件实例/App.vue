<template>
  <div class="app">
    <h4>父组件 -- <button @click="btn">获取组件实例</button></h4>
    <BaseForm ref="baseForm"></BaseForm>
  </div>
</template>

<script>
import BaseForm from "./components/BaseForm.vue";
export default {
  components: {
    BaseForm,
  },
  methods: {
    btn() {
      // 1. 获取子组件实例
      const formComp = this.$refs.baseForm;

      // 2. 调用子组件的方法
      formComp.getFormData(); // 调用子组件的“获取数据”方法
      // formComp.resetFormData(); // 也可调用“重置数据”方法（取消注释即可测试）

      // 3. 直接访问子组件的数据
      formComp.resetFormData()
    },
  },
};
</script>

<style>
</style>