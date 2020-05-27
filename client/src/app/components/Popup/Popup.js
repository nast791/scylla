import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {useClickAway} from "react-use";
import {
  Overlay, PopupBody, PopupBtn, PopupCross, PopupError, PopupErrors, PopupField, PopupForm, PopupInput, PopupSuccess,
  PopupTitle
} from "./_styles/popup.style";
import {changeHandler, resetHandler} from "../../store/actions/forms";
import {authError, popupClose, registerUser} from "../../store/actions/auth";

const Popup = props => {
  const cross = <svg height="20px" viewBox="0 0 311 311.07733" width="20px" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/></svg>;

  const ref = useRef(null);
  useClickAway(ref, () => {
    props.popupClose();
  });

  useEffect(() => {
    return () => props.resetHandler(props[props.popup], props.popup);
  }, []);

  const changeInput = (event, form, formName, controlName) => {
    props.changeHandler(event, form, formName, controlName);
    props.authError(false);
  };

  const renderInputs = () => {
    return Object.keys(props[props.popup].formControls).map((item, index) => {
      const control = props[props.popup].formControls[item];
      return (
        <PopupField key={item + index}>
          <PopupInput type={control.type} name={item} value={control.value} placeholder={control.label} onChange={event => changeInput(event, props[props.popup], props.popup, item)} />
          {!!control.validation && !control.valid && control.touched && <PopupError>{control.errorMessage}</PopupError>}
        </PopupField>
      )
    });
  };

  const renderErrors = () => {
    return props.errors.map((it, idx) => {
      return <PopupError as="li" key={idx}>{it.msg}</PopupError>
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.registerUser(`/api/auth/${props.popup}`, props[props.popup], props.csrf);
  };

  if (props.success) {
    return (
      <PopupBody>
        <PopupForm ref={ref} as="div">
          <PopupCross onClick={props.popupClose} title="Закрыть">{cross}</PopupCross>
          {props.success && <PopupSuccess>{props.success}<br/>Спасибо за регистрацию!</PopupSuccess>}
        </PopupForm>
        <Overlay/>
      </PopupBody>
    );
  }

  return (
    <PopupBody>
      <PopupForm ref={ref} onSubmit={submitHandler}>
        <PopupCross onClick={props.popupClose} title="Закрыть">{cross}</PopupCross>
        {props.success && <PopupSuccess>{props.success}</PopupSuccess>}
        <PopupTitle>{props[props.popup].title}</PopupTitle>
        {renderInputs()}
        <PopupBtn type="submit" disabled={!props[props.popup].isFormValid || props.loading}>Отправить</PopupBtn>
        {props.errors && <PopupErrors>{renderErrors()}</PopupErrors>}
      </PopupForm>
      <Overlay/>
    </PopupBody>
  );
};

function mapStateToProps(state) {
  const {login, register} = state.forms;
  const {popup, loading, errors, success, auth, csrf} = state.auth;
  return {popup, login, register, loading, success, errors, auth, csrf};
}

function mapDispatchToProps(dispatch) {
  return {
    popupClose: () => dispatch(popupClose()),
    changeHandler: (event, form, formName, controlName) => dispatch(changeHandler(event, form, formName, controlName)),
    resetHandler: (form, formName) => dispatch(resetHandler(form, formName)),
    registerUser: (url, form, csrf) => dispatch(registerUser(url, form, csrf)),
    authError: (value) => dispatch(authError(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);