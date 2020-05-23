import styled from "styled-components";

export const PopupBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
`;
export const PopupForm = styled.form`
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 450px;
  width: calc(100% - 60px);
  padding: 20px 20px 30px;
  border-radius: 5px;
  background-color: #FFFFFF;
  z-index: 120;
`;
export const PopupCross = styled.p`
  position: absolute;
  content: "";
  top: 0;
  right: -5px;
  transform: translateX(100%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  
  svg:hover {
    fill: #e6765a;
  }
`;
export const PopupTitle = styled.p`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
export const PopupField = styled.div`
  margin-bottom: 15px;
`;
export const PopupInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const PopupError = styled.p`
  color: #e64f29;
  font-size: 12px;
`;
export const PopupBtn = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 25px;
  font-weight: 600;
  text-transform:uppercase;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background-color: #e6765a;
  border-radius: 5px;
  &:hover {
    opacity: 1;
    filter: brightness(108%);
  }
  &:active {
    box-shadow: inset 1px 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
