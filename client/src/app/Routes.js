import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from "./components/disposable/Layout/Layout";
import Home from "./components/disposable/Home/Home";
import Profile from "./components/disposable/Profile/Profile";
import Editor from "./components/disposable/Editor/Editor";
import Note from "./components/disposable/Note/Note";

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