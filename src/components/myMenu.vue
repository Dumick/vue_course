<template>
   <nav>
      <router-link v-for="(ln, i) in links" :key="i" :to="{ name: ln.name }">{{
         ln.label
      }}</router-link>
   </nav>
</template>

<script>
export default {
   name: "myMenu",
   props: {
      links: { type: Array, requared: true },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
nav {
   padding: 0 20px;
   min-width: 200px;
   display: flex;
   flex-direction: column;
   a {
      cursor: pointer;
      padding: 6px 12px;
      border-radius: 3px;
      background-color: #e1e1e1;
      transition: 0.3s;
      color: #000;
      text-decoration: none;

      &:hover {
         background-color: #d8d8d8;
      }
      &.router-link-active {
         background-color: #c3d4ec;
      }
   }
   a + a {
      margin-top: 10px;
   }
}
</style>