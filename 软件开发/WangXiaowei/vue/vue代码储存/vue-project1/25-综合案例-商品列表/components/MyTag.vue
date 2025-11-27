<template>
  <div class="my-tag">
    <input 
      v-if="isEdit" 
      v-focus
      ref="inp"
      class="input" 
      type="text" 
      placeholder="输入标签"
      :value="value"
      @blur="isEdit = false"
      @keyup.enter="hanldeEnter"
      />
    <div 
      class="text"
      @dblclick="handleClick"
      v-else
      >
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    value:String
  },
  data() {
    return{
      isEdit: false,
    }
  },
  methods:{
    handleClick(){
      this.isEdit = true

      // this.$nextTick(() => {
      //   this.$refs.inp.focus()
      // })
    },
    hanldeEnter(e){
      if(e.target.value.trim() === '') return alert('不为空')
      //子传父，将回车时，[输入框的内容]提交给父组件更新
      //由于父组件是v-mode1，触发事件，需要触发input事件I
      // console.log('huzi')
      // console.log(e.target.value)
      this.$emit('input',e.target.value)
      //提交完成，关闭输入状态
      this.isEdit = false
    }
  }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>