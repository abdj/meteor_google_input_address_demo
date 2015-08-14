console.log('[COMMON] Loading schema.js ...');


Schema = {};

Schema.Address = new SimpleSchema({
  formattedAddress: {
    type: String,
    optional: true
  },
  geopoint: {
    type: [Number],
    decimal: true,
    optional: true
  },
  city: {
    type: String,
    optional: true
  },
  postalCode: {
    type: String,
    optional: true
  },
  country: {
    type: String,
    optional: true
  },
  countryName: {
    type: String,
    optional: true
  }
});


Schema.Test = new SimpleSchema({
  address: {
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input'
    }
  },
  text: {
    type: String,
    optional: true
  }
});
Test.attachSchema(Schema.Test);
