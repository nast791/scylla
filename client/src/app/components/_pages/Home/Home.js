import React from 'react';
import Header from "../../Header/Header";
import HomeList from "./chunks/HomeList";

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <HomeList/>
    </React.Fragment>
  );
};

export default Home;