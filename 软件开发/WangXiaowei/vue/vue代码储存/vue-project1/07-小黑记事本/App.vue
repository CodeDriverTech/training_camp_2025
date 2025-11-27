<template>
  <!-- 主体区域 -->
  <section id="app">
    <todoHeader @add="handleAdd"></todoHeader>
    <todoMain @del="handleDel" :list="list"></todoMain>
    <todoFooter @clear="handleclear" :list="list"></todoFooter>
  </section>
</template>

<script>
import todoHeader from "./components/todoHeader.vue";
import todoMain from "./components/todoMain.vue";
import todoFooter from "./components/todoFooter.vue";

// 渲染功能
//1、提供数据 -> 提供在公共的父组件 App.vue
//2、通过父传子、将数据渲染给todoMain
//3、利用v-for渲染

//添加功能
//1.收集表单数据→v-model
//2.监听事件(回车+点击 都要进行添加)
//3.子传父，将任务名称传递给父组件App.vue
//4.进行添加 unshift(自己的数据自己负责

//删除功能:
//1.监听事件(监听删除的点击)携带 id
//2.子传父，将删除的id传递给父组件App.vue
//3.进行删除 filter(自己的数据自己负责)

//底部合计：父传子传list -> 渲染

//底部合计:父传子 传list → 渲染
//清空功能:子传父 通知到父组件→父组件进行清空
// 持久化存储:watch深度监视
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [
        { id: 1, name: "打篮球" },
        { id: 2, name: "玩飞盘" },
        { id: 3, name: "吃泥巴" },
      ],
    };
  },
  methods: {
    handleAdd(todoName) {
      // console.log(todoName)
      this.list.unshift({
        id: +new Date(),
        name: todoName,
      });
    },
    handleDel(id) {
      // console.log('老爹收到的',id)
      this.list = this.list.filter((item) => item.id !== id);
    },
    handleclear() {
      this.list = [];
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("list", JSON.stringify(newValue));
      },
    },
  },
  components: {
    todoHeader,
    todoMain,
    todoFooter,
  },
};
</script>

<style>
</style>
