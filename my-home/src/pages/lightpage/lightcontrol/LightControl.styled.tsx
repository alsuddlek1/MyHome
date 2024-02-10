import styled, { css } from 'styled-components';

const StyledLightControl = styled.div`
  /* border: 1px solid red; */
  margin: 0px 0px 0px 50px;
`;

const StyledLightControlCategoryContainBox = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  scrollbar-width: none;
`;

const StyledLightControlCategoryContain = styled.div`
  display: flex;
  width: 1250px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledLightControlCategory = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectRoom = props.selectRoom;
    const id = props.id;

    return css`
      font-family: ${(props) => props.theme.fonts.semiboldfont};
      font-size: 24px;
      color: ${(props) => props.theme.colors.main};
      border-radius: 50px;
      padding: 5px 30px;
      border: 1px solid ${(props) => props.theme.colors.main};
      margin: 0px 10px;
      width: auto;
      background-color: ${selectRoom === id ? props.theme.colors.main : '#ffffff'};
      color: ${selectRoom === id ? `#ffffff` : props.theme.colors.main};
      box-shadow: ${selectRoom === id ? `0px 4px 4px rgba(0, 0, 0, 0.25)` : null};
    `;
  }}
`;

const StyledLightControlContain = styled.div`
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-right: 50px;
  gap: 50px;
  height: 500px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  scrollbar-width: none;
`;

const StyledLightControlBox = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const selectButton = props.selectButton || [];
    const id = props.id;

    return css`
      font-family: ${(props) => props.theme.fonts.semiboldfont};
      font-size: 24px;
      border-radius: 5px;
      background-color: ${selectButton.includes(id) ? props.theme.colors.main : '#EEF8FB'};
      color: ${selectButton.includes(id) ? `#ffffff` : props.theme.colors.main};
      box-shadow: ${selectButton.includes(id) ? `0px 4px 4px rgba(0, 0, 0, 0.25)` : null};
      margin-top: 20px;
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

const StyledLightControlButtonIcon = styled.img`
  width: 120px;
`;

export {
  StyledLightControl,
  StyledLightControlCategoryContainBox,
  StyledLightControlCategoryContain,
  StyledLightControlCategory,
  StyledLightControlContain,
  StyledLightControlBox,
  StyledLightControlButtonIcon,
};
