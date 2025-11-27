<template>
  <div class="app">
    <BaseCount 
    @changeCount="handleChange"  
    :count="count">
  </BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components:{
    BaseCount
  },
  data(){
    return {
      count:100
    }
  },
  methods:{
    handleChange(newCount){
      // console.log(newCount)
      this.count = newCount
    }
  }
}
</script>

<style>

</style>