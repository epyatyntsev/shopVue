import Vue from 'vue'
import App from './App'

import router from './helpers/Router/'
import {store} from './helpers/Store/'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created(){
        this.$store.commit('getCartFromStorage')
    }
});
