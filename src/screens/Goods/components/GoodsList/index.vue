<template>
   <ul class="goods__list">
        <GoodsItem v-for="(item, index) of items" :key="index"  :item="item" />
    </ul>
    <h1>{{number}}</h1>
    <button @click="addNumber">Add Number</button>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import GoodsItem from '../GoodsItem';
    export default {
        components: {
            GoodsItem
        },

       setup() {
           const store = useStore();

           onMounted(() => {
               store.dispatch('getList');
           })

           const items = computed(() => store.state.goodsStore.items);
           
           const number = computed(() => store.state.goodsStore.number);

           function addNumber() {
               store.commit("addNumber", 3)
           }

           return {
               items,
               number,
               addNumber
           }
       }
    }
</script>

<style lang="scss" scoped>
@import 'styles.module.scss';
</style>