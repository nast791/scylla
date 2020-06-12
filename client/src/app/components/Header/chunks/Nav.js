import React from 'react';
import {connect} from "react-redux";
import {logoutAuth} from "../../../store/actions/auth";
import {NavBody, NavItem, NavElem} from "../_styles/nav.style";
import {withRouter} from "react-router-dom";

const Nav = props => {
  const logout = () => {
    props.logoutAuth('/api/auth/logout');
    props.history.push('/');
  };

  return (
    <NavBody>
      <NavItem><NavElem to={`/${props.user.nickname}`} exact>Моя страница</NavElem></NavItem>
      <NavItem><NavElem to={`/${props.user.nickname}/profile`} exact>Профиль</NavElem></NavItem>
      <NavItem onClick={logout}><NavElem as="a">Выйти</NavElem></NavItem>
    </NavBody>
  );
};

function mapStateToProps(state) {
  const {user} = state.auth;
  return {user};
}

function mapDispatchToProps(dispatch) {
  return {
    logoutAuth: (url) => dispatch(logoutAuth(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));