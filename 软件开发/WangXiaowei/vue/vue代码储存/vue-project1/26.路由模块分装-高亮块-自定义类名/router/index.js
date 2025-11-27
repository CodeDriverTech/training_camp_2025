// 路由的使用步骤 5 + 2
// 5个基础步骤
// 1. 下载 v3.6.5
// 2. 引入
// 3. 安装注册 Vue.use(Vue插件)
// 4. 创建路由对象
// 5. 注入到new Vue中，建立关联

// 2个核心步骤
// 1. 建组件(views目录)，配规则
// 2. 准备导航链接，配置路由出口(匹配的组件展示的位置) 


//@可以理解为上面说的src 从src里面寻找不同的组件
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  //插件初始化

//创建一个路由对象
const router = new VueRouter({
  //routes  所有路由规则
  //route 一条路由规则{path:路径，component：组件}
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ],
  //link自定义高亮类名
  linkActiveClass:'active',   //模糊匹配
  linkExactActiveClass:'exact-active',  //精确匹配
})


export default router
