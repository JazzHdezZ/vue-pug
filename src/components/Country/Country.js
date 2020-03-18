const country = {
  components: {
  },
  data: () => ({
    selectedOption: '',
    options: [
      { value: '', text: 'Please select a country' },
      { value: 'US', text: 'United States' },
      { value: 'AU', text: 'Australia' },
      { value: 'CA', text: 'Canada' },
      { value: 'DE', text: 'Germany' },
      { value: 'HK', text: 'Hong Kong' },
      { value: 'IE', text: 'Ireland' },
      { value: 'NZ', text: 'New Zealand' },
      { value: 'GB', text: 'United Kingdom' },
    ],
  }),
  methods: {
    countryChange(event) {
      this.$emit('countryData', event);
    },
  },
};

export default country;
