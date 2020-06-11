import React, {useEffect, useRef, useState} from 'react';
import DefaultAvatar from "../../../../../img/user.svg";
import AddIcon from "../../../../../img/add-img.svg";
import {
  UserAnketa, UserAnketaBtn,
  UserAnketaCheckbox, UserAnketaError, UserAnketaErrors,
  UserAnketaGroup,
  UserAnketaInput,
  UserAnketaItem,
  UserAnketaLabel, UserAnketaOption, UserAnketaOptions, UserAnketaSelect, UserAnketaTitle,
  UserAnketaValue,
  UserAnketaWrapper,
  UserAvatar,
  UserAvatarIcon,
  UserAvatarImage,
  UserAvatarInput, UserAvatarNote, UserAvatarWrapper,
  UserBody,
  UserForm, UserServerError
} from "../_styles/userData.style";
import Container from "../../../Container/Container";
import {connect} from "react-redux";
import {addData, changeHandler, resetHandler} from "../../../../store/actions/forms";
import {useClickAway} from "react-use";
import {refreshUser} from "../../../../store/actions/auth";


const UserData = props => {
  useEffect(() => {
    props.addData(props.profile, 'profile', props.user);
  }, [props.user]);

  const [note, setNote] = useState(false);
  const [select, setSelect] = useState(false);
  const selectRef = useRef('');
  useClickAway(selectRef, () => {
    setSelect(false);
  });

  const renderInputs = () => {
    return Object.keys(props.profile.formControls).map((item, index) => {
      const control = props.profile.formControls[item];
      if (control.type === 'radio') {
        return (
          <UserAnketaItem key={item + index} data-hr={control.data}>
            <UserAnketaLabel>{control.label}</UserAnketaLabel>
            <UserAnketaGroup>{control.options.map((it, idx) => {
              return (<UserAnketaWrapper key={it + idx}>
                <UserAnketaInput type={control.type} name={item} value={it} onChange={event => props.changeHandler(event, props.profile, 'profile', item)} checked={control.value === it}/><UserAnketaCheckbox/><UserAnketaValue>{it}</UserAnketaValue>
              </UserAnketaWrapper>)})}
            </UserAnketaGroup>
          </UserAnketaItem>
        )
      } else if (control.type === 'select') {
        return (
          <UserAnketaItem key={item + index} ref={selectRef} data-hr={control.data}>
            <UserAnketaLabel>{control.label}</UserAnketaLabel>
            <UserAnketaSelect onClick={setSelect.bind(null, !select)} type="button" data-options={select}>{control.value === '' ? 'Не выбрано' : control.value}</UserAnketaSelect>
            {select && <UserAnketaOptions>{control.options.map((it, idx) => {
              return(<UserAnketaOption key={it + idx}>
                <UserAnketaInput type="radio" name={item} value={it} onChange={event => props.changeHandler(event, props.profile, 'profile', item)} onClick={setSelect.bind(null, false)}/><UserAnketaValue>{it === '' ? 'Не выбрано' : it}</UserAnketaValue>
              </UserAnketaOption>)})}
            </UserAnketaOptions>}
          </UserAnketaItem>
        )
      }

      if (control.type !== 'file') {
        return (
          <UserAnketaItem key={item + index} data-hr={control.data}>
            <UserAnketaLabel>{control.label}</UserAnketaLabel>
            <UserAnketaInput type={control.type} name={item} value={control.value} onChange={event => props.changeHandler(event, props.profile, 'profile', item)} readOnly={control.readonly}/>
            {!!control.validation && !control.valid && control.touched && <UserAnketaError>{control.errorMessage}</UserAnketaError>}
          </UserAnketaItem>
        )
      }
    });
  };

  const renderErrors = () => {
    return props.errors.map((it, idx) => {
      return <UserServerError as="li" key={idx}>{it.msg}</UserServerError>
    });
  };

  const LIMIT = 50;

  const fileChangeHandler = event => {
    event.persist();
    let reader = new FileReader();
    if (event.target.files[0].size > LIMIT * 1024) return;
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener('loadend', () => {
        props.changeHandler(event, props.profile, 'profile', event.target.name, reader.result);
      });
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    props.refreshUser(`/api/profile/refresh-user`, props.profile);
    props.resetHandler(props.profile, 'profile');
  };

  return (
    <UserBody>
      <Container>
        <UserForm onSubmit={submitHandler}>
          <UserAvatarWrapper>
            <UserAvatar title="Загрузите изображение" onMouseOver={() => setNote(true)} onMouseOut={() => setNote(false)}>
              <UserAvatarInput type="file" name="avatar" multiple={false} onChange={fileChangeHandler} accept="image/*"/>
              <UserAvatarImage src={props.profile.formControls.avatar.value || DefaultAvatar} alt=""/>
              <UserAvatarIcon src={AddIcon} alt=""/>
            </UserAvatar>
            {note && <UserAvatarNote>Разрешены изображения размером до {LIMIT} KB</UserAvatarNote>}
          </UserAvatarWrapper>
          <UserAnketa>
            <UserAnketaTitle>{props.profile.title}</UserAnketaTitle>
            {renderInputs()}
            <UserAnketaBtn type="submit" disabled={!props.profile.isFormValid || !props.profile.isFormTouched || props.loading}>Сохранить</UserAnketaBtn>
            {props.errors && <UserAnketaErrors>{renderErrors()}</UserAnketaErrors>}
            {props.result && <UserAnketaErrors><UserServerError>{props.result}</UserServerError></UserAnketaErrors>}
          </UserAnketa>
        </UserForm>
      </Container>
    </UserBody>
  );
};

function mapStateToProps(state) {
  const {profile} = state.forms;
  const {user, errors, result} = state.auth;
  return {profile, user, errors, result};
}

function mapDispatchToProps(dispatch) {
  return {
    changeHandler: (event, form, formName, controlName, file) => dispatch(changeHandler(event, form, formName, controlName, file)),
    addData: (form, formName, data) => dispatch(addData(form, formName, data)),
    refreshUser: (url, form) => dispatch(refreshUser(url, form)),
    resetHandler: (form, formName) => dispatch(resetHandler(form, formName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData);