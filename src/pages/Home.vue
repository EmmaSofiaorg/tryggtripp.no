<template>
  <div class="container animated fadeIn">
    <div class="row align-items-center" style="min-height: 100vh">
      <div class="col-12 text-center inverted">
        <img src="/img/logo.svg" height="50" class="mb-5 mt-5" />

        <h1 class="mb-5 description">
          En skadereduserende veileder for MDMA og psykedelika
        </h1>
        <h4 class="mb-4">Velg et rusmiddel:</h4>
        <div class="row">
          <div class="col-12 col-sm-4">
            <router-link to="/guide/mdma">
              <div class="SquaredBox">
                <blurry-image
                  bigSrc="/patterns/mdma.jpg"
                  smallSrc="/patterns/mdma-lowres.jpg"
                />
                <div class="faded">
                  MDMA
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-sm-4">
            <router-link to="/guide/lsd">
              <div class="SquaredBox">
                <blurry-image
                  bigSrc="/patterns/lsd.jpg"
                  smallSrc="/patterns/lsd-lowres.jpg"
                />
                <div class="faded">
                  LSD
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-12 col-sm-4">
            <router-link to="/guide/psilosybin">
              <div class="SquaredBox sopp">
                <blurry-image
                  bigSrc="/patterns/sopp.png"
                  smallSrc="/patterns/sopp-lowres.png"
                />
                <div class="faded">
                  Psilocybin
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlurryImage from "@/components/BlurryImage";

export default {
  components: { BlurryImage },
  head: {
    meta: [
      { property: "og:title", content: "Tryggtripp.no" },
      {
        property: "og:description",
        content: "En skadereduserende veileder for MDMA og psykedelika"
      },
      {
        property: "og:image",
        content: "https://tryggtripp.no//meta/facebook.png"
      }
    ]
  }
};
</script>

<style lang="sass" scoped>

@media (max-width: 576px)
    h1.description
      font-size: 1.7rem

.SquaredBox
  font-size: 1.7rem
  font-weight: 900
  border-radius: 5px
  position: relative
  color: #fff

a:hover
  text-decoration: none !important

.SquaredBox .faded
  border-radius: 5px

.SquaredBox .faded:hover
  background: rgba(0, 0, 0, 0.2)
  transition: 0.2s
</style>
