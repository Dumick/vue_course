<template>
   <header>
      <h1>My Shop</h1>
      <hr />
   </header>
   <main>
      <div class="container">
         <my-menu :links="links" />
         <router-view />
      </div>
   </main>
</template>

<script>
import myMenu from "@/components/myMenu.vue";
import { mapGetters } from "vuex";

export default {
   name: "App",
   components: {
      myMenu,
   },
   data() {
      return {
         links: [
            { name: "catalog", label: "Catalog" },
            { name: "cart", label: "Cart" },
            { name: "about", label: "About" },
         ],
      };
   },
   computed: {
      ...mapGetters('cart', ['getCnt'])
   }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

header {
   padding: 10px 20px;

   h1 {
      font-size: 28px;
   }
}
</style>