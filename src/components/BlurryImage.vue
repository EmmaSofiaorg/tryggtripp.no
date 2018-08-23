<template>
  <div class="image-holder">
    <div class="two">
    <div class="bottom image" :name="bigSrc"></div>
    <div :style="{ backgroundImage: 'url(' + smallSrc + ')' }" class="top image"></div>
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

  .image
    position: absolute
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
    props: [
      'bigSrc',
      'smallSrc'
    ],
    mounted() {

      var vm = this;

      $('<img/>').attr('src', vm.bigSrc).on('load', function() {
         $(this).remove(); // prevent memory leaks
         $('.bottom[name="'+ vm.bigSrc +'"]').css('background-image', 'url("'+vm.bigSrc+'")');
         $('.top').toggleClass("transparent");
      });
    },
  };

</script>
