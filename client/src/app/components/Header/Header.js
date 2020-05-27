import React from 'react';
import Container from "../Container/Container";
import {HeaderBlock, HeaderBody, HeaderBtn, HeaderLogo} from "./_styles/header.style";
import Search from "./chunks/Search";
import {useSmoothScroll} from "../../hooks/useSmoothScroll";
import {connect} from "react-redux";
import {logoutAuth, popupOpen} from "../../store/actions/auth";
import Spinner from "../Spinner/Spinner";

const Header = props => {
  const {ref, scroll} = useSmoothScroll();

  const authArea = props.auth ?
    <HeaderBlock>
      <p>{props.user.name}</p>
      <p onClick={props.logoutAuth.bind(null, '/api/auth/logout')}>Выйти</p>
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
        {props.loading ? <Spinner/> : authArea}
      </Container>
    </HeaderBody>
  );
};

function mapStateToProps(state) {
  const {auth, user, loading} = state.auth;
  return {auth, user, loading};
}

function mapDispatchToProps(dispatch) {
  return {
    popupOpen: (value) => dispatch(popupOpen(value)),
    logoutAuth: (url) => dispatch(logoutAuth(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);