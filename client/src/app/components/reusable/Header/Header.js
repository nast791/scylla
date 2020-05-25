import React from 'react';
import Container from "../Container/Container";
import {HeaderBlock, HeaderBody, HeaderBtn, HeaderLogo} from "./_styles/header.style";
import Search from "./chunks/Search";
import {useSmoothScroll} from "../../../hooks/useSmoothScroll";
import {connect} from "react-redux";
import {authLogout, popupOpen} from "../../../store/actions/auth";

const Header = props => {
  const {ref, scroll} = useSmoothScroll();

  const authArea = props.auth ?
    <HeaderBlock>
      <p>{props.user.name}</p>
      <p onClick={props.authLogout}>Выйти</p>
    </HeaderBlock> :
    <HeaderBlock>
      <HeaderBtn onClick={props.popupOpen.bind(null, 'login')}>Войти</HeaderBtn>
      <HeaderBtn onClick={props.popupOpen.bind(null, 'register')}>Зарегистрироваться</HeaderBtn>
    </HeaderBlock>;

  return (
    <HeaderBody>
      <Container flex={true}>
        <HeaderBlock flex={true}>
          <HeaderLogo to="/" exact ref={ref} onClick={scroll}/>
          <Search/>
        </HeaderBlock>
        {authArea}
      </Container>
    </HeaderBody>
  );
};

function mapStateToProps(state) {
  const {auth, user} = state.auth;
  return {auth, user};
}

function mapDispatchToProps(dispatch) {
  return {
    popupOpen: (value) => dispatch(popupOpen(value)),
    authLogout: () => dispatch(authLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);