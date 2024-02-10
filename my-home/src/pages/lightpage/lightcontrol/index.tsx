import { useState } from 'react';
import {
  StyledLightControl,
  StyledLightControlCategoryContain,
  StyledLightControlCategory,
  StyledLightControlContain,
  StyledLightControlBox,
  StyledLightControlCategoryContainBox,
  StyledLightControlButtonIcon,
} from './LightControl.styled';

const LightControl = () => {
  const [selectRoom, setSelectRoom] = useState('total');
  const [selectButton, setSelectButton] = useState<any>([]);

  const selectCategory = (e: any) => {
    setSelectRoom(e.target.id);
  };

  const selectControlButton = (e: any) => {
    const clickedId = e.target.id;

    const isSelected = selectButton.includes(clickedId);

    if (!isSelected) {
      setSelectButton([...selectButton, clickedId]);
    } else {
      setSelectButton(selectButton.filter((id: any) => id !== clickedId));
    }
  };

  return (
    <StyledLightControl>
      <StyledLightControlCategoryContainBox>
        <StyledLightControlCategoryContain>
          <StyledLightControlCategory onClick={selectCategory} id="total" selectRoom={selectRoom}>
            전체
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            즐겨찾기
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            부엌
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            거실
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            안방
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            작은방
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            중간방
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            화장실
          </StyledLightControlCategory>
          <StyledLightControlCategory onClick={selectCategory} id="star" selectRoom={selectRoom}>
            베란다
          </StyledLightControlCategory>
        </StyledLightControlCategoryContain>
      </StyledLightControlCategoryContainBox>
      <StyledLightControlContain>
        <StyledLightControlBox onClick={selectControlButton} id="room1" selectButton={selectButton}>
          <StyledLightControlButtonIcon src="/icon/light-off.png" alt="icon" />
          거실1
        </StyledLightControlBox>
        <StyledLightControlBox onClick={selectControlButton} id="room2" selectButton={selectButton}>
          거실2
        </StyledLightControlBox>
        <StyledLightControlBox onClick={selectControlButton} id="room3" selectButton={selectButton}>
          거실3
        </StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
        <StyledLightControlBox>거실3</StyledLightControlBox>
      </StyledLightControlContain>
    </StyledLightControl>
  );
};

export default LightControl;
