import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./components/_pages/Home/Home";
import Profile from "./components/_pages/Profile/Profile";
import Editor from "./components/_pages/Editor/Editor";
import Note from "./components/_pages/Note/Note";
import {connect} from "react-redux";
import Account from "./components/_pages/Account/Account";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/:id" exact component={Account}/>
        <Route path="/editor/:id" exact component={Editor}/>
        <Route path="/note/:id" exact component={Note}/>
        <Route path="/:id/profile" exact render={() => (props.auth ? <Profile/> : <Redirect to="/"/>) }/>
        <Redirect to="/"/>
      </Switch>
    </Layout>
  );
};

function mapStateToProps(state) {
  const {auth} = state.auth;
  return {auth};
}

export default connect(mapStateToProps)(Routes);