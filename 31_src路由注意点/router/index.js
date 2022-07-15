// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import School from '../pages/School'
import Subject from "../pages/Subject";


//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/school',
            component: School

        },
        {
            path: '/subject',
            component: Subject
        }
    ]
})
