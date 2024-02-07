import { useWeatherGet } from '../../../hooks/weather/useWeatherGet';
import {
  StyledWeatherRecent,
  StyledWeatherRecentBold,
  StyledWeatherRecentBox,
  StyledWeatherRecentImg,
} from './WeatherRecent.styled';

const WeatherRecent = () => {
  const { weatherCurrentInfo, weatherCurrentCityInfo, weatherCurrentMainInfo } = useWeatherGet();

  const today = new Date();

  const formattedMonth = today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const formattedDay = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const todayDate = `${formattedMonth}월 ${formattedDay}일`;
  const formattedHours = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const recentTime = `${formattedHours}:00`;

  return (
    <StyledWeatherRecent>
      <StyledWeatherRecentBox id="column">
        <StyledWeatherRecentBox id="flex">
          <StyledWeatherRecentBold id="recentcity">{weatherCurrentCityInfo}</StyledWeatherRecentBold>
          <StyledWeatherRecentBold id="recent">경상남도 창원시 성산구, {recentTime} 기준</StyledWeatherRecentBold>
        </StyledWeatherRecentBox>
        <StyledWeatherRecentBox id="flex">
          <StyledWeatherRecentImg src={'weather/recenticon/' + weatherCurrentMainInfo + '.png'} alt="mainweather" />
          <StyledWeatherRecentBox id="column">
            <StyledWeatherRecentBold id="date">{todayDate}</StyledWeatherRecentBold>
            <StyledWeatherRecentBold id="temperature">{weatherCurrentInfo}ºC</StyledWeatherRecentBold>
          </StyledWeatherRecentBox>
        </StyledWeatherRecentBox>
      </StyledWeatherRecentBox>
    </StyledWeatherRecent>
  );
};

export default WeatherRecent;
