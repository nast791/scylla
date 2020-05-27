import {
  AUTH_CSRF,
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REG,
  AUTH_SUCCESS, POPUP_CLOSE, POPUP_OPEN
} from "../../utils/actions";
import {useFetch} from "../../hooks/useFetch";

export function registerUser(url, form, csrf) {
  return async dispatch => {
    dispatch(authError(false));
    const body = {};
    Object.keys(form.formControls).map(item => {
      const control = form.formControls[item];
      return body[item] = control.value;
    });
    dispatch(authLoading(true));
    try {
      const data = await useFetch(url, 'POST', body, csrf).then(res => res.json());
      dispatch(authLoading(false));
      if (data.user) { // login
        dispatch(authSuccess(data.user));
        dispatch(authLogin());
        dispatch(popupClose());
      } else { // register
        if (data.errors) {
          dispatch(authError(data.errors))
        } else {
          dispatch(authRegSuccess(data.message));
        }
      }
    } catch (e) {
      dispatch(authLoading(false));
      const msg = new Array(1).fill({msg: e.message});
      dispatch(authError(msg));
      console.log(msg);
      throw e;
    }
  }
}

export function authUser(url) {
  return async dispatch => {
    dispatch(authLoading(true));
    try {
      const data = await useFetch(url).then(res => res.json());
      if (data.user) {
        dispatch(authSuccess(data.user));
        dispatch(authLogin());
      }
      dispatch(authCSRF(data.csrf));
      dispatch(authLoading(false));
    } catch (e) {
      dispatch(authLoading(false));
      console.log(e);
      throw e;
    }
  }
}

export function logoutAuth(url) {
  return async dispatch => {
    try {
      await useFetch(url);
      dispatch(authLogout());
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export function authRegSuccess(value) {
  return {
    type: AUTH_REG,
    value
  }
}

export function authSuccess(value) {
  return {
    type: AUTH_SUCCESS,
    value
  }
}

export function authLogin() {
  return {
    type: AUTH_LOGIN
  }
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT
  }
}

export function authLoading(value) {
  return {
    type: AUTH_LOADING,
    value
  }
}

export function authError(value) {
  return {
    type: AUTH_ERROR,
    value
  }
}

export function popupOpen(value) {
  return {
    type: POPUP_OPEN,
    value
  }
}

export function popupClose() {
  return {
    type: POPUP_CLOSE
  }
}

export function authCSRF(value) {
  return {
    type: AUTH_CSRF,
    value
  }
}