<template>
<div>
  <section class="intro">
    <blurry-image bigSrc="../static/patterns/sopp.png" smallSrc="../static/patterns/sopp-lowres.png" />
    <div class="faded">
      <div class="container">
        <div class="row align-items-center" style="min-height: 30vh;">
          <div class="col-12 text-inverted text-center">
            <h1 class="animated fadeInUp">Psilocybin</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <details-nav />
  <div class="container mb-5">
    <section>
      <div class="row mt-3">
        <div class="col-12 col-lg-8 offset-lg-2">
          <h2>Introduksjon</h2>
          <h5>
            <p>
              Psilocybin er et psykedelisk tryptamin og finnes naturlig i spiss fleinsopp og andre varianter
              typer av psilocybesopper og -trøfler. Psilocybin er ikke avhengighetsskapende og kun giftig i svært høye doser.
            </p>
          </h5>
          <hr>
        </div>
      </div>
    </section>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h2 class="mb-5">Forberedelser</h2>
          <h3 id="testing">1. Test om soppen faktisk inneholder psilocybin</h3>
          <p>
            Vill sopp inneholder ikke nødvendigvis psilocybin og kan være giftig.</p>
          <p>
            De forskjellige variantene av sopp har store forskjeller
            i mengde virkestoff, og inneholder ofte også psilocin og baeocystin.
            Det betyr at rusen fra for eksempel spiss fleinsopp kan oppleves annerledes
            enn rusen fra psiloscybe cubensis.
          </p>

          <div class="row mt-5">
            <div class="col-sm-4 mb-4" v-for="testkit in testkits">
              <product-card
                :title="testkit.title"
                :img="testkit.images[0].src"
                :variant="testkit.variants[0]"
              />
            </div>
          </div>

          <p/>
          <small>
            Sopp er noen ganger blandet med sjokolade eller annen mat.
            Det er viktig å være klar over at disse produktene også kan inneholde andre stoffer,
            og at det er ikke mulig å sjekke med testutstyr.
          </small>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h3 id="sikkerhet">2. Sikkerhet og forhåndsregler:</h3>
          <p>
            Effekten av psilocybin kan variere kraftig avhengig av flere faktorer.
            Selv om du har brukt testutstyr og er trygg på at det er psilocybin, er det viktig
            å ta noen forhåndsregler for å tilrettelegge for en best mulig opplevelse:
          </p>
          <ul>
            <li>
              Vær sikker på at du har satt av nok tid til opplevelsen.
              Husk at rusen psilocybin gir kan være opp til 6-8 timer.
            </li>
            <li>
              Vær på et rolig, kjent sted, med personer du stoler på.
            </li>
            <li>
              Ikke bland med alkohol eller andre rus- og legemidler.
              Kombinasjon med for eksempel cannabis kan bidra til økt følelse av forvirring, angst og paranoia.
            </li>
            <li>
              Bruk av antidepressiva og andre SSRI vil redusere effektene.
            </li>
            <li>
              Ikke ta psilocybin hvis du føler dårlig fysisk eller psykisk.
            </li>
            <li>
              Ta en lav dose første gang du skal ta psilocybin.
              På denne måten får du en introduksjon til hvordan det kan oppleves.
            </li>
            <li>
              Ha en helt edru venn i nærheten som kan forsikre
              deg om at det går bra, og hjelpe deg ved å endre miljøet rundt deg dersom du blir urolig eller forvirret.
            </li>
            <li>
              Ikke kjør bil eller andre transportmidler under påvirkning.
            </li>
          </ul>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h3 id="dosering">3. Dosering</h3>
          <p>
            Fersk sopp veier omtrent ti ganger mer enn tørket sopp, og mengden av virkestoff kan variere fra sopp til sopp.
            Vær forsiktig og sjekk spesifikk dosering for de forskjellige soppvariantene.
          </p>
          <p>
            Kalkulatoren tar utgangspunkt i vekten du oppgir og dosering av <b>tørket psilocybe cubensis</b>
            i sjiktet normale til moderate doser.  Husk at risiko øker ved høyere doser. </p>

            <small>Soppen som vokser i Norge er fleinsopp, og en grei huskeregel ved dosering er at den
            er omtrent dobbelt så potent som psilocybe cubensis, så ett gram tørket fleinsopp
            tilsvarer omtrent to gram tørket psilocybe cubensis.<br><br>
          </small>

          <sopp-calculator />
          <small>
            Kalkulatoren og doseringsinformasjonen den gir er ikke anbefalinger, da ulike personer
            kan reagere svært forskjellig på den samme doseringen.
            Det som er trygt for en person, kan være skadelig for en annen.</small>
          <hr>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h2 class="mb-5">Under rusen</h2>
          <h3 id="effekt" class="mb-4">4. Effekter</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <p><b>Endring i persepsjon og tanker</b><br>
        Du kan oppleve en økt personlig forståelse for blant annet natur, kunst og musikk. </p>

        <p><b>Personlig problemløsning</b><br>
        Du kan oppleve å få større innsikt i hvem du er som person.
        Mange rapporterer at psykedelika kan være verktøy til personlig problemløsning.</p>

        <p><b>Spirituelle opplevelser</b><br>
          Du kan oppleve en økt følelse av samhørighet med naturen og andre mennesker.</p>

        <p><b>Økt kreativitet</b></p>

        <p><b>Angst og forvirring</b><br>
          Uvante og annerledes tanker kan bidra til å skape forvirring, angst. og paranoia.
          Risikoen øker ved høye doser og ved kombinasjon med andre rus- eller legemidler.</p>

        <p><b>Uønskede følelser</b> </p>

        <p><b>Kvalme og oppkast</b><br>
        Kvalme og oppkast er mest vanlig rett etter inntak, og frem til effektene fremtrer.</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h3 id="rad" class="mb-4">5. Råd og tips</h3>
          <ul>
            <li>
              Vær forberedt. Du kan føle deg overveldet og ute av kontroll, uansett hvor mye erfaring du har
            </li>
            <li>
              Skift omgivelser eller musikk hvis du eller en venn har det vanskelig.
            </li>
            <li>
              Det kan hjelpe å fokusere på pusten dersom du opplever vanskelige tanker eller følelser.
            </li>
            <li>
              En vanskelig opplevelse er nødvendigvis ikke en dårlig opplevelse.
              Slike situasjoner kan være skremmende, men også verdifulle.
            </li>
            <li>
              Det anbefales å ha med en trygg, edru venn som kan hjelpe deg gjennom trippen og eventuelle vanskelige opplevelser.
            </li>
            <li>
              Det kan hjelpe å holde seg i ro eller legge seg ned dersom du opplever fysisk ubehag som kvalme eller oppkast.
            </li>
          </ul>
          <hr>
          <p align="center">
          <a href="http://www.emcdda.europa.eu/publications/drug-profiles/mushrooms">The European Monitoring Centre for Drugs and Drug Addiction (EMCDDA)</a>
          <br>
          <a href="http://www.rusopplysningen.no/">Rusopplysningen</a>
          <br>
          <a href="https://erowid.org/plants/mushrooms/mushrooms_dose.shtml/">Erowid</a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import DetailsNav from '@/components/DetailsNav';
import SoppCalculator from '@/components/SoppCalculator';
import BlurryImage from '@/components/BlurryImage';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/services/shopify';

export default {
  components: { DetailsNav, SoppCalculator, BlurryImage, ProductCard },
  mounted() {
    getAllProducts().then((res) => {
      const testkits = res.filter(p => p.attrs.tags.includes('PSYKEDELISK SOPP'));
      this.testkits = testkits;
    });
  },
  data() {
    return {
      testkits: [],
    };
  },
  head: {
    title: {
      inner: 'Sopp',
    },
  },
};

</script>

<style lang="sass" scoped>

</style>
