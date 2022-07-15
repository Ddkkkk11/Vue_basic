// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import School from '../pages/School'
import Subject from "../pages/Subject";
import News from "../pages/News";
import Message from "../pages/Message";
import New from "../pages/New";


//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    children: [{
                        path: 'news',
                        component: New
                    }]
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        },
        {
            path: '/school',
            component: School

        },
        {
            path: '/subject',
            component: Subject
        },
    ]
})
