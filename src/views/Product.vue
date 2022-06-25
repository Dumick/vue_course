<template>
   <div>
      <div v-if="hasProduct" class="product">
         <h2>{{ product.title }}</h2>

         <figure>
            <div class="image"></div>
         </figure>

         <div class="price">
            <div class="container">
               <p>Price:</p>
               <div v-if="product.sale" class="container sale">
                  <p class="old"> <s>{{ product.price }} $</s> </p>
                  <p class="new">{{ product.sale }} $</p>
               </div>

               <div v-else>
                  <p>{{ product.price }} $</p>
               </div>
            </div>

            <div class="buttons">
               <button v-if="!hasCart" @click="add(id)" class="add-in-cart">Add</button>
               <button v-else @click="remove(id)" class="remove-in-cart">Remove</button>
            </div>
         </div>

         <p class="description">{{ product.description }}</p>

         <div class="cart" v-if="hasCart">
            <p>
               <router-link :to="{ name: 'cart' }"> In Cart </router-link> {{ getCnt }}
            </p>
            <div class="buttons">
               <button @click="productInCart({ id: product.id, cnt: ++product.cnt })" class="add"> + </button>
               <button @click="productInCart({ id: product.id, cnt: --product.cnt })" class="pop"> - </button>
            </div>

         </div>
      </div>

      <e-404 v-else :title="errorMsg" />
   </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import e404 from "@/views/404.vue";

export default {
   name: "product",
   components: {
      e404,
   },
   computed: {
      ...mapGetters("products", { productById: "one" }),
      ...mapGetters("cart", ["inCart", "one"]),
      id() {
         return parseInt(this.$route.params.id);
      },
      getCnt() {
         return this.one(this.id).cnt;
      },
      errorMsg() {
         return "Product with id = " + this.id + " not found!";
      },
      validId() {
         return /^[1-9]+\d*$/.test(this.id);
      },
      product() {
         let product = this.productById(this.id);
         let cnt = this.one(this.id)?.cnt;
         return { ...product, cnt };
      },
      hasProduct() {
         return this.validId && this.product !== undefined;
      },
      hasCart() {
         return this.inCart(this.id);
      },
   },
   methods: {
      ...mapActions("cart", ["productInCart", "add", "remove"]),
   },
};
</script>

<style lang='scss' scoped>
@import "@/assets/style.scss";

.image {
   width: 500px;
   height: 500px;
   border-radius: 6px;
   background-color: #e8e8e8;
}

.description {
   padding: 10px 20px;
   margin-top: 10px;
   border-radius: 4px;
   border: 1px solid #000;
}

.price,
.cart {
   width: 500px;
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 10px 20px;
   margin-top: 10px;
   border-radius: 4px;
   border: 1px solid #000;

   .sale {
      align-items: center;
      margin-left: 10px;

      .old {
         font-size: 14px;
      }

      .new {
         font-size: 16px;
         margin-left: 10px;
      }
   }


   .buttons {

      button {
         cursor: pointer;
         border: unset;
         padding: 6px 12px;
         border-radius: 4px;
      }

      .add-in-cart {
         background-color: #a9dfa2;
      }

      .remove-in-cart {
         background-color: #dfa6a2;
      }

      .add {
         background-color: #a9dfa2;
      }

      .pop {
         margin-left: 10px;
         background-color: #dfa6a2;
      }
   }

}
</style>