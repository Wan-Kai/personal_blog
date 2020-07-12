import Auth from "./Auth";
import RouteWithSubRouters from './RouteWithSubRouters';
import Dashboard from "../pages/dashboard";
import BlogLayout from "../layout";
import Login from "../pages/login";

export default [
    {
        // 顶级路由 是一个单纯的路基组件，没有任何icon name这些和路由导航相关的东西
        // 路由鉴权 不管什么情况，都是需要走这个组件的 都是必须先过这个组件的关卡

        component: Auth,
        routes: [
            {
                // 1级级路由
                component: Login,
                path: '/login',
            },
            {
                path: '/',
                component: BlogLayout,
                routes: [
                    {
                        // 1级级路由
                        component: Dashboard,
                        icon: '',
                        name: '工作台',
                        path: '/dashboard',
                    },
                    // 还有一个404 的页面，
                    {

                        // 1级级路由
                        component: RouteWithSubRouters,
                        icon: '',
                        name: '博客管理',
                        path: '/article-manage',
                        routes: [

                        ]
                    },
                ],
            },
        ]
    }
];