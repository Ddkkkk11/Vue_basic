//该文件中用于创建vuex中最为核心的store
//引入Vue
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
//使用Vuex
//引入count模块 求和
import countOptions from './count'
//引入人员管理模块
import personOptions from './person'

Vue.use(Vuex);

/*//求和功能相关的配置
const countOptions = {
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
}*/
//人员管理相关配置
/*
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(content, value) {
            if (value.name.indexOf('王') === 0) {
                console.log("我是王")
                content.commit('ADDPERSON', value)
            } else {
                alert('添加的人必须姓王')
            }

        }
    },
    mutations: {
        ADDPERSON(state, personObj) {
            state.personList.unshift(personObj);
            console.log('ADDPERSON被调用了')
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'},
            {id: '002', name: '李四'},
            {id: '003', name: '王麻子'},
            {id: '004', name: '孙六'},
            {id: '005', name: '赵七'},
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
};
*/
//创建store//暴露store 导出store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
});


