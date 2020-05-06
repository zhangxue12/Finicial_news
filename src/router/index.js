
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../views/Home/index.vue'

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
        }
    ]
})

export default router