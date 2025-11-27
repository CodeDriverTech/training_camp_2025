<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
   handleEdit(){
    //1、显示输入框(异步更新)
    this.isShowEdit = true
    //2、让输入框获取焦点  （$nextTick：等 DOM 更新后, 才会触发执行此方法里的函数体）
    this.$nextTick(() => {
      this.$refs.inp.focus()
    })
    // this.$nextTick(() => {
          // 业务逻辑   
    // })
   }
  },
}

/**
 * $nextTick：等 DOM 更新后, 才会触发执行此方法里的函数体

 */
</script>

<style>
</style>