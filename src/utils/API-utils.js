import request from 'superagent';

const URL = 'http://192.168.0.14'
const DEV_URL = 'https://temp-sensor-backend.herokuapp.com'

export async function getTempF() {
  const response = await request.get(`${DEV_URL}/ftemperature`)
  return response.text;
}

export async function getTempC() {
  const response = await request.get(`${DEV_URL}/temperature`)
  return response.text;
}

export async function getHumidity() {
  const response = await request.get(`${DEV_URL}/humidity`)
  return response.text;
}

export async function getAllReadings() {
  const responseF = await getTempF();
  const responseC = await getTempC();
  const responseH = await getHumidity();

  return {tempF: responseF, tempC: responseC, humidity: responseH}
}