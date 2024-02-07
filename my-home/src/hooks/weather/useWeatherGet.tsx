import { useEffect, useState } from 'react';
import WeatherCurrentInfo from '../../api/weather/WeatehrGetCurrentInfo';
import useLoginStore from '../../stores/login/useLoginStore';
import useLocationGetHook from './useLocationGetHook';

export const useWeatherGet = () => {
  const AccessToken = useLoginStore((state: any) => state.AccessToken);
  const { latitude, longitude, error } = useLocationGetHook();

  const [weatherCurrentInfo, setWeatherCurrentInfo] = useState<any>();
  const [weatherCurrentCityInfo, setWeatherCurrentCityInfo] = useState<string>();
  const [weatherCurrentMainInfo, setWeatherCurrentMainInfo] = useState<string>();

  useEffect(() => {
    const getWeatherCurrentInfo = async () => {
      if (latitude) {
        const response = await WeatherCurrentInfo(latitude, longitude, AccessToken);
        console.log(response);
        setWeatherCurrentInfo(Math.floor(response.data.main.temp));
        setWeatherCurrentCityInfo(response.data.name);
        setWeatherCurrentMainInfo(response.data.weather[0].main);
      }
    };
    getWeatherCurrentInfo();
  }, [latitude]);

  return { weatherCurrentInfo, weatherCurrentCityInfo, weatherCurrentMainInfo };
};
