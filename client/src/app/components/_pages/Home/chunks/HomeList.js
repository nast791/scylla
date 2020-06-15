import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllUsers} from "../../../../store/actions/auth";
import {Link} from "react-router-dom";
import {HomeListBody, HomeListHeader, HomeListItem, HomeListItems} from "../_styles/homeList.style";
import Container from "../../../Container/Container";

const HomeList = props => {
  useEffect(() => {
    props.getAllUsers('/api/auth/all');
  }, []);

  const renderUsers = (users) => {
    return users.map((it, idx) => {
      return (
        <HomeListItem key={idx}>
          <Link to={`/${it}`}>{it}</Link>
        </HomeListItem>
      );
    });
  };

  return (
    <HomeListBody>
      <Container>
        <HomeListHeader>Зарегистрированные на сайте пользователи</HomeListHeader>
        <HomeListItems>
          {props.allUsers && renderUsers(props.allUsers)}
        </HomeListItems>
      </Container>
    </HomeListBody>
  );
};

function mapStateToProps(state) {
  const {allUsers} = state.auth;
  return {allUsers};
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: (url) => dispatch(getAllUsers(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);