<template>

  <div class="row">
    <div class="col-12">
      <label>
        <input type="checkbox" class="first-time"> Det er min første gang
      </label>
      <p/>
      <label>
        <input type="radio" class="small" name="iCheck"> Lav dose
      </label>
      <label>
        <input type="radio" class="moderate" name="iCheck" checked> Moderat dose
      </label>
      <label>
        <input type="radio" class="strong" name="iCheck"> Sterk dose
      </label>
      <button class="btn btn-primary mt-4" @click="calcDosage()">Kalkuler</button>
    </div>
    <div class="col-12 mt-4">
      <h3 style="color: #26bb35"><b>{{dosageResult}}</b></h3>
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
    $('.small').on('ifToggled', (event) => {
      this.small = !this.small;
    });
    $('.moderate').on('ifToggled', (event) => {
      this.moderate = !this.moderate;
    });
    $('.strong').on('ifToggled', (event) => {
      this.strong = !this.strong;
    });
  },
  data() {
    return {
      dosageResult: '',
      firstTime: false,
      small: false,
      moderate: true,
      strong: false,
    };
  },
  methods: {
    calcDosage() {
      const vm = this;

      if (this.firstTime && this.small) {
        vm.dosageResult = 'Lav dose er 40 - 70 µg';
      } else if (this.firstTime && this.moderate) {
        vm.dosageResult = 'Moderat dose er 70 - 100 µg';
      } else if (this.firstTime && this.strong) {
        vm.dosageResult = 'Sterk dose er 100 - 120 µg';
      } else if (!this.firstTime && this.small) {
        vm.dosageResult = 'Lav dose er 70 - 100 µg';
      } else if (!this.firstTime && this.moderate) {
        vm.dosageResult = 'Moderat dose er 100 - 120 µg';
      } else if (!this.firstTime && this.strong) {
        vm.dosageResult = 'Sterk dose er 120 - 200 µg';
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
