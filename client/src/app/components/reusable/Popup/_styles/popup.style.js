import styled from "styled-components";

export const PopupBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
`;
export const PopupContext = styled.form`
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 450px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: #FFFFFF;
  z-index: 120;
`;
export const PopupTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
`;
export const PopupInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
`;
export const PopupBtn = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 15px;
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
