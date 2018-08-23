<template>
<div>
  <section class="intro">
    <blurry-image bigSrc="../static/patterns/lsd.jpg" smallSrc="../static/patterns/lsd-lowres.jpg" />
    <div class="faded">
      <div class="container">
        <div class="row align-items-center" style="min-height: 30vh;">
          <div class="col-12 text-inverted text-center">
            <h1 class="animated fadeInUp">LSD</h1>
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
            LSD (kort for lysergsyredietylamid), også kalt syre, er et kraftig syntetisk fremstilt psykedelika.
            Det er smakløst, luktfritt, ugiftig og er ikke avhengighetsskapende.
            </p>
          </h5>
          <hr>
        </div>
      </div>
    </section>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h2 class="mb-5">Forberedelser</h2>
          <h3 id="testing">1. Test om det er ren LSD</h3>
          <p>
            Andre rusmidler selges noen ganger som LSD:
          </p>
            <ul>
              <li>
                <b>NBOMer:</b> Den vanligste varianten er 25I-NBOMe og en høy dose av dette kan gi alvorlige helseskader og i verste fall død.
              </li>
              <li>
                <b>Bromo-DragonFLY:</b> En høy dose av dette kan gi alvorlige helseskader og i verste fall død. Rusen kan vare opp til 2-3 dager.
              </li>
              <li>
                <b>DOB/DOI/DOC:</b> Det tar mye lengre tid før man opplever effektene av rusen og den kan vare i mange flere timer enn LSD.
              </li>
            </ul>
            <p>
              Enkeltdoser av LSD er som regel i form av små lapper av trekkpapir eller sukkerbiter.
            </p>
          <p>
            <i>
              Bruk testkits, slik at du faktisk vet om det er LSD eller ikke.
              Det har konsekvenser for hva du kan forvente av rusen og potensiell helserisiko.
            </i>
          </p>

          <div class="row mt-5">
            <div class="col-6 col-sm-4 mb-4" v-for="testkit in testkits">
              <product-card
                :title="testkit.title"
                :img="testkit.images[0].src"
                :variant="testkit.variants[0]"
              />
            </div>
          </div>

          <p/>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h3 id="sikkerhet">2. Sikkerhet og forhåndsregler:</h3>
          <p>
            Effekten av LSD kan variere kraftig avhengig av flere forskjellige faktorer.
            Selv om du har brukt testutstyr og er trygg på at det er LSD, er det viktig å ta noen forhåndsregler
            for å tilrettelegge for en best mulig opplevelse.
          </p>
          <ul>
            <li>
              Sett av nok tid til opplevelsen.
              Husk at rusen LSD gir kan vare opp til 12 timer.
            </li>
            <li>
              Vær på et rolig, kjent sted, med personer du stoler på.
            </li>
            <li>
              Ikke ta LSD hvis du føler dårlig fysisk eller psykisk.
            </li>
            <li>
              Ikke bland med alkohol eller andre rus- og legemidler.
              Kombinasjon med for eksempel cannabis kan bidra til økt følelse av forvirring, angst og paranoia.
            </li>
            <li>
              Bruk av antidepressiva og andre SSRI vil redusere effektene.
            </li>
            <li>
              Ta en lav dose første gang du skal ta LSD.
              På denne måten får du en introduksjon til hvordan LSD kan oppleves.
            </li>
            <li>
              Tar du LSD for første gang bør du helst ha en helt edru venn i nærheten som kan forsikre
              deg om at det går bra, og hjelpe deg ved å endre miljøet rundt deg dersom du blir urolig eller forvirret.
            </li>
          </ul>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-8 offset-lg-2">
          <h3 id="dosering">3. Dosering</h3>
          <p>
            Kalkulatoren tar utgangspunkt i vekten du oppgir og dosering
            i sjiktet normale til moderate doser.
            LSD er svært potent og det kan det være vanskelig å beregne riktig dose.
            Sørg for at du vet hvor mye dosen din inneholder, og bruk et testkit for å sørge for at
            du faktisk har fått LSD. Husk at risiko øker ved høyere doser.
          </p>
          <lsd-calculator />
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
              Det kan hjelpe å fokusere på pusten din dersom du opplever vanskelige tanker eller følelser.
            </li>
            <li>
              En vanskelig opplevelse er nødvendigvis ikke en dårlig opplevelse.
              Slike situasjoner kan være skremmende, men også verdifulle.
            </li>
            <li>
              Det anbefales å ha med en trygg, edru venn som kan hjelpe deg gjennom vanskelige opplevelser.
            </li>
            <li>
              Det kan hjelpe å holde seg i ro eller legge seg ned dersom du opplever fysisk ubehag som kvalme eller oppkast.
            </li>
          </ul>
          <hr>
          <p align="center">
          <a href="http://www.emcdda.europa.eu/publications/drug-profiles/lsd">The European Monitoring Centre for Drugs and Drug Addiction (EMCDDA)</a>
          <br>
          <a href="http://www.rusopplysningen.no/">Rusopplysningen</a>
          <br>
          <a href="https://erowid.org/chemicals/lsd/lsd_dose.shtml">Erowid</a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import DetailsNav from '@/components/DetailsNav';
import LsdCalculator from '@/components/LsdCalculator';
import BlurryImage from '@/components/BlurryImage';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/services/shopify';

export default {
  components: { DetailsNav, LsdCalculator, BlurryImage, ProductCard },
  mounted() {
    getAllProducts().then((res) => {
      const testkits = res.filter(p => p.attrs.tags.includes('LSD'));
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
      inner: 'LSD',
    },
  },
};

</script>

<style lang="sass" scoped>

</style>
