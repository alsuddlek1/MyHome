import { useEffect, useState } from 'react';
import useLoginStore from '../../stores/login/useLoginStore';
import useLocationGetHook from './useLocationGetHook';
import WeatherGetWeekly from '../../api/weather/WeatherGetWeekly';

export const useWeatherGetWeekly = () => {
  const AccessToken = useLoginStore((state: any) => state.AccessToken);
  const { latitude, longitude, error } = useLocationGetHook();

  const [weatherWeeklyList, setWeatherWeeklyList] = useState<any>();

  useEffect(() => {
    const getWeatherWeekly = async () => {
      if (latitude) {
        const response = await WeatherGetWeekly(latitude, longitude, AccessToken);
        console.log(response.data);
        setWeatherWeeklyList(response.data);
      }
    };
    getWeatherWeekly();
  }, [latitude]);
  return { weatherWeeklyList };
};
