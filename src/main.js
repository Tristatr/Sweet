import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';//集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
import axios from 'axios'
import global from './assets/css/global.css'
import VueWechatTitle from 'vue-wechat-title';
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'


Vue.use(Vuex);
Vue.use(VueWechatTitle);

// axios 请求拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});

// 配置页面标题
router.afterEach(function (to, from) {
  if(to.meta.title){
    document.title = to.meta.title;
  }
});

Vue.prototype.$http = axios;

const store = new Vuex.Store({  //存放组件之间共享的数据
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },

  mutations: {//显式的更改state里的数据
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
    /* 
     getters:{
                 //获取数据的方法
             },
             */
  }
});

export default store;
Vue.use(ElementUI);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {App},
  template: '<App/>'
});

axios.defaults.baseURL = 'http://localhost:8081';
