import styled from "styled-components";
import ArrowIcon from "../../../../../img/arrow-down.svg";

export const UserBody = styled.section`
  padding-top: 80px;
`;
export const UserForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const UserAvatar = styled.label`
  position: relative;
  width: 350px;
  min-width: 350px;
  height: 350px;
  margin-right: 5%;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
export const UserAvatarInput = styled.input`
  display: none;
`;
export const UserAvatarImage = styled.img`
  width: 100%;
`;
export const UserAvatarIcon = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 30px;
`;

export const UserAnketa = styled.div`
  flex: 1;
`;
export const UserAnketaTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: 600;
`;
export const UserAnketaItem = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
export const UserAnketaLabel = styled.p`
  width: 200px;
  min-width: 200px;
`;
export const UserAnketaGroup = styled.div`
  display: flex;
  flex: 1;
  min-height: 40px;
`;
export const UserAnketaWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
export const UserAnketaCheckbox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: #FFFFFF;
`;
export const UserAnketaInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid gray;
  border-radius: 5px;
  
  &[type="radio"] {
    display: none;
    
    &:checked ~ ${UserAnketaCheckbox}::before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background-color: #455a64;
      border-radius: 5px;
    }
  }
`;
export const UserAnketaValue = styled.span`
  padding-top: 3px;
`;
export const UserAnketaSelect = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color:#FFFFFF;
  text-align: left;
  
  &::before {
    position:absolute;
    content: "";
    top: 0;
    right: 15px;
    width: 15px;
    height: 100%;
    background-image:url(${ArrowIcon});
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-size: 15px auto;
    transition: all 0.3s;
  }
  &:hover {
    border: 1.5px solid #455a64;
  }
  &[data-options="true"]::before {
    transform: rotate(180deg);
  }
`;
export const UserAnketaOptions = styled.div`
  position: absolute;
  content: "";
  top: 100%;
  right: 0;
  width: calc(100% - 200px);
  height: 120px;
  background-color:#FFFFFF;
  border: 1px solid gray;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
  overflow: auto;
`;
export const UserAnketaOption = styled.label`
  display: block;
  padding: 5px 15px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(139, 220, 247, 0.3);
  }
`;
