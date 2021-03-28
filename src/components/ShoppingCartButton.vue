<template lang="html">
  <div
    class="shopping-cart-button"
    v-if="cart && !cartOpen"
    @click="cartOpen = true"
  >
    <b class="shopping-cart-text">Testkits ({{ cart.lineItemCount }})</b>
    <i class="fa fa-shopping-cart text-center ml-2 mr-2" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  store: ["cartOpen", "cart"]
};
</script>

<style lang="scss">
.shopping-cart-button {
  display: none;
  position: fixed;
  top: 15vh;
  right: 0px;
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 1300px) {
    top: 20vh;
    right: 200px;
  }
}

.shopping-cart-text {
  display: none;

  @media (min-width: 800px) {
    display: inline-block;
  }
}
</style>
