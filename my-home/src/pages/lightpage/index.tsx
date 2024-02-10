import { StyledLight, StyledLightTitle } from './LightPage.styled';
import LightControl from './lightcontrol';

const Light = () => {
  console.log('light');
  return (
    <StyledLight>
      <StyledLightTitle>전등 컨트롤</StyledLightTitle>
      <LightControl />
    </StyledLight>
  );
};

export default Light;
