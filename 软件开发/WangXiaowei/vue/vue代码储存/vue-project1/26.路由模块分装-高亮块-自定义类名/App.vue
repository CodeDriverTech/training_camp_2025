<template>
  <div>
    <div class="footer_wrap">
      <!-- 
        vue-router 提供了一个全局组件router-link(取代a标签)
      1、能够跳转，配置to属性指定路径(必须)。本质还是a标签，to无需 #
      2、可以高亮，默认提供高亮类名，可以直接设置高亮样式，自带激活时的类名

      router-link怎么用？
        <router-link to="/路径值"><router-link>
          必须传入to属性，指定路由值

      可以看出会显示 router-link-exact-active  router-link-active俩个参数

      1、router-link-active 模糊匹配(使用的多)
          to="/my"  可以匹配 /my  /my/a   /my/b
      2、router-link-exact-active 精确匹配
          to="/my" 仅可以匹配 /my


          下一个章节说这来个router-link俩个高亮类名太长了，想要定制一个？
            
      
      -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>
    <div class="top">
      <!-- 路由出口 → 匹配的组件所展示的位置 -->
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a.active{
  background-color: purple;
}
.footer_wrap a:hover {
  background-color: #555;
}
</style>