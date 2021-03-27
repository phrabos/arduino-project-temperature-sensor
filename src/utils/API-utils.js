import request from 'superagent';

const URL = 'http://192.168.0.14'

export async function getTempF() {
  const response = await request.get(`${URL}/ftemperature`)
  return response.text;
}

export async function getTempC() {
  const response = await request.get(`${URL}/temperature`)
  return response.text;
}

export async function getHumidity() {
  const response = await request.get(`${URL}/humidity`)
  return response.text;
}

export async function getAllReadings() {
  const responseF = await getTempF();
  const responseC = await getTempC();
  const responseH = await getHumidity();

  return {tempF: responseF, tempC: responseC, humidity: responseH}
}