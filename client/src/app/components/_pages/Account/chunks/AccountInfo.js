import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Container from "../../../Container/Container";
import {AccountBody} from "../_styles/accountInfo.style";
import {useParams, withRouter} from "react-router-dom";
import {accountReset, getAccountData} from "../../../../store/actions/account";
import {useLocation} from "react-use";

const AccountInfo = props => {
  const location = useLocation();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    if (!props.user || props.user.nickname !== id) {
      props.getAccountData(`/api/account/${id}`, () => props.history.push('/'));
    }
    return () => props.accountReset();
  }, [location]);

  const user = props.account || props.user;

  return (
    <AccountBody>
      <Container>
        <p>{user && user.name}</p>
      </Container>
    </AccountBody>
  )
};

function mapStateToProps(state) {
  const {user} = state.auth;
  const {user: account} = state.account;
  return {user, account};
}

function mapDispatchToProps(dispatch) {
  return {
    accountReset: () => dispatch(accountReset()),
    getAccountData: (url, redirect) => dispatch(getAccountData(url, redirect)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountInfo));