<template>
  <div class="main">
    <div class="box" v-loading="isLoading">
      <ul>
        <li v-for="item in list" :key="item.id" class="news">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>

          <div class="right">
            <img :src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 安装axios =>  yarn add axios
import axios from 'axios'

// 接口地址：http://hmajax.itheima.net/api/news
// 请求方式：get
export default {
  data () {
    return {
      list: [],
      isLoading:true
    }
  },
  async created () {
    // 1. 发送请求获取数据
    const res = await axios.get('http://hmajax.itheima.net/api/news')
    
    setTimeout(() => {
      // 2. 更新到 list 中
      this.list = res.data.data
      this.isLoading = false
    }, 2000)
  },
  directives:{
    loading:{
      inserted(el,binding){
       binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      update(el,binding){
       binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    }
  }
}

/*
  场景:实际开发过程中，发送请求需要时间，在请求的数据未回来时，页面会处于空白状态=>用户体验不好

  分析:
      1. 本质 loading 效果就是一个蒙层，盖在了盒子上
      2.数据请求中，开启loading状态，添加蒙层
      3、数据请求完毕，关闭loading状态，移除蒙层
  
    实现:
      1. 准备一个 loading 类，通过伪元素定位，设置宽高，实现蒙层
      2、开启关闭 loading 状态(添加移除蒙层)，本质只需要添加移除类即可
      3.结合自定义指令的语法进行封装复用
*/
</script>

<style>
/* 伪类 - 蒙层效果 */
.loading:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url('./loading.gif') no-repeat center;
}

/* .box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
} */

.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>