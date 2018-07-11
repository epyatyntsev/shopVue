<template>
    <div class="container">
        <h1 class="text-center">Products</h1>
        <div class="row" id="products-list">
            <ProductView v-for="product in products" :key="product.id" :productInfo="product"></ProductView>
        </div>
    </div>
</template>

<script>
    import {products} from "../../dummy";
    import ProductView from './ProductView'
    export default {
        name: "Homepage",
        components: {
            'ProductView': ProductView,
        },
        data() {
            return {
                products: products
            }
        },
    }
</script>

<style scoped>
    h1 {
        padding: 20px 0;
    }
</style>