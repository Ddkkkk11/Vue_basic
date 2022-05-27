// 引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入混合
import {mixin, mixin2} from "./mixin";


//关闭生产提示
Vue.config.productionTip = false;
//全部配置混合
Vue.mixin(mixin);
Vue.mixin(mixin2);
new Vue({
    el: '#app',
    render: h => h(App),
    // typeof h 是一个函数
})
