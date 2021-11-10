//路由器對象模塊
import Vue from "vue";
import VueRouter from "vue-router";

//路由
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'




//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [{
            path: '/msite',
            component: MSite,
            meta: {
                pd: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                pd: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                pd: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                pd: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/msite'
        }

    ]
})