import styled, { css } from 'styled-components';

// const StyledMainWeather = styled.div.attrs<any>(() => ({}))`
//   ${(props) => {
//     const recentweather = props.recentweather;
//     const wether: any = {
//       sunny: `
//     background-image: url('weather/weather-sunny.jpg');
//     `,
//       cloudy: `
//     background-image: url('weather/weather-cloudy.jpg');
//     `,
//       night: `
//     background-image: url('weather/weather-night.jpg');
//     `,
//       rainy: `
//     background-image: url('weather/weather-rainy.jpg');
//     `,
//       snow: `
//     background-image: url('weather/weather-snow.jpg');
//     `,
//       thunder: `
//     background-image: url('weather/weather-thunder.jpg');
//     `,
//       windy: `
//     background-image: url('weather/weather-windy.jpg');
//     `,
//     };
//     return css`
//       width: 100%;
//       max-width: 1000px;
//       height: 200px;
//       margin-top: 40px;
//       border-radius: 30px;
//       background-image: url('weather/weather-sunny.jpg');
//       background-size: contain;
//       display: grid;
//       ${wether[recentweather]};
//     `;
//   }}
// `;
// const StyledMainWeather = styled.div.attrs<any>(() => ({}))`
//   ${(props) => {
//     const recentweather = props.recentweather;
//     const wether: any = {
//       sunny: `
//     background-image: url('weather/weather-sunny.jpg');
//     `,
//       cloudy: `
//     background-image: url('weather/weather-cloudy.jpg');
//     `,
//       night: `
//     background-image: url('weather/weather-night.jpg');
//     `,
//       rainy: `
//     background-image: url('weather/weather-rainy.jpg');
//     `,
//       snow: `
//     background-image: url('weather/weather-snow.jpg');
//     `,
//       thunder: `
//     background-image: url('weather/weather-thunder.jpg');
//     `,
//       windy: `
//     background-image: url('weather/weather-windy.jpg');
//     `,
//     };
//     return css`
//       width: 100%;
//       max-width: 1000px;
//       height: 200px;
//       margin-top: 40px;
//       border-radius: 30px;
//       background-image: url('weather/weather-sunny.jpg');
//       background-size: contain;
//       display: grid;
//       ${wether[recentweather]};
//     `;
//   }}
// `;

const StyledMainWeather = styled.div.attrs<{ recentweather: any }>((props) => ({
  style: {
    backgroundImage: `url('weather/weather-${props.recentweather}.jpg')`,
  },
}))<{ recentweather: any }>`
  width: 100%;
  max-width: 1000px;
  height: 200px;
  margin-top: 40px;
  border-radius: 30px;
  background-size: contain;
  display: grid;
`;

const StyledMainWeatherText = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      city: `
      font-size : 32px;
      color: #ffffff;
      margin-top : 20px;
`,
      detail: `
      font-size : 20px;
      color : #ebebeb;
`,
      temperature: `
      margin-top : 30px;
      font-size : 50px;
      color: #ffffff;
`,
    };

    return css`
      ${name[id]}
      display: flex;
      padding-left: 20px;
      font-family: ${(props) => props.theme.fonts.regularfont};
    `;
  }}
`;

export { StyledMainWeather, StyledMainWeatherText };
