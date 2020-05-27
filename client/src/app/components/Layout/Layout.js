import React, {useEffect} from 'react';
import {Body} from "./_styles/layout.style";
import Popup from "../Popup/Popup";
import {connect} from "react-redux";
import {useToggleScrollBar} from "../../hooks/useToggleScrollBar";
import {authUser} from "../../store/actions/auth";

const Layout = props => {
  useToggleScrollBar(props.popup);
  useEffect(() => {
    props.authUser('/api/auth');
  }, []);

  return (
    <React.Fragment>
      <Body>{props.children}</Body>
      {props.popup && <Popup/>}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const {popup} = state.auth;
  return {popup};
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: (url) => dispatch(authUser(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
