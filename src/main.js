// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'


//import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
// 手动引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'



import echarts from 'echarts'
// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
import 'echarts-gl'
// import './assets/js/echart-theme/vintage.js'





import ElementUI from 'element-ui';//导入elementUI
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(VueAxios,axios);
// 注册组件后即可使用
// Vue.component('v-chart', ECharts)

// 设置反向代理，前端请求默认发送到 http://202.118.26.114:8081/eletrict
axios.defaults.baseURL = 'http://202.118.26.114:8081'
Vue.prototype.$axios = axios;


Vue.prototype.$echarts = echarts//全局引用echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

    // mounted(){//钩子函数
    //   axios.get('http://v.juhe.cn/offset/index').then(response=>(console.log(response)));
    // },

  render: h => h(App)//elementUI
})
