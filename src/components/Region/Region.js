
const Region = {
  components: {
  },
  props: {
    countrySelected: {
      default: null,
    },
  },
  data: () => ({
    selectedOption: '',
    options: [{ value: '', text: 'Please select a Region' }],
    regions: [
      {
        country: 'US',
        region: [
          {
            value: 'AL',
            text: 'Alabama',
          },
          {
            value: 'AK',
            text: 'Alaska',
          },
          {
            value: 'AS',
            text: 'American Samoa',
          },
          {
            value: 'AZ',
            text: 'Arizona',
          },
        ],
      },
      {
        country: 'AU',
        region: [
          {
            value: 'ACT',
            text: 'Australian Capital Territory',
          },
          {
            value: 'NSW',
            text: 'New South Wales',
          },
          {
            value: 'NT',
            text: 'Northern Territory',
          },
          {
            value: 'QLD',
            text: 'Queensland',
          },
        ],
      },
      {
        country: 'CA',
        region: [
          {
            value: 'AB',
            text: 'Alberta',
          },
          {
            value: 'BC',
            text: 'British Columbia',
          },
          {
            value: 'MB',
            text: 'Manitoba',
          },
          {
            value: 'NB',
            text: 'New Brunswick',
          },
        ],
      },
      {
        country: 'IE',
        region: [
          {
            value: 'carlow',
            text: 'Carlow',
          },
          {
            value: 'cavan',
            text: 'Cavan',
          },
          {
            value: 'clare',
            text: 'Clare',
          },
          {
            value: 'cork',
            text: 'Cork',
          },
        ],
      },
      {
        country: 'HK',
        region: [
          {
            value: 'HONG KONG ISLAND',
            text: 'Hong Kong Island',
          },
        ],
      },
      {
        country: 'NZ',
        region: [
          {
            value: 'NZ-NTL',
            text: 'Northland',
          },
          {
            value: 'NZ-AUK',
            text: 'Auckland',
          },
          {
            value: 'NZ-WKO',
            text: 'Waikato',
          },
          {
            value: 'NZ-BOP',
            text: 'Bay of Plenty',
          },
        ],
      },
      {
        country: 'DE',
        region: [
          {
            value: 'BW',
            text: 'Baden-Wuerttemberg',
          },
          {
            value: 'BY',
            text: 'Bavaria',
          },
          {
            value: 'BE',
            text: 'Berlin',
          },
          {
            value: 'BB',
            text: 'Brandenburg',
          },
        ],
      },
      {
        country: 'GB',
        region: [
          {
            value: 'England',
            text: 'England',
          },
          {
            value: 'Northern Ireland',
            text: 'Northern Ireland',
          },
          {
            value: 'Wales',
            text: 'Wales',
          },
          {
            value: 'Scotland',
            text: 'Scotland',
          },
        ],
      },
    ],
  }),
  watch: {
    countrySelected(newValue) {
      this.options = [{ value: '', text: 'Please select a Region' }];
      // eslint-disable-next-line prefer-spread
      this.options.push.apply(this.options,
        this.regions.filter((e) => e.country === newValue)[0].region);
    },
  },
};
export default Region;
