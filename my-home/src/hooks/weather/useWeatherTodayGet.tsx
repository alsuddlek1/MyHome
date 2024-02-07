import { useEffect, useState } from 'react';
import useLoginStore from '../../stores/login/useLoginStore';
import useLocationGetHook from './useLocationGetHook';
import WeatherGetToday from '../../api/weather/WeatherGetToday';

export const useWeatherGetToday = () => {
  const AccessToken = useLoginStore((state: any) => state.AccessToken);
  const { latitude, longitude, error } = useLocationGetHook();

  const [weatherTodayList, setWeatherTodayList] = useState<any>();

  const today = new Date();
  const recentHours = today.getHours();
  // 00, 03, 06, 09, 12, 15, 18, 21, 00
  // 현재 시간 // 3 => 2 이면 (6,7,8시) list[0] ~ 5개
  // 현재 시간 // 3 => 3 이면 (9,10,11시) list[1] ~ 5개
  // 현재 시간 // 3 => 4 이면 (12,13,14시) list[2] ~ 5개
  // 현재 시간 // 3 => 5 이면 (15,16,17시) list[3] ~ 5개
  // 현재 시간 // 3 => 6 이면 (18,19,20시) list[4] ~ 5개
  // 현재 시간 // 3 => 7 이면 (21,22,23시) list[5] ~ 5개
  // 현재 시간 // 3 => 0 이면 (00,1,2시) list[6] ~ 5개
  // 현재 시간 // 3 => 1 이면 (3,4,5시) list[7] ~ 5개
  // 현재 시간 // 3 => 2 이면 (6,7,8시) list[8] ~ 5개

  useEffect(() => {
    const getWeatherToday = async () => {
      if (latitude) {
        const response = await WeatherGetToday(latitude, longitude, AccessToken);
        // if (Math.floor(recentHours / 3) == 2) {
        //   setWeatherTodayList(response.data.list.slice(0, 5));
        // } else if (Math.floor(recentHours / 3) == 3) {
        //   setWeatherTodayList(response.data.list.slice(1, 6));
        // } else if (Math.floor(recentHours / 3) == 4) {
        //   setWeatherTodayList(response.data.list.slice(2, 7));
        // } else if (Math.floor(recentHours / 3) == 5) {
        //   setWeatherTodayList(response.data.list.slice(3, 8));
        // } else if (Math.floor(recentHours / 3) == 6) {
        //   setWeatherTodayList(response.data.list.slice(4, 9));
        // } else if (Math.floor(recentHours / 3) == 7) {
        //   setWeatherTodayList(response.data.list.slice(5, 10));
        // } else if (Math.floor(recentHours / 3) == 0) {
        //   setWeatherTodayList(response.data.list.slice(6, 11));
        // } else if (Math.floor(recentHours / 3) == 1) {
        //   setWeatherTodayList(response.data.list.slice(7, 12));
        // } else if (Math.floor(recentHours / 3) == 2) {
        //   setWeatherTodayList(response.data.list.slice(8, 13));
        // }
        const offset = Math.floor(recentHours / 3);
        const startIndex = offset > 1 ? offset - 2 : offset + 7;
        const endIndex = startIndex + 5;
        setWeatherTodayList(response.data.list.slice(startIndex, endIndex));
      }
    };
    getWeatherToday();
  }, [latitude]);
  return { weatherTodayList };
};
