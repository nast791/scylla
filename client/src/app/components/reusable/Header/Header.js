import React from 'react';
import Container from "../Container/Container";
import {HeaderBlock, HeaderBody, HeaderBtn, HeaderLogo} from "./_styles/header.style";
import Search from "./chunks/Search";
import {useSmoothScroll} from "../../../hooks/useSmoothScroll";
import {connect} from "react-redux";
import {popupOpen} from "../../../store/actions/common";

const Header = props => {
  const {ref, scroll} = useSmoothScroll();
  return (
    <HeaderBody>
      <Container flex={true}>
        <HeaderBlock flex={true}>
          <HeaderLogo to="/" exact ref={ref} onClick={scroll}/>
          <Search/>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBtn onClick={props.popupOpen.bind(null, 'entry')}>Войти</HeaderBtn>
          <HeaderBtn onClick={props.popupOpen.bind(null, 'register')}>Зарегистрироваться</HeaderBtn>
        </HeaderBlock>
      </Container>
    </HeaderBody>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    popupOpen: (value) => dispatch(popupOpen(value)),
  };
}

export default connect(null, mapDispatchToProps)(Header);