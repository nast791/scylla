import React, {useEffect, useRef, useState} from 'react';
import DefaultAvatar from "../../../../../img/user.svg";
import AddIcon from "../../../../../img/add-img.svg";
import {
  UserAnketa, UserAnketaInput, UserAnketaItem, UserAnketaLabel,
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


const UserData = props => {
  const fileInput = useRef('');
  const [url, setUrl] = useState(DefaultAvatar);
  const handler = () => {
    setUrl(URL.createObjectURL(fileInput.current.files[0]));
  };
  useEffect(() => {
    props.addData(props.profile, 'profile', props.user);
  }, []);

  const renderInputs = () => {
    return Object.keys(props.profile.formControls).map((item, index) => {
      const control = props.profile.formControls[item];
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