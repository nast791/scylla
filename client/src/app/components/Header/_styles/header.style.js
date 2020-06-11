import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Icon from "../../../../img/favicon.png";

export const HeaderBody = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  background-color: #93dde6;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
`;
export const HeaderBlock = styled.div`
  position: relative;
  display: ${(props) => props.flex ? 'flex' : 'block'};
  justify-content: ${(props) => props.flex && (props.flex !== 'jc-start') ? 'space-between' : ''};
  align-items: ${(props) => props.flex && (props.flex !== 'ai-start') ? 'center' : ''};
`;
export const HeaderLogo = styled(NavLink)`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-image:url(${Icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position:0 0;
  &:hover {
    opacity: 1;
  }
  &.active {
    cursor: default;
  }
`;
export const HeaderBtn = styled.button`
  margin-left: auto;
  padding: 3px 0;
  font-size: 15px;
  &:hover {
    opacity: 1;
    color: #6e6e6e;
  }
`;
export const HeaderName = styled.p`
  margin-top: 3px;
  padding-left: 15px;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
`;
export const HeaderAvatar = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
export const HeaderAvatarImage = styled.img``;
