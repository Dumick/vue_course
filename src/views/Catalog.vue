<template>
   <div>
      <h2>Catalog</h2>
      <div class="catalog">
         <my-card
            v-for="product in productList"
            :key="product.id"
            :title="product.title"
            :brand="product.brand"
            :price="product.price"
            :sale="product.discountPercentage"
            :image="product.thumbnail"
         />
      </div>
   </div>
</template>

<script>
import myCard from "@/components/productCard.vue";
import { mapGetters } from "vuex";

export default {
   name: "HomeView",
   components: { myCard },
   computed: {
      ...mapGetters("products", { productList: "all" }),
   },
};
</script>

<style scoped>
@import "@/assets/style.scss";

.catalog {
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: space-evenly;
}
</style>