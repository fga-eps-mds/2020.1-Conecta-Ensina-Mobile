import * as GeoCode from '../../src/services/geocode';
//import {} from '@react-native-community/datetimepicker';

describe('Testing geoCode services', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Should geocode works and return location', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
          {
            formatted_address:
              'Taguatinga, Federal District, Brasilia - Federal District, 72025-510, Brazil',
            place_id: 'ChIJMXGuYZstWpMRQJqkSsMD-Yk',
          },
        ],
        status: 'OK',
      }),
    );
    let response = await GeoCode.geocode('71234567');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://maps.googleapis.com/maps/api/geocode/json?address=71234567&key=APIKEYHERE',
    );
    expect(response).toEqual({
      results: [
        {
          formatted_address:
            'Taguatinga, Federal District, Brasilia - Federal District, 72025-510, Brazil',
          place_id: 'ChIJMXGuYZstWpMRQJqkSsMD-Yk',
        },
      ],
      status: 'OK',
    });
  });
  test('Should geocode failed and return error', async () => {
    fetch.mockReject(() => Promise.reject('Geocode Failure'));
    let response = await GeoCode.geocode('71234567');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://maps.googleapis.com/maps/api/geocode/json?address=71234567&key=APIKEYHERE',
    );
    expect(response).toEqual('Geocode Failure');
  });
});
