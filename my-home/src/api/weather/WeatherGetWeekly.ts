import serverAxios from '../api';

const WeatherGetWeekly = async (lat: number, lon: number, AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/weather/getForecastAverageInfo',
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

export default WeatherGetWeekly;
