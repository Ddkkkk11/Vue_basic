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
export default new VueRouter({
  routes: [{
      name: 'guanyu',
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [{
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [{
            name: 'xiangqing',
            // path: 'detail/:id/:title',
            path: 'detail/',
            // path: 'detail',
            component: Detail,
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
                return{
                  id:$route.query.id,
                  title:$route.query.title,
                  name:$route.query.name
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