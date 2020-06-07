import React from 'react';
import Header from "../../Header/Header";
import UserData from "./chunks/UserData";

const Profile = () => {
  return (
    <React.Fragment>
      <Header/>
      <UserData/>
    </React.Fragment>
  );
};

export default Profile;