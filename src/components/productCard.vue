<template>
   <div class="card">
      <p class="card-brand">{{ brand }}</p>
      <span class="card-image"></span>
      <router-link
         class="card-title"
         :to="{ name: 'product', params: { id: id } }"
         >{{ title }}
      </router-link>
      <p class="card-description">{{ spliceDesc }}</p>

      <div class="price">
         <p v-if="!salePercent" class="card-price">Price: {{ price }} $</p>
         <div v-else class="card-price_sale">
            <p class="card-price">Price:</p>
            <div>
               <p class="old-price">
                  <s>{{ price }}<em>$</em></s>
               </p>
               <p class="new-price">
                  <b>{{ salePrice }}<em>$</em></b>
               </p>
            </div>
         </div>
         <button v-if="!inCart(id)" class="card-btn card-add" @click="add(id)">
            Add
         </button>
         <button v-else class="card-btn card-pop" @click="remove(id)">
            Remove
         </button>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
   name: "product-card",
   props: {
      salePrice: { type: Number },
      salePercent: { type: Number },
      id: { type: Number, requared: true },
      title: { type: String, requared: true },
      brand: { type: String, requared: true },
      price: { type: Number, requared: true },
      description: { type: String, requared: true },
   },
   computed: {
      ...mapGetters("cart", ["inCart"]),
      spliceDesc() {
         let strungToAray = this.description.split(" ").slice(0, 4);
         strungToAray = strungToAray.reduce((str, current) => {
            return str + " " + current;
         }, "");
         return strungToAray + "...";
      },
   },
   methods: {
      ...mapActions("cart", ["add", "remove"]),
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.card {
   width: 240px;
   padding: 4px 20px;
   border-radius: 4px;
   margin-top: 10px;
   border: 1px solid #000;
   overflow: hidden;

   &-title {
      color: #000;
      margin-top: 5px;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
   }

   &-brand {
      font-size: 12px;
      color: #888;
   }

   &-description {
      font-size: 14px;
   }

   &-image {
      display: block;
      width: 100%;
      height: 100px;
      border-radius: 4px;
      background-color: #eee;
   }

   &-price {
      display: flex;
      align-items: center;
      margin-right: 5px;

      &_sale > div {
         display: flex;
         align-items: center;
      }
   }

   .old-price {
      margin-right: 5px;
   }

   .new-price {
      font-size: 15px;
   }

   &-btn {
      width: 60px;
      height: 30px;
      cursor: pointer;
      border: unset;
      font-size: 14px;
      border-radius: 3px;
   }

   &-add {
      background-color: #c3e7bc;

      &:hover {
         background-color: #a9e49d;
      }
   }

   &-pop {
      background-color: #e7c8bc;
      &:hover {
         background-color: #e9b19c;
      }
   }

   div {
      display: flex;
   }

   .price {
      font-size: 14px;
      align-items: center;
      justify-content: space-between;
   }
}
</style>