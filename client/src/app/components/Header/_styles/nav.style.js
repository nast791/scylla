import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavBody = styled.ul`
  position: absolute;
  content: "";
  top: calc(100% + 12px);
  right: 0;
  width: 200px;
  padding: 5px 0;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0,0,0,0.2);
  z-index: 50;
`;

export const NavItem = styled.li`
  font-size: 14px;
`;

export const NavElem = styled(NavLink)`
  display: block;
  padding: 8px 10px;
  
  &.active, &.active:hover {
    color: darkgray;
    cursor: default;
  }
 
  &:hover {
    color: #000000;
    background-color: rgba(139, 220, 247, 0.3);
  }
`;
