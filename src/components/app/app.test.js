import { getAllReadings } from '../../utils/API-utils'

it('returns an object of sensor readings', async () => {
  const result = await getAllReadings();
  expect(result).toEqual({
    tempF: expect.any(String),
    tempC: expect.any(String),
    humidity: expect.any(String),
  })
})