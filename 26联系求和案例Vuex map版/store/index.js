//该文件中用于创建vuex中最为核心的store
//引入Vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
//使用Vuex
Vue.use(Vuex);
//准备actions --用于响应组件里面的动作
const actions = {
    incrementOdd(content, value) {
        if (content.state.sum % 2) content.commit('increment', value);
    },
    incrementWait(content, value) {
        setTimeout(() => {
            content.commit('increment', value);
        }, 1000)
    }
};
//准备mutations --用于操作数据(state)
const mutations = {
    increment(state, value) {
        state.sum += value;
        console.log('mutations中的JIA加被调用',)
        console.log(value)
    },
    decrement(state, value) {
        state.sum -= value;
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


