console.log('[COMMON] Loading schema.js ...');

var mappingDict = [];
mappingDict['street_number'] = '';
mappingDict['street_address'] = '';
mappingDict['route'] = '';
mappingDict['intersection'] = '';
mappingDict['political'] = '';
mappingDict['country'] = {'short_name': 'country', 'long_name': 'countryName'};
mappingDict['administrative_area_level_1'] = 'area_1';
mappingDict['administrative_area_level_2'] = '';
mappingDict['administrative_area_level_3'] = '';
mappingDict['administrative_area_level_4'] = '';
mappingDict['administrative_area_level_5'] = '';
mappingDict['colloquial_area'] = '';
mappingDict['locality'] = 'city';
mappingDict['ward'] = '';
mappingDict['sublocality'] = '';
mappingDict['sublocality_level_1'] = '';
mappingDict['sublocality_level_2'] = '';
mappingDict['sublocality_level_3'] = '';
mappingDict['sublocality_level_4'] = '';
mappingDict['sublocality_level_5'] = '';
mappingDict['neighborhood'] = '';
mappingDict['premise'] = '';
mappingDict['subpremise'] = '';
mappingDict['postal_code'] = 'postalCode';
mappingDict['postal_town'] = '';
mappingDict['formatted_address'] = 'formattedAddress';


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
  },
  area_1: {
    type: String,
    optional: true
  }
});

if( Meteor.isClient ) {
  onEmptyStateFnt = function () {
    return {
      formattedAddress: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', 
      longitude: 2.2922926, 
      latitude: 48.8583736, 
      addressComponents: {country: {short_name: 'fr', long_name: 'France'}, locality: 'Paris', postal_code: '75007'}
    };
  };
}

Schema.Test = new SimpleSchema({
  address1: {
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input'
    }
  },
  address2: {
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input',
      onEmptyStateFntName: 'onEmptyStateFnt'
    }
  },
  address3: {
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input',
      mappingDict: mappingDict
    }
  },
  text: {
    type: String,
    optional: true
  }
});
Test.attachSchema(Schema.Test);
