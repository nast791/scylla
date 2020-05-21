import React from 'react';
import {Body} from "./_styles/layout.style";

const Layout = props => {
  return (
    <Body>{props.children}</Body>
  );
};


export default Layout;
