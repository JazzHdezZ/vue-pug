<template lang="pug">
  div#app
    form
      h2 Country Setup Form
      Country(@countryData="updateCountry")
      Region(:countrySelected="countrySelected")
      Currency(:countrySelected="countrySelected")
</template>

<script>
import Country from './components/Country/Country.vue';
import Currency from './components/Currency/Currency.vue';
import Region from './components/Region/Region.vue';

export default {
  name: 'App',

  components: {
    Country,
    Currency,
    Region,
  },

  data: () => ({
    countrySelected: null,
  }),
  methods: {
    updateCountry(data) {
      this.countrySelected = data;
    },
  },
};
</script>
<style scoped>
form {
  border: 2px solid #5700FF;
  border-radius: 5px;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-left: 30%;
  margin-right: 30%;
  padding-left: 8%;
}
h2 {
  color: #5700FF;
}
</style>
