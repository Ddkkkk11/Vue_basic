import axios from "axios";
import {nanoid} from 'nanoid'

export default {
    namespaced: true,
    actions: {
        addPersonWang(content, value) {
            if (value.name.indexOf('王') === 0) {
                console.log("我是王")
                content.commit('ADDPERSON', value)
            } else {
                alert('添加的人必须姓王')
            }

        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADDPERSON', {
                        id: nanoid(),
                        name: response.data

                    });
                }
            )


        }
    },
    mutations: {
        ADDPERSON(state, personObj) {
            state.personList.unshift(personObj);
            console.log('ADDPERSON被调用了')
        }
    }
    ,
    state: {
        personList: [
            {id: '001', name: '张三'},
            {id: '002', name: '李四'},
            {id: '003', name: '王麻子'},
            {id: '004', name: '孙六'},
            {id: '005', name: '赵七'},
        ]
    }
    ,
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
}
;
