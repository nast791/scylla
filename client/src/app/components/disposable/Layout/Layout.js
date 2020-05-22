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
      {props.popupName && <Popup/>}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const {popupName} = state.common;
  return {popupName};
}

export default connect(mapStateToProps, null)(Layout);
