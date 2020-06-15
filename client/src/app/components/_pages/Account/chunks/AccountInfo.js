import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Container from "../../../Container/Container";
import {
  AccountAvatar,
  AccountAvatarImage,
  AccountBody,
  AccountHeader,
  AccountItem,
  AccountMain, AccountWrapper
} from "../_styles/accountInfo.style";
import {useParams, withRouter} from "react-router-dom";
import {accountReset, getAccountData} from "../../../../store/actions/account";
import {useLocation} from "react-use";
import DefaultIcon from "../../../../../img/user.svg";

const AccountInfo = props => {
  const location = useLocation();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    props.getAccountData(`/api/account/${id}`, () => props.history.push('/'));
    return () => props.accountReset();
  }, [location]);

  const user = props.account;

  const dateMod = (date) => {
    return date.split('-').reverse().join('.');
  };

  return (
    <AccountBody>
      <Container>
        {user && <AccountWrapper>
          <AccountAvatar>
            <AccountAvatarImage src={user.avatar || DefaultIcon} alt=""/>
          </AccountAvatar>
          <AccountMain>
            <AccountHeader>{user.nickname}</AccountHeader>
            <hr/>
            <AccountItem>{user.name}&nbsp;{user.surname}</AccountItem><br/>
            {user.birthDate && <AccountItem><b>ДР:</b> {dateMod(user.birthDate)}</AccountItem>}
            {user.gender && <AccountItem><b>Пол:</b> {user.gender}</AccountItem>}
            {user.city && <AccountItem><b>Родной город:</b> {user.city}</AccountItem>}
            {user.family && <AccountItem><b>Семейное положение:</b> {user.family}</AccountItem>}
            {user.hobby && <AccountItem><b>Увлечения:</b> {user.hobby}</AccountItem>}
            {user.status && <AccountItem><b>Сатус:</b> {user.status}</AccountItem>}
          </AccountMain>
        </AccountWrapper>}
      </Container>
    </AccountBody>
  )
};

function mapStateToProps(state) {
  const {user: account} = state.account;
  return {account};
}

function mapDispatchToProps(dispatch) {
  return {
    accountReset: () => dispatch(accountReset()),
    getAccountData: (url, redirect) => dispatch(getAccountData(url, redirect)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountInfo));