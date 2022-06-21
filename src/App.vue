<template>
   <header>
      <h1>My Shop</h1>
      <my-menu :links="links" />
   </header>
   <main>
      <router-view />
   </main>
</template>

<script>
import myMenu from "@/components/myMenu.vue";

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
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

header {
   display: flex;
   align-items: center;
   background-color: #96b1eb;
}

h1 {
   font-size: 24px;
   padding: 10px;
}

main {
   padding: 20px;
}
</style>