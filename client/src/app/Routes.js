import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./components/_pages/Home/Home";
import Profile from "./components/_pages/Profile/Profile";
import Editor from "./components/_pages/Editor/Editor";
import Note from "./components/_pages/Note/Note";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/editor/:id" exact component={Editor}/>
        <Route path="/note/:id" exact component={Note}/>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;