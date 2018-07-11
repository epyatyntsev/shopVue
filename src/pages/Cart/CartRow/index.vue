<template>
    <tr>
        <th scope="row">{{index + 1}}</th>
        <td><img :src="'../src/assets/product-Images/' + item.image" alt=""></td>
        <td>{{item.title}}</td>
        <td>{{item.price}} $</td>
        <td><input @change="$store.commit('changeQty', {id: item.id, qty: item.qty})" type="number" v-model="item.qty">
        </td>
        <td>{{item.price * item.qty}} $</td>
        <td><button class="delete-item" @click="$store.commit('deleteById', item.id)"><i class="fa fa-close"></i></button></td>
    </tr>
</template>

<script>
    export default {
        name: "cartRow",
        props: {
            item: Object,
            index: Number
        },
    }
</script>

<style lang="scss">
    tr {
        img{
            width: 35px;
        }
        transition: 0.2s ease;
        .delete-item {
            cursor: pointer;
            font-size: 12px;
            border: 0;
            margin-top: 2px;
            color: #fff;
            width: 25px;
            height: 25px;
            position: absolute;
            border-radius: 50%;
            background: #ff7b7b;
            transition: 0.2s ease;
            outline: none;
            &:hover{
                background: darken(#ff7b7b, 20%);
            }
        }
        &:hover{
            background: rgba(255, 255, 255, 0.2);
        }
    }
</style>