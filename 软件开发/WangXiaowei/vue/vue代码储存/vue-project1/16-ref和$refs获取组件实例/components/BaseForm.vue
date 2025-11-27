<template>
  <div class="app">
    <div>
      账号: <input v-model="username" type="text">
    </div>
     <div>
      密码: <input v-model="password" type="text">
    </div>
    <div>
      <button @click="getFormData">获取数据</button>
      <button @click="resetFormData">重置数据</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: '123456',
    }
  },
  methods: {
    getFormData() {
      console.log('获取表单数据', this.username, this.password);
      // return{
      //   account:this.account,
      //   password:this.password
      // }
    },
    resetFormData() {
      this.username = ''
      this.password = ''
      console.log('重置表单数据成功');
    },
  }
}
</script>

<style scoped>
.app {
  border: 2px solid #ccc;
  padding: 10px;
}
.app div{
  margin: 10px 0;
}
.app div button{
  margin-right: 8px;
}
</style>