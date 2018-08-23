<template>

<div style="height: 90px;">
  <nav class="row details" style="height: 90px;">
    <div class="col-12 col-lg-8 offset-lg-2">
      <ul class="nav justify-content-center toolbar">
        <li class="nav-item">
          <a class="nav-link" href="#testing" id="anchor">
            <i class="fa fa-eyedropper d-block text-center" aria-hidden="true"></i>
            Testing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sikkerhet">
            <i class="fa fa-exclamation-triangle d-block text-center" aria-hidden="true"></i>
            Sikkerhet
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#dosering">
            <i class="fa fa-balance-scale d-block text-center" aria-hidden="true"></i>
            Dosering
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#effekt">
            <i class="fa fa-stethoscope d-block text-center" aria-hidden="true"></i>
            Effekt
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#rad">
            <i class="fa fa-heart d-block text-center" aria-hidden="true"></i>
            Råd
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>

</template>

<script>

export default {
  mounted() {
    $('a[href^=\\#]').on('click', (e) => {
      e.preventDefault();
      const hash = e.currentTarget.hash;
      const target = $(hash);
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 90,
      }, 500, 'swing');
    });
    const stickyEl = $('.details');
    const elTop = stickyEl.offset().top;
    $(window).scroll(() => {
      $('.details').toggleClass('animated fadeInDown fixed', $(window).scrollTop() > elTop);
    });
  },
};

</script>

<style lang="sass" scoped>

.row.details
  margin-left: 0px
  margin-right: 0px

.fixed
  background-color: #fff
  border-top: 1px solid rgba(0, 0, 0, 0.04)
  position: fixed
  bottom: 0
  width: 100vw
  z-index: 100
  transition: 0.2
  padding-top: 35px
  margin-top: 0px !important
  -webkit-animation-name: fadeInUpBig
  animation-name: fadeInUpBig

.nav-link
  font-size: 0.7rem
  padding: 20px 15px 0px 15px
  text-align: center

.fa
  font-size: 1.7rem

@media (min-width: 576px)

    .nav-link
      font-size: 0.8rem
      padding: 20px 30px 0px 30px

    .fa
      font-size: 2rem

    .fixed
      top: 0
      border-bottom: 1px solid rgba(0, 0, 0, 0.04)
      -webkit-animation-name: fadeInDown
      animation-name: fadeInDown

.fa-heart
  color: #e92626

.fa-exclamation-triangle
  color: #f1d50c
  transition: 0.2s

.toolbar
  margin-top: -35px
  border-radius: 3px
  background: #fff

</style>
