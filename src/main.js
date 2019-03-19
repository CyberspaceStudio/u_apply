import Vue from 'vue'
import App from './App'
import global from './global/global'; //全局变量

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.prototype.GLOBAL = global;  //绑定到vue原型上

