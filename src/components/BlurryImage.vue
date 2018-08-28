<template>
  <div class="image-holder">
    <div class="two">
      <img ref="bigImg"
           class="bottom image"
           :src="bigSrc"
           @load="loaded" />
      <div class="bottom image"
           :style="{ backgroundImage: 'url(' + bigSrc + ')' }" />
      <div ref="smallImg"
           :style="{ backgroundImage: 'url(' + smallSrc + ')' }"
           class="top image"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

  .image-holder
    position: absolute
    width: 100%
    height: inherit
    overflow: hidden
    z-index: -1

  .two
    position: relative
    height: inherit

  .top
    background-size: 600px
    filter: blur(30%)

  .top.--blur
      opacity: 0

  .image
    position: absolute
    background-size: cover
    object-fit: cover
    background-position: center
    background-repeat: repeat
    width: 100%
    left: 0
    height: inherit
    -webkit-transition: opacity 1s ease-in-out
    -moz-transition: opacity 1s ease-in-out
    -o-transition: opacity 1s ease-in-out
    transition: opacity 1s ease-in-out

  .image.transparent
    opacity: 0

</style>

<script>
/* eslint-disable */

export default {
  props: ['bigSrc', 'smallSrc'],
  methods: {
    loaded() {
      this.$refs.smallImg.classList.add('--blur')
    }
  }
};
</script>
