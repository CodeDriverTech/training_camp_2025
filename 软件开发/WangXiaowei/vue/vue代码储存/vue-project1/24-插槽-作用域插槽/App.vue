<template>
  <div>
    <MyTable :data="list">
      <!-- 3、 -->
      <template #default="obj">
        <button @click="del(obj.row.id)">
        删除
      </button>
      </template>
    </MyTable>

    <MyTable :data="list2">
      <template #default="{row}">
        <button @click="show(row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data () {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  methods:{
    del(id){
      // console.log(id)
      this.list=this.list.filter(item => item.id !== id)
    },
    show(row){
      // console.log(row);
      alert(`姓名：${row.name},年龄:${row.age}`)
    }
  },
  components: {
    MyTable
  }
}

/*
  插槽分类:默认插槽(组件内定制一处结构)具名插槽(组件内定制多处结构)
  作用域插槽:是插槽的一个传参语法

  作用域插槽:
    定义 slot 插槽的同时是可以传值的。给 插槽 上可以 绑定数据，将来使用组件时可以用。
  
  
*/
</script>
