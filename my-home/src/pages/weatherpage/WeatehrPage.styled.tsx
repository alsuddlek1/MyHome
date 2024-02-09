import styled from 'styled-components';

const StyledWeather = styled.div.attrs<{ recentweather: any }>((props) => ({
  style: {
    backgroundImage: `url('weather/weather-${props.recentweather}.jpg')`,
  },
}))<{ recentweather: any }>`
  background-size: cover;
  min-height: 100vh;
  flex: 9;
  display: flex;
  margin-left: 200px;
  min-width: 1220px;
`;

const StyledWeatherBack = styled.div`
  background-color: #00000025;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledWeatherContainer = styled.div`
  /* border: 1px solid red; */
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1440px;
`;

const StyledWeatherTodayContainer = styled.div`
  margin: 20px 100px 50px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledWeather, StyledWeatherBack, StyledWeatherTodayContainer, StyledWeatherContainer };
