import { useWeatherGet } from '../../hooks/weather/useWeatherGet';
import {
  StyledWeather,
  StyledWeatherBack,
  StyledWeatherContainer,
  StyledWeatherTodayContainer,
} from './WeatehrPage.styled';
import WeatherRecent from './weatherrecent';
import WeatherToday from './weathertoday';
import WeatherWeekly from './weatherweekly';

const Weather = () => {
  const { weatherCurrentMainInfo } = useWeatherGet();
  console.log(weatherCurrentMainInfo);
  const recentweather = weatherCurrentMainInfo;
  return (
    <StyledWeather recentweather={recentweather}>
      <StyledWeatherBack>
        <StyledWeatherContainer>
          <StyledWeatherTodayContainer>
            <WeatherRecent />
            <WeatherToday />
          </StyledWeatherTodayContainer>
          <WeatherWeekly />
        </StyledWeatherContainer>
      </StyledWeatherBack>
    </StyledWeather>
  );
};

export default Weather;
