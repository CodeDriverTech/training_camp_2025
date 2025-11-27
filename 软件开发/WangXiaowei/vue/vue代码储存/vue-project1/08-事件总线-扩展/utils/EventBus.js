// 创建一个都能访问到的事件总线 (空 Vue 实例) → utils/EventBus.js
import Vue from 'vue'

const Bus = new Vue()

export default Bus