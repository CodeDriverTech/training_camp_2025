<template>
  <div>
    <MyDialog>
      <!-- 需要通过template标签包裹需要分发的结构 -->
      <template v-slot:head>
        <div>我是大标题</div>
      </template>
      <template v-slot:content>
        <div>我是内容</div>
      </template>
      <template #foot>
        <button>确认</button>
        <button>取消</button>
      </template>
    </MyDialog>
  </div>


   <!-- v-solt:head 可以简写为#head -->
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyDialog,
  },
};
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>