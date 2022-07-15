export default {
    namespaced: true,
    actions: {
        jiaOdd(content, value) {
            console.log('actions中的jiaOdd被调用')
            if (content.state.sum % 2) content.commit('JIA', value);
        },
        jiaDelay(content, value) {
            setTimeout(() => {
                content.commit('JIA', value);
            }, 1000)
            // console.log(miniStore)
            // miniStore.commit('JIAN', value);
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value;
            console.log('mutations中的JIA加被调用',)
            // console.log(state)
            console.log(value)
        },
        JIAN(state, value) {
            state.sum -= value;
            console.log('mutations中的JIAN加被调用')
        },
    },
    state: {
        sum: 0,
        school: '家里',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}