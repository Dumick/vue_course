<template>
   <div class="catalog">
      <h2>Catalog</h2>
      <section>
         <my-card
            class="product"
            v-for="product in productList"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :brand="product.brand"
            :price="product.price"
            :sale="product.discountPercentage"
            :description="product.description"
         />
      </section>
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
   padding: 0 10px;
}

section {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}

</style>