import { useEffect, useState } from 'react';
import useLoginStore from '../../stores/login/useLoginStore';
import useLocationGetHook from './useLocationGetHook';
import WeatherGetToday from '../../api/weather/WeatherGetToday';

export const useWeatherGetToday = () => {
  const AccessToken = useLoginStore((state: any) => state.AccessToken);
  const { latitude, longitude, error } = useLocationGetHook();

  const [weatherTodayList, setWeatherTodayList] = useState<any>();

  useEffect(() => {
    const getWeatherToday = async () => {
      if (latitude) {
        const response = await WeatherGetToday(latitude, longitude, AccessToken);
        setWeatherTodayList(response.data.list.slice(0, 5));
      }
    };
    getWeatherToday();
  }, [latitude]);
  return { weatherTodayList };
};
