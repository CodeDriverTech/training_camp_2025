<template>
  <!-- 统计和清空 -->
    <footer class="footer" v-show="list.length > 0">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> {{ list.length }} </strong></span>
      <!-- 清空 -->
      <button @click="AllDel" class="clear-completed">
        清空任务
      </button>
    </footer>
</template>

<script>
export default {
  props:{
    list:Array
  },
  methods:{
    AllDel(){
      this.$emit('clear')
    }
  }
}
</script>

<style>

</style>