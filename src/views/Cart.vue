<template>
   <div>
      <h2>Cart</h2>
      <table v-if="showTotal">
         <thead>
            <tr>
               <th>Title</th>
               <th>Count</th>
               <th>Price</th>
               <th>Sale</th>
               <th>Total</th>
               <th>Add</th>
               <th>Pop</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="product in cartDetails" :key="product.id">
               <td>
                  <router-link
                     :to="{ name: 'product', params: { id: product.id } }"
                     >{{ product.title }}
                  </router-link>
               </td>
               <td>{{ product.cnt }}</td>
               <td>{{ product.price }}</td>
               <td>{{ product.discountPercentage }}</td>
               <td>{{ product.total }}</td>
               <td>
                  <button
                     @click="
                        productInCart({ id: product.id, cnt: ++product.cnt })
                     "
                     class="add"
                  >
                     Add
                  </button>
               </td>
               <td>
                  <button
                     @click="
                        productInCart({ id: product.id, cnt: --product.cnt })
                     "
                     class="pop"
                  >
                     Pop
                  </button>
               </td>
            </tr>
            <tr>
               <td colspan="4">Total:</td>
               <td>
                  <b>{{ totalPrice }}</b>
               </td>
            </tr>
         </tbody>
      </table>
      <div v-else>
         <h3>Cart is empty</h3>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
   name: "about",
   computed: {
      ...mapGetters("cart", ["cartDetails", "totalPrice"]),
      showTotal() {
         return this.cartDetails.length > 0;
      },
   },
   methods: {
      ...mapActions("cart", ["productInCart"]),
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

table {
   border-collapse: collapse;

   td,
   th {
      text-align: center;
      padding: 4px 12px;
      border: 1px solid #000;
   }

   td:nth-child(1) {
      text-align: left;
      width: 300px;
   }

   td:nth-child(6),
   td:nth-child(7) {
      padding: 0;
   }

   button {
      cursor: pointer;
      width: 100%;
      border: none;
      padding: 6px 0;

      &:disabled {
         cursor: default;
      }
   }

   .add {
      background-color: #bce7b1;
   }

   .pop {
      background-color: #e7c5b1;
   }
}
</style>