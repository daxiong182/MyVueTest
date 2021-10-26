import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/home',
            component: () =>
                import ('../components/Home')
        },
        {
            path: '/appleStore',
            component: () =>
                import ('../components/AppleStore')
        },
        {
            path: '/checkLike',
            component: () =>
                import ('../components/CheckLike')
        },
        {
            path: '/shoppingCar',
            component: () =>
                import ('../components/ShoppingCar')
        },
        {
            path: '/RandomName',
            component: () =>
                import ('../components/RandomName')
        },
        {
            path: '/countDown',
            component: () =>
                import ('../components/CountDown')
        },
        {
            path: '/randomNumber',
            component: () =>
                import ('../components/RandomNumber')
        },
    ]
})