import React, {useEffect, useRef, useState} from 'react';
import DefaultAvatar from "../../../../../img/user.svg";
import AddIcon from "../../../../../img/add-img.svg";
import {
  UserAnketa,
  UserAnketaCheckbox,
  UserAnketaGroup,
  UserAnketaInput,
  UserAnketaItem,
  UserAnketaLabel, UserAnketaOption, UserAnketaOptions, UserAnketaSelect, UserAnketaTitle,
  UserAnketaValue,
  UserAnketaWrapper,
  UserAvatar,
  UserAvatarIcon,
  UserAvatarImage,
  UserAvatarInput,
  UserBody,
  UserForm
} from "../_styles/userData.style";
import Container from "../../../Container/Container";
import {connect} from "react-redux";
import {addData, changeHandler} from "../../../../store/actions/forms";
import {useClickAway} from "react-use";

const UserData = props => {
  const fileInput = useRef('');
  const [url, setUrl] = useState(DefaultAvatar);
  const handler = () => {
    setUrl(URL.createObjectURL(fileInput.current.files[0]));
  };
  const [select, setSelect] = useState(false);
  const selectRef = useRef('');
  useClickAway(selectRef, () => {
    setSelect(false);
  });
  useEffect(() => {
    props.addData(props.profile, 'profile', props.user);
  }, [props.user]);

  const renderInputs = () => {
    return Object.keys(props.profile.formControls).map((item, index) => {
      const control = props.profile.formControls[item];
      if (control.type === 'radio') {
        return (
          <UserAnketaItem key={item + index}>
            <UserAnketaLabel>{control.label}</UserAnketaLabel>
            <UserAnketaGroup>{control.options.map((it, idx) => {
              return (<UserAnketaWrapper key={it + idx}>
                <UserAnketaInput type={control.type} name={item} value={it} onChange={event => props.changeHandler(event, props.profile, 'profile', item)}/><UserAnketaCheckbox/><UserAnketaValue>{it}</UserAnketaValue>
              </UserAnketaWrapper>)})}
            </UserAnketaGroup>
          </UserAnketaItem>
        )
      } else if (control.type === 'select') {
        return (
          <UserAnketaItem key={item + index} ref={selectRef}>
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

      return (
        <UserAnketaItem key={item + index}>
          <UserAnketaLabel>{control.label}</UserAnketaLabel>
          <UserAnketaInput type={control.type} name={item} value={control.value} onChange={event => props.changeHandler(event, props.profile, 'profile', item)} readOnly={control.readonly}/>
          {!!control.validation && !control.valid && control.touched && <p>{control.errorMessage}</p>}
        </UserAnketaItem>
      )
    });
  };

  return (
    <UserBody>
      <Container>
        <UserForm>
          <UserAvatar title="Загрузите изображение">
            <UserAvatarInput type="file" name="avatar" data-type="avatar" multiple={false} ref={fileInput} onChange={handler}/>
            <UserAvatarImage src={url} alt=""/>
            <UserAvatarIcon src={AddIcon} alt=""/>
          </UserAvatar>
          <UserAnketa>
            <UserAnketaTitle>{props.profile.title}</UserAnketaTitle>
            {renderInputs()}
          </UserAnketa>
        </UserForm>
      </Container>
    </UserBody>
  );
};

function mapStateToProps(state) {
  const {profile} = state.forms;
  const {user} = state.auth;
  return {profile, user};
}

function mapDispatchToProps(dispatch) {
  return {
    changeHandler: (event, form, formName, controlName) => dispatch(changeHandler(event, form, formName, controlName)),
    addData: (form, formName, data) => dispatch(addData(form, formName, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData);