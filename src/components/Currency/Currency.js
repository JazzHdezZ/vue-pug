const Currency = {
  components: {
  },
  props: {
    countrySelected: {
      default: null,
    },
  },
  data: () => ({
    currency: '',
    options: [
      { value: 'US', text: '$' },
      { value: 'AU', text: '$' },
      { value: 'CA', text: 'CA$' },
      { value: 'DE', text: '€' },
      { value: 'HK', text: 'HK$' },
      { value: 'IE', text: '€' },
      { value: 'NZ', text: '$' },
      { value: 'GB', text: '£' },
    ],
  }),
  watch: {
    countrySelected(newValue) {
      this.currency = `Currency is: ${this.options.filter((e) => e.value === newValue)[0].text}`;
    },
  },
};
export default Currency;
