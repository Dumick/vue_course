<template>
   <nav>
      <ul>
         <li v-for="(ln, i) in links" :key="i">
            <router-link :to="{ name: ln.name }">{{ ln.label }}</router-link>
         </li>
      </ul>
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

ul {
   display: flex;
   padding: 4px 0;
   border-radius: 3px;
   background-color: #fff;

   li {
      cursor: pointer;

      a {
         padding: 4px 10px;
         color: #000;
         text-decoration: none;
         border-radius: 3px;
         transition: .2s;

         &.router-link-active {
            background-color: #f0f0f0;
         }

         &:hover {
            background-color: #f0f0f0;
         }
      }
   }
}
</style>