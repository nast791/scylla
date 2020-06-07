import React, {useRef} from 'react';
import Container from "../Container/Container";
import {HeaderAvatar, HeaderBlock, HeaderBody, HeaderBtn, HeaderLogo, HeaderName} from "./_styles/header.style";
import Search from "./chunks/Search";
import {useSmoothScroll} from "../../hooks/useSmoothScroll";
import {connect} from "react-redux";
import {popupOpen} from "../../store/actions/auth";
import Spinner from "../Spinner/Spinner";
import {toggleNav} from "../../store/actions/common";
import Nav from "./chunks/Nav";
import {useClickAway} from "react-use";

const Header = props => {
  const {ref, scroll} = useSmoothScroll();
  const navRef = useRef('');
  useClickAway(navRef, () => {
    props.toggleNav(false);
  });

  const authArea = props.auth ?
    <HeaderBlock onClick={props.toggleNav.bind(null, !props.navBar)} ref={navRef} flex={true}>
      <HeaderName>{props.user.name}</HeaderName>
      <HeaderAvatar/>
      {props.navBar && <Nav/>}
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
  const {navBar} = state.common;
  return {auth, user, loading, navBar};
}

function mapDispatchToProps(dispatch) {
  return {
    popupOpen: (value) => dispatch(popupOpen(value)),
    toggleNav: (value) => dispatch(toggleNav(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);