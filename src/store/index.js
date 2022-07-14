//该文件中用于创建vuex中最为核心的store
//引入Vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";

//使用Vuex
Vue.use(Vuex);
//准备actions --用于响应组件里面的动作
const actions = {
    /*jia(content, value) {
        // this.$store.commit('jia', n)
        console.log('actions中的jia被调用了')
        content.commit('JIA', value)
    },
    jian(content, value) {
        content.commit('JIAN', value);
    },*/
    jiaOdd(content, value) {
        // console.log('actions中的jiaOdd被调用')
        // console.log('jiaOdd我做了一些事情')
        // content.dispatch('demo', value)
        if (content.state.sum % 2) content.commit('JIA', value);
        // console.log(miniStore)
        // miniStore.commit('JIAN', value);
    },
    /* demo(content, value) {
         console.log('我是demo我也做了一些处理')

     },*/
    jiaDelay(content, value) {
        setTimeout(() => {
            content.commit('JIA', value);
        }, 1000)
        // console.log(miniStore)
        // miniStore.commit('JIAN', value);
    }
};
//准备mutations --用于操作数据(state)
const mutations = {
    JIA(state, n) {
        state.sum += n;
        console.log('mutations中的JIA加被调用',)
        console.log(state)
    },
    JIAN(state, n) {
        state.sum -= n;
        console.log('mutations中的JIAN加被调用')
    }
};

//准备state --用于存储数据
const state = {
    sum: 0,
    school: '家里',
    subject: '前端'
};
//准备getters
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
};


//创建store//暴露store 导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters

});


