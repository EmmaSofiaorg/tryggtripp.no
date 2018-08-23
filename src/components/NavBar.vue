<template>
  <div style="height: 57px; max-width: 1600px; margin: 0 auto; display: block;">
  <nav class="navbar animated" style="height: 57px">
    <div class="row">
      <div class="col-6">
        <ul class="nav justify-content-start">
          <li class="nav-item">
            <router-link class="logo text-left nav-link" tag="span" to="/">Tryggtripp.no</router-link>
          </li>
        </ul>
  </div>
  <div class="col-6">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" tag="a" to="/guide/mdma">MDMA</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" tag="a" to="/guide/lsd">LSD</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" tag="a" to="/guide/psilosybin">Psilocybin</router-link>
      </li>
    </ul>
  </div>
  </div>
  </nav>
</div>

</template>

<script>

export default {
  mounted() {
    /* $(window).scroll(() => {
      const st = $(window).scrollTop();
      if (st < 1) {
        $('.navbar').removeClass('fixed fadeInDownBig');
      } if (st > 1600) {
        $('.navbar').addClass('fixed fadeInDownBig');
      }
    }); */
  },
};

</script>

<style lang="sass" scoped>

  .navbar
    border-bottom: 1px solid #e3e3e3
    background: #fff
    z-index: 999

  .navbar.fixed
    position: fixed
    top: 0
    width: 100%

  @media (min-width: 576px)
    .navbar.fixed
      position: absolute !important

  a.nav-link
    height: 48px
    padding-right: 10px
    padding-left: 0px

    @media (min-width: 576px)
      padding-right: 18px
      padding-left: 18px


  a.nav-link.router-link-active
    font-weight: 900
    color: #000
    opacity: 1

  a.nav-link.router-link-active
    position: relative
    background: #ffffff

  a.nav-link.router-link-active:after, a.nav-link.router-link-active:before
    top: 100%
    left: 50%
    border: solid transparent
    content: " "
    height: 0
    width: 0
    position: absolute
    pointer-events: none

  a.nav-link.router-link-active:after
    border-color: rgba(136, 183, 213, 0)
    border-top-color: #fff
    border-width: 13px
    margin-left: -13px

  a.nav-link.router-link-active:before
    border-color: rgba(194, 225, 245, 0)
    border-top-color: #e3e3e3
    border-width: 14px
    margin-left: -14px



</style>
