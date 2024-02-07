import { useWeatherGetWeekly } from '../../../hooks/weather/useWeatherWeeklyGet';
import {
  StyledWeatherWeekly,
  StyledWeatherWeeklyBold,
  StyledWeatherWeeklyCard,
  StyledWeatherWeeklyCardFlex,
  StyledWeatherWeeklyCardIcon,
  StyledWeatherWeeklyRegular,
  StyledWeatherWeeklyTodayMark,
  StyledWeatherWeeklyTodayMarkTriangle,
} from './WeatherWeekly.styled';

const WeatherWeekly = () => {
  const { weatherWeeklyList } = useWeatherGetWeekly();
  return (
    <StyledWeatherWeekly>
      <StyledWeatherWeeklyTodayMarkTriangle />
      <StyledWeatherWeeklyTodayMark />
      <StyledWeatherWeeklyBold id="mark">TODAY</StyledWeatherWeeklyBold>

      {weatherWeeklyList?.map((card: any) => (
        <StyledWeatherWeeklyCard key={card.id}>
          <StyledWeatherWeeklyBold id="cardTitle">수요일</StyledWeatherWeeklyBold>
          <StyledWeatherWeeklyRegular id="cardDate">0122</StyledWeatherWeeklyRegular>
          <br />
          <StyledWeatherWeeklyCardFlex>
            <StyledWeatherWeeklyRegular id="cardDate">min.</StyledWeatherWeeklyRegular>
            <StyledWeatherWeeklyBold id="cardMax">{Math.floor(card.min)}ºC</StyledWeatherWeeklyBold>
          </StyledWeatherWeeklyCardFlex>
          <StyledWeatherWeeklyCardFlex>
            <StyledWeatherWeeklyRegular id="cardDate">max.</StyledWeatherWeeklyRegular>
            <StyledWeatherWeeklyBold id="cardMax">{Math.floor(card.max)}ºC</StyledWeatherWeeklyBold>
          </StyledWeatherWeeklyCardFlex>
          <StyledWeatherWeeklyCardIcon src={`/weather/icon/${card.weather}.png`} alt={card.weather} />
        </StyledWeatherWeeklyCard>
      ))}
    </StyledWeatherWeekly>
  );
};

export default WeatherWeekly;
