// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import School from '../pages/School'
import Subject from "../pages/Subject";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";


//创建并暴露一个路由器
const router = new VueRouter({
    routes: [{
        name: 'guanyu',
        path: '/about',
        component: About,
        meta: {
            title: 'about'
        }
        // 可以不写 值为undefined 隐式转换为false

    },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {
                title: 'home'
            },
            children: [{
                name: 'xinwen',
                path: 'news',
                component: News,
                meta: {
                    isAuth: true,
                    title: 'news'
                }
            },

                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: 'message'
                    },
                    children: [{
                        name: 'xiangqing',
                        // path: 'detail/:id/:title',
                        path: 'detail/',
                        // path: 'detail',
                        component: Detail,
                        meta: {
                            title: 'detailf'
                        },
                        //props的第一种写法 用的很少 值为对象,改对象中的所有key-value都会以props的形式传递给Detail组件
                        /*  props: {
                           name: 'xdd',
                           age: 20
                         } */
                        // props的第二种写法 用的很少 值为布尔值 若布尔值为真 则会把该路由收到的所有params参数，以props的形式传递给Detail组件
                        // props: true
                        //props第三种写法,值为函数
                        /*   props({
                            query: {
                              id,
                              title,
                              name
                            }
                          }) {
                            return {
                              id,
                              name,
                              title
                            }

                          } */
                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title,
                                name: $route.query.name
                            }
                        }

                    }]
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
//全局前置路由守卫 --每次路由切换之前调用  还有就是初始化的时候被调用
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from, next);
    if (to.meta.isAuth) {
        //判断是否需要校验
        if (localStorage.getItem('school') === 'aku') {
            // document.title = to.meta.title || 'demo';
            next();
        } else {
            alert('您当前无权限查看')
        }
    } else {
        // document.title = to.meta.title || 'demo';
        //不需要检验的 放行
        next();
    }
});
////全局后置路由守卫 --每次路由切换之后调用  还有就是初始化的时候被调用
router.afterEach((to, from) => {
    console.log('afterEach', to, from)
    document.title = to.meta.title;
})

export default router