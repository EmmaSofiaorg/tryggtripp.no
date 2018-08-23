<template>

  <div class="row">
    <div class="col-12">
      <input type="tel" class="col-6" placeholder="Din vekt i kg" v-model="weight" @keyup.enter="calcDosage()" />
      <button class="btn btn-primary" @click="calcDosage()">Kalkuler</button>
      <p/>
      <label>
        <input type="checkbox" class="first-time"> Det er min første gang
      </label>
      <label>
        <input type="checkbox" class="re-dose"> Med redosering
      </label>
    </div>
    <div class="col-12 mt-4">
      <h3 style="color: #26bb35"><b>{{dosageResult}}</b></h3>
      <h3 v-if="reDosage">{{reDosageResult}}</h3>
    </div>
  </div>

</template>

<script>

import iCheck from 'icheck';

export default {
  mounted() {
    /* eslint no-unused-vars: "off" */
    const vm = this;

    $('input').iCheck({
      checkboxClass: 'icheckbox_square',
      radioClass: 'iradio_square',
      increaseArea: '20%', // optional
    });
    $('.first-time').on('ifToggled', (event) => {
      this.firstTime = !this.firstTime;
    });
    $('.re-dose').on('ifToggled', (event) => {
      this.reDosage = !this.reDosage;
    });
  },
  data() {
    return {
      weight: '',
      dosageResult: '',
      reDosageResult: '',
      firstTime: false,
      reDosage: false,
    };
  },
  methods: {
    calcDosage() {
      const vm = this;
      const weight = this.weight;
      const dosage = Math.round(weight * 1.5);
      const reDosage = Math.round(weight * 0.6);
      const firstTimeDose = dosage - 15;

      if (!this.weight) {
        vm.dosageResult = 'Skriv inn din vekt først';
        vm.reDosageResult = '';
      } else if (this.weight < 45) {
        vm.dosageResult = 'For lav vekt';
        vm.reDosageResult = '';
      } else if (this.weight > 100) {
        vm.dosageResult = 'Moderat dose er 150 mg';
        vm.reDosageResult = 'Redosering på 60 mg etter 45-90 minutter';
      } else if (this.weight > 100 && this.firstTime) {
        vm.dosageResult = 'Moderat dose er 130 mg';
        vm.reDosageResult = 'Redosering på 50 mg etter 45-90 minutter';
      } else if (this.firstTime) {
        vm.dosageResult = `Moderat dose er ${firstTimeDose} mg`;
        vm.reDosageResult = `Redosering på ${Math.round(firstTimeDose * 0.35)} mg etter 45-90 minutter`;
      } else if (!this.firstTime) {
        vm.dosageResult = `Moderat dose er ${dosage} mg`;
        vm.reDosageResult = `Redosering på ${reDosage} mg etter 45-90 minutter`;
      }
    },
  },
};

</script>

<style lang="sass">

@import '../../node_modules/icheck/skins/square/_all.css'

label
  display: block


</style>
