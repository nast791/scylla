import is from 'is_js';
import {CHANGE_FORM} from "../../utils/actions";

function validateControl(form, value, validation) {
  if (!validation) return true;
  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (validation.email) {
    isValid = is.email(value) && isValid;
  }

  if (validation.date) {
    isValid = is.dateString(value.split('-').reverse().join('/')) && isValid; // '01/01/1991'
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

export function changeHandler(event, form, formName, controlName) {
  return dispatch => {
    const clonedForm = {...form};
    const control = clonedForm.formControls[controlName];

    control.value = control.trim ? event.target.value.trim() : event.target.value;
    control.touched = true;
    control.valid = validateControl(form, control.value, control.validation);
    clonedForm.isFormValid = true;
    Object.keys(clonedForm.formControls).forEach((item) => {
      clonedForm.isFormValid = clonedForm.formControls[item].valid && clonedForm.isFormValid;
    });

    dispatch(changeForm(clonedForm, formName));
  }
}

export function resetHandler(form, formName) {
  return dispatch => {
    const clonedForm = {...form};
    clonedForm.isFormValid = false;
    Object.keys(clonedForm.formControls).forEach((item) => {
      clonedForm.formControls[item].value = '';
      clonedForm.formControls[item].touched = false;
      clonedForm.formControls[item].valid = false;
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
    type: CHANGE_FORM,
    form, formName
  }
}