import { useWeatherGet } from '../../../hooks/weather/useWeatherGet';
import { StyledMainWeather, StyledMainWeatherText } from './MainWeather.styled';

const MainWeather = () => {
  const { weatherCurrentInfo, weatherCurrentCityInfo, weatherCurrentMainInfo } = useWeatherGet();
  const recentweather = weatherCurrentMainInfo;

  const today = new Date();
  const formattedHours = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const recentTime = `${formattedHours}:00`;

  return (
    <StyledMainWeather recentweather={recentweather}>
      <StyledMainWeatherText id="city">{weatherCurrentCityInfo}</StyledMainWeatherText>
      <StyledMainWeatherText id="detail">{recentTime} 기준</StyledMainWeatherText>
      <StyledMainWeatherText id="temperature">{weatherCurrentInfo}ºC</StyledMainWeatherText>
    </StyledMainWeather>
  );
};

export default MainWeather;
