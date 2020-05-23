import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {useClickAway} from "react-use";
import {Overlay, PopupBody, PopupBtn, PopupCross, PopupError, PopupField, PopupForm, PopupInput,
  PopupTitle} from "./_styles/popup.style";
import {popupClose} from "../../../store/actions/common";
import {changeHandler, resetHandler} from "../../../store/actions/forms";

const Popup = props => {
  const cross = <svg height="20px" viewBox="0 0 311 311.07733" width="20px" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/></svg>;

  const ref = useRef(null);
  useClickAway(ref, () => {
    props.popupClose();
  });
  useEffect(() => {
    return () => props.resetHandler(props[props.popupName], props.popupName);
  }, []);

  const renderInputs = () => {
    return Object.keys(props[props.popupName].formControls).map((item, index) => {
      const control = props[props.popupName].formControls[item];
      return (
        <PopupField key={item + index}>
          <PopupInput type={control.type} name={item} value={control.value} placeholder={control.label} onChange={event => props.changeHandler(event, props[props.popupName], props.popupName, item)} />
          {!!control.validation && !control.valid && control.touched && <PopupError>{control.errorMessage}</PopupError>}
        </PopupField>
      )
    });
  };

  return (
    <PopupBody>
      <PopupForm ref={ref} action={`auth/${props.popupName}`} method="post">
        <PopupCross onClick={props.popupClose} title="Закрыть">{cross}</PopupCross>
        <PopupTitle>{props[props.popupName].title}</PopupTitle>
        {renderInputs()}
        <PopupBtn type="submit" disabled={!props[props.popupName].isFormValid}>Отправить</PopupBtn>
      </PopupForm>
      <Overlay/>
    </PopupBody>
  );
};

function mapStateToProps(state) {
  const {popupName} = state.common;
  const {entry, register} = state.forms;
  return {popupName, entry, register};
}

function mapDispatchToProps(dispatch) {
  return {
    popupClose: () => dispatch(popupClose()),
    changeHandler: (event, form, formName, controlName) => dispatch(changeHandler(event, form, formName, controlName)),
    resetHandler: (form, formName) => dispatch(resetHandler(form, formName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);