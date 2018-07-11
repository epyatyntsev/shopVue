<template>
    <div class="container text-center">
        <h1>Cart</h1>
        <div v-if="cart.length !== 0" class="cart-main">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <cartRow v-for="(item, index) in cart" :key="item.id" :index="index" :item="item"></cartRow>
                </tbody>
            </table>
            <h3 class="text-center">Total Price : {{$store.getters['getTotalPrice']}} $</h3>
            <button class="button" @click="checkout">Checkout</button>
            <button class="btn btn-danger" @click="$store.commit('clearCart')">Delete all items</button>
        </div>
        <div v-else class="empty-state">
            Cart is empty
        </div>
    </div>
</template>

<script>
    import cartRow from './CartRow'

    export default {
        name: "Cart",
        components: {
            'cartRow': cartRow
        },
        created() {
            this.$store.commit('getCartFromStorage')
        },
        computed: {
            cart() {
                return this.$store.getters['getCart'].sort(function (prev, next) {
                    return Date.parse(next.createdAt) - Date.parse(prev.createdAt);
                });
            }
        },
        methods: {
            checkout() {
                alert('COMING SOON')
            }
        },
    }
</script>

<style lang="scss">
    h1 {
        padding: 20px 0;
    }

    .table .thead-light th {
        color: #fff;
        background-color: #2350af;
        border-color: #2350af;
    }
    .button{
        margin: 10px auto 10px auto;
        padding: 5px 10px;
        border: 0;
        font-size: 22px;
        background: #2350af;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover{
            background: darken(#2350af, 20%);
        }
    }

</style>