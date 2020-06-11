import is from 'is_js';
import {FORM_CHANGE} from "../../utils/actions";

function validateControl(form, value, validation) {
  if (!validation) return true;
  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (validation.email) {
    isValid = is.email(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  if (validation.maxLength) {
    isValid = value.length <= validation.maxLength && isValid;
  }

  if (validation.noSpaces) {
    isValid = !value.includes(' ') && isValid;
  }

  if (validation.confirm) {
    const {password} = form.formControls;
    isValid = value === password.value && isValid;
  }

  return isValid;
}

export function changeHandler(event, form, formName, controlName, file) {
  return dispatch => {
    const clonedForm = {...form};
    const control = clonedForm.formControls[controlName];

    if (file) {
      control.value = file;
    } else {
      control.value = control.trim ? event.target.value.trim() : event.target.value;
    }
    control.touched = true;
    control.valid = validateControl(form, control.value, control.validation);
    clonedForm.isFormValid = true;
    clonedForm.isFormTouched = true;
    Object.keys(clonedForm.formControls).forEach((item) => {
      clonedForm.isFormValid = clonedForm.formControls[item].valid && clonedForm.isFormValid;
    });

    dispatch(changeForm(clonedForm, formName));
  }
}

export function resetHandler(form, formName) {
  return dispatch => {
    const clonedForm = {...form};
    clonedForm.isFormValid = formName === 'profile';
    clonedForm.isFormTouched = false;
    Object.keys(clonedForm.formControls).forEach((item) => {
      if (formName !== 'profile') {
        clonedForm.formControls[item].value = '';
        clonedForm.formControls[item].valid = false;
      }
      clonedForm.formControls[item].touched = false;
    });
    dispatch(changeForm(clonedForm, formName));
  }
}

export function addData(form, formName, data) {
  return dispatch => {
    const clonedForm = {...form};
    Object.keys(clonedForm.formControls).forEach((item) => {
      clonedForm.formControls[item].value = data[item] ? data[item] : '';
    });

    dispatch(changeForm(clonedForm, formName));
  }
}

export function changeForm(form, formName) {
  return {
    type: FORM_CHANGE,
    form, formName
  }
}