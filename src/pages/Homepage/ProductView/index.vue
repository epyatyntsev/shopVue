<template>
    <div class="col-lg-3 col-sm-6 single-product">
        <div class="inner">
            <img :src="'../src/assets/product-Images/' + productInfo.image" alt="">
            <h2 class="product-title">{{productInfo.title}}</h2>
            <p class="product-price">Price: <b>{{productInfo.price}}</b> $</p>
            <button class="button add-to-cart" @click="addToCart()">Add to Cart</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ProductView',
        props: {
            productInfo: Object,
        },
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.productInfo)
            }
        },
    }
</script>

<style lang="scss">
    .single-product{
        margin-bottom: 30px;
        .inner{
            text-align: center;
            color: #777;
            border-radius: 3px;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 2px 20px 3px rgba(0, 0, 0, 0.3);
            transition: all 0.2s ease;
            img{
                width: 100%;

            }
            .product-title{
                margin: 0;
                font-size: 18px;
                text-align: center;
                padding: 7px 0 3px 0;
            }
            .product-price{
                margin: 0;
                font-size: 14px;
                text-align: center;
            }
            .add-to-cart{
                margin: 10px auto 10px auto;
                padding: 5px 10px;
                border: 0;
            }
            &:hover{
                box-shadow: 0 2px 20px 10px rgba(0, 0, 0, 0.3);
            }
        }
    }
</style>