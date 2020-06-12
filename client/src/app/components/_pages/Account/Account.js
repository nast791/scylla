import React from 'react';
import Header from "../../Header/Header";
import AccountInfo from "./chunks/AccountInfo";

const Account = () => {
  return (
    <React.Fragment>
      <Header/>
      <AccountInfo/>
    </React.Fragment>
  );
};

export default Account;