<template>
  <div>
    <section class="intro">
      <blurry-image bigSrc="..//patterns/mdma.jpg"
                    smallSrc="..//patterns/mdma-lowres.jpg" />
      <div class="faded">
        <div class="container">
          <div class="row align-items-center"
               style="min-height: 30vh;">
            <div class="col-12 text-inverted text-center">
              <h1 class="animated fadeInUp">MDMA</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <details-nav />
      <div class="container mb-5">
        <div class="row mt-3">
          <div class="col-md-4">
            <img class="drug-img"
                 src="" />
          </div>
          <div class="col-12 col-lg-8 offset-lg-2">
            <h2>Introduksjon</h2>
            <h5>
              <p>
                MDMA, også kalt emma eller ecstasy, er et syntetisk fremstilt psykoaktiva, av kategorien empatogen ('øker empati') eller entactogen ('indre berøring').
              </p>
            </h5>
            <hr>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-lg-8 offset-lg-2">
            <h2 class="mb-5">Forberedelser</h2>
            <h3 id="testing">1. Test om du har ren MDMA</h3>
            <p>
              MDMA selges noen ganger blandet med andre rusmidler:
            </p>
            <ul>
              <li>
                <b>Amfetamin: </b>Har høyere risiko enn MDMA, blant annet økt risiko for avhengighet. I ecstacypiller er ofte MDMA blandet med amfetamin. </li>
              <li>
                <b>Ketamin:</b> Er et bedøvende middel og rusen minner ikke om MDMA. I store doser vil ketamin føre til bortfall av reflekser og respirasjon </li>
              <li>
                <b>MDA:</b> Har høyere risiko for neurotoksitet.</li>
              <li>
                <b>PMA OG PMMA:</b> Har vesentlig høyere risiko for overdose og død. Det som tilsvarer en vanlig brukerdose av MDMA, kan være en dødelig dose av PMMA eller PMA. PMA i kombinasjon med MDMA kan føre til serotoninsyndrom.
              </li>
            </ul>

            <div class="row mt-5">
              <div class="col-6 col-sm-4 mb-4"
                   :key="testkit.id"
                   v-for="testkit in testkits">
                <product-card :title="testkit.title"
                              :img="testkit.images[0].src"
                              :variant="testkit.variants[0]" />
              </div>
            </div>

            <p/>
            <small>Har du kjøpt MDMA i pilleform bør du også sjekke:
              <a href="https://www.ecstasydata.org/"
                 target="_blank">ecstasydata.org</a>
            </small>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-lg-8 offset-lg-2">
            <h3 id="sikkerhet">2. Ikke ta MDMA hvis du:</h3>
            <ul>
              <li>
                Har tatt MAOI de siste 2 ukene (kan gi serotoninsyndrom, som kan ha dødelig utfall)
              </li>
              <li>
                Er påvirket av amfetamin eller andre stimulanter. Dette kan gi uønsket eller farlig overstimulering
              </li>
              <li>
                Går på Ritonivar (HIV-medisin)
              </li>
              <li>
                Nylig har tatt DXM (finnes i noen hostemedisiner)
              </li>
              <li>
                Nylig har tatt kodein (finnes i enkelte smertestillende)
              </li>
              <li>
                Er påvirket av alkohol eller andre rus- og legemidler. Kombinasjon med for eksempel cannabis kan bidra til økt følelse av forvirring, angst og paranoia
              </li>
              <li>
                Går på antidepressiva eller andre SSRI (kan gi uheldige bivirkninger, og vil redusere effekten betydelig)
              </li>
              <li>
                Er gravid
              </li>
              <li>
                Har epilepsi
              </li>
              <li>
                Har hjerteproblemer. Konsulter med lege først
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-lg-8 offset-lg-2">
            <h3 id="dosering">3. Dosering</h3>
            <p>Kalkulatoren tar utgangspunkt i vekten du oppgir og dosering i sjiktet lave til moderate doser. Husk at risiko øker ved høyere doser.</p>
            <mdma-calculator />
            <small>
              Kalkulatoren og doseringsinformasjonen den gir er ikke en anbefaling eller oppfordring til bruk. Ulike personer kan reagere svært forskjellig på den samme doseringen. Det som er trygt for en person, kan være skadelig for en annen.</small>
            <hr>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-lg-8 offset-lg-2">
            <h2 class="mb-5">Under rusen</h2>
            <h3 id="effekt"
                class="mb-4">4. Effekter</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-8 offset-lg-2">
            <p>
              <b>Godt humør og økt følelse av empati og velvære</b><br> Økt utskillelse av serotonin og oxytocin bidrar til at man ofte blir glad, kjærlig og føler seg bra.</p>

            <p>
              <b>Økt energi</b><br> Pulsen, blodtrykket og kroppstemperaturen øker.</p>

            <p>
              <b>Lettere å kommunisere</b><br> Det kan oppleves lettere å snakke ut om personlige problemer, og å åpne seg for andre og uttrykke hva man føler. </p>

            <p>
              <b>Økte sanseinntrykk</b><br> Gjelder både syns-, lukte-, smaks-, høre- og følesansen.</p>

            <p>
              <b>Økt nærhetskapasitet</b><br> Fører ofte til dype personlige og mellommenneskelige opplevelser. En negativ effekt av dette er at man kan være for tillitsfull overfor fremmede.</p>

            <p>
              <b>Spirituelle opplevelser</b>
            </p>

            <p>
              <b>Hakking eller gnissing av tenner</b>
            </p>

            <p>
              <b>Uskarpt syn, vaglende øyne</b>
            </p>

            <p>
              <b>Angst og forvirring</b><br> Risiko for angst og forvirring øker ved kombinasjon med andre rus- eller legemidler.</p>

            <p>
              <b>Død</b><br> Død er et ekstrem sjeldent ved bruk av MDMA. Risikoen for død øker ved overdoser eller ved kombinasjon med andre rus- eller legemidler. </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-lg-8 offset-lg-2">
            <h3 id="rad"
                class="mb-4">5. Råd og tips</h3>
            <ul>
              <li>
                Drikk moderat med vann. Unngå kaffe og alkohol.
              </li>
              <li>
                Unngå overoppheting. Kle deg lagvis, slik at klær lett kan tas av. Ta pauser fra fysisk aktivitet som for eksempel dansing.
              </li>
              <li>
                Sjekk med jevne mellomrom at det går bra med deg selv og andre mennesker rundt deg.
              </li>
              <li>
                Bruk sukkerfri tyggegummi for å unngå skader fra gnissing eller hakking av tenner.
              </li>
              <li>
                Ta MDMA på et rolig, kjent sted, med personer du stoler på.
              </li>
              <li>
                Ikke nøl med å ta kontakt med legevakt eller nødsentralen dersom du mistenker fare for liv og helse.
              </li>
            </ul>
            <hr>
            <p align="center">
              <a href="http://www.emcdda.europa.eu/publications/drug-profiles/mdma">The European Monitoring Centre for Drugs and Drug Addiction (EMCDDA)</a>
              <br>
              <a href="http://www.rusopplysningen.no/">Rusopplysningen</a>
              <br>
              <a href="https://erowid.org/chemicals/mdma/mdma_dose.shtml">Erowid</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DetailsNav from "@/components/DetailsNav";
import MdmaCalculator from "@/components/MdmaCalculator";
import BlurryImage from "@/components/BlurryImage";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/services/shopify";

export default {
  components: { DetailsNav, MdmaCalculator, BlurryImage, ProductCard },
  mounted() {
    getAllProducts().then(res => {
      const mdmaTestkits = res.filter(p => p.attrs.tags.includes("MDMA"));
      this.testkits = mdmaTestkits;
      console.log(mdmaTestkits);
    });
  },
  data() {
    return {
      testkits: []
    };
  },
  head: {
    title: {
      inner: "MDMA"
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
