<template>

  <div class="animated fadeIn mb-5 pb-5">
    <nav-bar />
    <router-view></router-view>
    <shopping-cart-button />
    <shopping-cart />
  </div>

</template>

<script>
import NavBar from "@/components/NavBar";
import ShoppingCart from "@/components/ShoppingCart";
import ShoppingCartButton from "@/components/ShoppingCartButton";

export default {
  components: { NavBar, ShoppingCart, ShoppingCartButton },
  store: ["cart"]
};
</script>

<style lang="sass">

  .intro
    background-position: fixed
    background-attachment: fixed
    height: 30vh

</style>
