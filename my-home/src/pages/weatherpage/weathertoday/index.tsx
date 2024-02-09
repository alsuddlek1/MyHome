import { useWeatherGetToday } from '../../../hooks/weather/useWeatherTodayGet';
import {
  StyledWeatherCard,
  StyledWeatherCardIcon,
  StyledWeatherToday,
  StyledWeatherTodayBold,
} from './WeatherToday.styled';

const WeatherToday = () => {
  const { weatherTodayList } = useWeatherGetToday();

  return (
    <StyledWeatherToday>
      {weatherTodayList?.map((card: any) => (
        <StyledWeatherCard key={card.id}>
          <StyledWeatherCardIcon src={`weather/icon/${card.weather[0].main}.png`} alt="icon" />
          <StyledWeatherTodayBold id="temperature">
            {Math.floor(card.main.temp) >= 0 ? `+${Math.floor(card.main.temp)}` : `${Math.floor(card.main.temp)}`}ºC
          </StyledWeatherTodayBold>
          <StyledWeatherTodayBold id="time">
            {Math.floor(card.dt_txt.slice(11, 13)) + 9 >= 24
              ? `0${Math.floor(card.dt_txt.slice(11, 13)) + 9 - 24} : 00`
              : `${Math.floor(card.dt_txt.slice(11, 13)) + 9} : 00`}
          </StyledWeatherTodayBold>
        </StyledWeatherCard>
      ))}
    </StyledWeatherToday>
  );
};

export default WeatherToday;
