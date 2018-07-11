import Vue from 'vue';
import Vuex from 'vuex';
import Message from 'vue-simple-notification'
Message.config({
    duration: 1,
    closeBtn: true
})
import 'vue-simple-notification/dist/style.css'

Vue.use(Vuex)

//LOCAL DB
function updateCartInCache(currentState){
    if(localStorage.getItem('cart')) {
        localStorage.removeItem('cart')
    }
    localStorage.setItem('cart', JSON.stringify(currentState));
}

export const store = new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        addToCart(state, item) {
            Message.success('Item added to your card')
            let itemToAdd = item;
            // If exist update
            for(let index in state.cart){
                if(state.cart[index].id === item.id){
                    state.cart[index].qty += 1;
                    updateCartInCache(state.cart);
                    return
                }
            }
            //create new Cart item if it unique
            itemToAdd.qty = 1;
            itemToAdd.createdAt = new Date();
            state.cart.push(itemToAdd);
            updateCartInCache(state.cart);
        },
        getCartFromStorage(state){
            //if exist pull data to state
            if(localStorage.getItem('cart')) {
                state.cart = JSON.parse(localStorage.getItem('cart'));
            }
        },
        changeQty(state){
            //just update localStorage (Vuex reactive relations with v-model)
            updateCartInCache(state.cart);
        },
        //delete item by id
        deleteById(state, id){
            let removeIndex = state.cart.map(function(item) { return item.id; }).indexOf(id);
            state.cart.splice(removeIndex, 1);
            updateCartInCache(state.cart);
        },
        //clear all items from cart
        clearCart(state){
            state.cart = []
            updateCartInCache(state.cart);

        }
    },
    getters: {
        //get position count for header badge
        getProductCount(state) {
            return state.cart.length;
        },
        //get all cart
        getCart(state){
            return state.cart
        },
        //get total cart price
        getTotalPrice(state){
            let totalPrice = 0;
            for(let index in state.cart){
                totalPrice += state.cart[index].price * state.cart[index].qty
            }
            return totalPrice
        }
    }
})