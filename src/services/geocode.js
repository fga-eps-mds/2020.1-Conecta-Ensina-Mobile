import {MAPS_API_KEY} from '@env';

export async function geocode(cep) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${MAPS_API_KEY}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
