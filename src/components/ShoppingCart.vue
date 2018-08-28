<template lang="html">

<div class="shopping-cart" v-if="cart" :class="{open: cartOpen}">
  <div class="shopping-cart__close" @click="cartOpen = false">
    Lukk
  </div>
  <h2 class="text-center">Testkits ({{cart.lineItemCount}})</h2>

  <div class="shopping-cart__items">
    <div class="shopping-cart__item" :key="item.id" v-for="item in cart.lineItems">
      <div class="shopping-cart__item-img" :style="`background-image: url(${item.image.src})`" />
      <div class="shopping-cart__item-text">
        <h4>{{item.title}}</h4>
        Antall: {{item.quantity}}<br>
        Pris: {{item.price}}
      </div>
      <div class="shopping-cart__item-delete" @click="deleteItem(item.id)">
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  </div>

  <div class="text-center mt-5">
    <a :href="cart.checkoutUrl" class="btn btn-success">Kjøp {{cart.subtotal}} kr</a>
  </div>
</div>

</template>

<script>
export default {
  store: ["cart", "cartOpen"],
  methods: {
    deleteItem(itemId) {
      this.cart.removeLineItem(itemId);
    }
  }
};
</script>

<style lang="scss">
.shopping-cart {
  width: 90vw;
  opacity: 0;
  transition: all 0.5s ease;
  visibility: hidden;
  transform: translateX(100px);
  background: #fff;
  border: 1px solid #eee;
  position: fixed;
  border-radius: 4px 0 0 4px;
  padding: 30px;
  top: 20px;
  right: 0;
  z-index: 999;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.05);

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0px);
  }

  @media (min-width: 800px) {
    width: 30vw;
    top: 100px;
  }
}

.shopping-cart__items {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 50vh;
}

.shopping-cart__item {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}

.shopping-cart__item-text {
  margin-right: 10px;
  margin-left: 10px;
}

.shopping-cart__item-delete {
  margin-left: auto;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
}

.shopping-cart__item-img {
  width: 60px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.shopping-cart__close {
  cursor: pointer;
}

.shopping-cart.hidden {
  display: none;
}
</style>
