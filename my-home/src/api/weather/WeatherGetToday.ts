import serverAxios from '../api';

const WeatherGetToday = async (lat: number, lon: number, AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/weather/getForecastInfo',
      headers: {
        Authorization: AccessToken,
      },
      params: {
        lat: lat,
        lon: lon,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default WeatherGetToday;
