import styled from 'styled-components';

const StyledLight = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid pink;
  min-height: 100vh;
  flex: 9;
  /* display: flex; */
  margin-left: 200px;
  min-width: 1220px;
`;

const StyledLightTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  /* border: 1px solid red; */
  margin: 50px;
  display: flex;
  font-size: 32px;
  color: #585858;
`;

export { StyledLight, StyledLightTitle };
