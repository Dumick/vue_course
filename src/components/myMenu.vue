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

nav {
   margin: 10px;
   padding: 10px 20px;
   border: 1px solid #000;
   
   li {
      text-align: center;
      
      a {
         display: block;
         padding: 5px;
         color: #000;
         transition: .2s;
         text-decoration: none;
         border-bottom: 1px solid #000;

         &:hover {
            font-weight: bold;
         }
      }
   }
}
</style>