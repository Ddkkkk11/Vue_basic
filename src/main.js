//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//完整文档
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import {Button, Row, DatePicker} from 'element-ui';

Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);
//关闭Vue的生产提示
Vue.config.productionTip = false;
//使用组件库
// Vue.use(ElementUI);

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})