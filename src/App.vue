<template>
	<header>
		<h1>My Shop</h1>
	</header>
   <main>
      <div class="menu">
         <my-menu :links="links" />
      </div>
      <div class="body">
         <router-view />
      </div>
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
h1 {
	padding: 10px;
	background-color: rgb(106, 135, 199);
}

main {
	display: flex;
}
</style>