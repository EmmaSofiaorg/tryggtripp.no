<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { initCart } from "@/services/shopify";

export default {
  name: "app",
  store: ["cart"],
  mounted() {
    initCart().then(newCart => {
      this.cart = newCart;
    });
  }
};
</script>

<style lang="sass">
@import './css/variables.scss'
@import './css/typo.css'

.logo
  font-family: $font-primary
  cursor: pointer

body
  font-family: $font-secondary

h1,
h2
  font-weight: 900

h5
  line-height: 32px

h1,
h2,
h3,
h4,
h5,
h6,
  font-family: $font-primary

.text-inverted
  color: #fff

p
  font-family: $font-secondary

button
  font-family: $font-secondary

a
  color: #000
  opacity: 0.7
  font-family: $font-primary

a:hover
  color: #000
  opacity: 1

a:focus
  color: #000

input
  padding: 20px 30px
  font-family: $font-primary
  background: #f9f5f5
  border: 0
  outline: none

.btn
  padding: 20px 30px
  border: 0
  outline: none
  border-radius: 0px
  cursor: pointer

.btn.btn-sm
  padding: 15px 20px

.btn:focus
  outline: none
  -webkit-box-shadow: none
  box-shadow: none

.btn-primary
  border: 5px solid #4f4f4f
  background: none
  color: #000

.btn-primary:hover
  background: #000
  color: #fff
  border-color: #000

.btn-primary:focus
  outline: none
  -webkit-box-shadow: none
  box-shadow: none

.faded
  background: rgba(0, 0, 0, 0.35)
  transition: background-color 3s
  height: 100%

.SquaredBox
  width: 100%
  height: 150px
  line-height: 150px
  margin-bottom: 15px
  // border: 5px solid #717171
  margin-top: 2px

.SquaredBox:hover
  // border: 5px solid #000
  margin-top: -2px
  transition: $transition
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.3)

</style>
