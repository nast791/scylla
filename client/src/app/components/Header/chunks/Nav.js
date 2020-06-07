import React from 'react';
import {connect} from "react-redux";
import {logoutAuth} from "../../../store/actions/auth";
import {NavBody, NavItem, NavElem} from "../_styles/nav.style";

const Nav = props => {
  return (
    <NavBody>
      <NavItem><NavElem to="/profile" exact>Профиль</NavElem></NavItem>
      <NavItem onClick={props.logoutAuth.bind(null, '/api/auth/logout')}><NavElem as="a">Выйти</NavElem></NavItem>
    </NavBody>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    logoutAuth: (url) => dispatch(logoutAuth(url)),
  };
}

export default connect(null, mapDispatchToProps)(Nav);