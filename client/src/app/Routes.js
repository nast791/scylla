import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./components/_pages/Home/Home";
import Profile from "./components/_pages/Profile/Profile";
import Editor from "./components/_pages/Editor/Editor";
import Note from "./components/_pages/Note/Note";
import {connect} from "react-redux";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/editor/:id" exact component={Editor}/>
        <Route path="/note/:id" exact component={Note}/>
        <Route path="/profile" exact render={() => (props.auth ? <Profile/> : props.auth != null ? <Redirect to="/"/> : null) }/>
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