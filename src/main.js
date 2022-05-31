// 引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    render: h => h(App),
    mounted() {
        setTimeout(() => {
            console.log('三秒后会销毁vm')
        }, 0)
        setTimeout(() => {
            console.log('vm已经被销毁了')
            this.$destroy();
        }, 3000);
    }
});
