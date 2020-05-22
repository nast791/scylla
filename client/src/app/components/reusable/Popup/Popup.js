import React, {useRef} from 'react';
import {connect} from "react-redux";
import {useClickAway} from "react-use";
import {popupClose} from "../../../store/actions/common";
import {Overlay, PopupBody, PopupBtn, PopupContext, PopupInput, PopupTitle} from "./_styles/popup.style";

const Popup = props => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    props.popupClose();
  });
  const settings = {
    entry: {title: 'Войти', nickname: false, name: false, email: true, password: true, confirm: false},
    register: {title: 'Зарегистрироваться', nickname: true, name: true, email: true, password: true, confirm: true},
  };
  const {nickname, name, email, password, confirm} = settings[props.popupName];

  return (
    <PopupBody>
      <PopupContext ref={ref} action={`auth/${props.popupName}`} method="post">
        <PopupTitle>{settings[props.popupName].title}</PopupTitle>
        {nickname && <PopupInput type="text" name="nickname" placeholder="Уникальный никнейм" required/>}
        {name && <PopupInput type="text" name="name" placeholder="Имя" required/>}
        {email && <PopupInput type="email" name="email" placeholder="Email" required/>}
        {password && <PopupInput type="password" name="password" placeholder="Пароль" required/>}
        {confirm && <PopupInput type="confirm" name="confirm" placeholder="Повторите пароль" required/>}
        <PopupBtn type="submit">Отправить</PopupBtn>
      </PopupContext>
      <Overlay/>
    </PopupBody>
  );
};

function mapStateToProps(state) {
  const {popupName} = state.common;
  return {popupName};
}

function mapDispatchToProps(dispatch) {
  return {
    popupClose: () => dispatch(popupClose()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);