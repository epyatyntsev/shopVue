import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// --- Components --- //


import Homepage from '../../pages/Homepage/'
import Cart from '../../pages/Cart/'

// --- End Components --- //


const routes = [
    { path: '/', component: Homepage },
    { path: '/cart', component: Cart }
]

export default new VueRouter({
    routes
})