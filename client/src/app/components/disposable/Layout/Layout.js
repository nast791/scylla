import React from 'react';
import {Body} from "./_styles/layout.style";
import Popup from "../../reusable/Popup/Popup";
import {connect} from "react-redux";
import {useToggleScrollBar} from "../../../hooks/useToggleScrollBar";

const Layout = props => {
  useToggleScrollBar(props);

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

export default connect(mapStateToProps, null)(Layout);
