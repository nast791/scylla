import styled from "styled-components";
import ArrowIcon from "../../../../../img/arrow-down.svg";
import mediaQueries from "../../../../utils/mediaQueries";

export const UserBody = styled.section`
  padding-top: 80px;
`;
export const UserForm = styled.form`
  display: flex;
  justify-content: space-between;
  
  @media ${mediaQueries.tabletL} { 
    display: block;
  }
`;
export const UserAvatarWrapper = styled.div`
  margin-right: 5%;
  
  @media ${mediaQueries.tabletL} { 
    margin: 0 auto;
  }
`;
export const UserAvatar = styled.label`
  display: block;
  position: relative;
  width: 250px;
  min-width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  
  @media ${mediaQueries.tabletL} { 
    margin: 0 auto;
  }
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
export const UserAvatarNote = styled.p`
  margin-top: 5px;
  font-size: 10px;
  text-align:center;
`;

export const UserAnketa = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  
  @media ${mediaQueries.tabletL} { 
    margin-top: 30px;
  }
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
  width: 100%;
  margin-bottom: 20px;
  
  &[data-hr="true"] {
    margin-top: 50px;
  }
  
  @media ${mediaQueries.mobileL} { 
    display: block;
    
    &[data-hr="true"] {
      margin-top: 30px;
    }
  }
`;
export const UserAnketaLabel = styled.p`
  width: 200px;
  min-width: 200px;
  
  @media ${mediaQueries.mobileL} { 
    margin-bottom: 5px;
  }
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
  
  &[readonly] {
    background-color: #eceff1;
    color: darkgray;
    border: 1px solid darkgray;
  }
  
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
export const UserAnketaErrors = styled.ul`
  width: 100%;
  margin-left: 200px;
`;
export const UserAnketaError = styled.p`
  position: absolute;
  content: "";
  top: 100%;
  left: 200px;
  padding-top: 2px;
  color: #e64f29;
  font-size: 10px;
`;
export const UserServerError = styled(UserAnketaError)`
  position: static;
  padding-top: 5px;
  font-size: 12px;
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
export const UserAnketaBtn = styled.button`
  width: 100%;
  height: 45px;
  margin-left: 200px;
  margin-top: 30px;
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
  
  @media ${mediaQueries.mobileL} { 
    margin-left: 0;
  }
`;
