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
            {Math.floor(card.main.temp) >= 0 ? `+${Math.floor(card.main.temp)}` : `-${Math.floor(card.main.temp)}`}ºC
          </StyledWeatherTodayBold>
          <StyledWeatherTodayBold id="time">{card.dt_txt.slice(11, 16)}</StyledWeatherTodayBold>
        </StyledWeatherCard>
      ))}
    </StyledWeatherToday>
  );
};

export default WeatherToday;
