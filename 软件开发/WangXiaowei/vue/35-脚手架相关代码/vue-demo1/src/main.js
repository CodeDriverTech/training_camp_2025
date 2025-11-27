import Vue from 'vue'
import App from './App.vue'
//编写导入的代码，往代码的顶部取规范
// import HmButton from './commponents/HmButton.vue'

Vue.config.productionTip = false

//进行全局注册 → 在斯有的组件范围内都能直接使用
//Vue.component(组件名，组件对象)
// Vue.component('HmButton',HmButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
