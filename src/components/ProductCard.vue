<template lang="html">

  <div class="card">
    <div class="card-img" :style="`background-image: url(${img})`" />
    <div class="card-body">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text">{{desc}}</p>
      <button class="btn btn-sm btn-primary" @click="addToCart(variant, 1)">Kjøp testkit</button>
    </div>
  </div>

</template>

<script>
export default {
  store: ['cart', 'cartOpen'],
  props: {
    title: String,
    desc: String,
    img: String,
    variant: Object,
  },
  methods: {
    addToCart(variant, quantity) {
      if (!this.cart.lineItemCount) { this.cartOpen = true; }
      this.cart.createLineItemsFromVariants({ variant, quantity });
      this.showCart = true;
    },
  },
};
</script>

<style lang="css">

.card {
  text-align: center;
  padding: 10px;
}

.card-img {
  height: 150px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media(min-width: 800px) {
    height: 200px
  }
}

</style>
