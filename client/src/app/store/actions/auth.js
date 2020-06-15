import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SUCCESS, POPUP_CLOSE, POPUP_OPEN, USERS_SUCCESS
} from "../../utils/actions";
import {useFetch} from "../../hooks/useFetch";

export function registerUser(url, form, redirect) {
  return async dispatch => {
    dispatch(authError(false));
    const body = {};
    Object.keys(form.formControls).map(item => {
      const control = form.formControls[item];
      return body[item] = control.value;
    });
    try {
      const data = await useFetch(url, 'POST', body).then(res => res.json());
      dispatch(authLoading(true));
      if (data.user) { // login
        dispatch(authSuccess(data.user));
        dispatch(authLogin(true));
        dispatch(popupClose());
        redirect.push(`/${data.user.nickname}`);
      } else if (data.errors) { // register
        dispatch(authError(data.errors))
      } else {
        dispatch(authError(data.message));
      }
      dispatch(authLoading(false));
    } catch (e) {
      dispatch(authLoading(false));
      const msg = new Array(1).fill({msg: e.message});
      dispatch(authError(msg));
      console.log(msg);
      throw e;
    }
  }
}

export function refreshUser(url, form) {
  return async dispatch => {
    dispatch(authError(false));
    const body = {};
    Object.keys(form.formControls).map(item => {
      const control = form.formControls[item];
      return body[item] = control.value;
    });
    try {
      const data = await useFetch(url, 'POST', body).then(res => res.json());
      dispatch(authLoading(true));
      if (data.user && data.msg) {
        dispatch(authSuccess(data.user, data.msg));
      } else if (data.errors) {
        dispatch(authError(data.errors))
      } else {
        dispatch(authError(data.message));
      }
      dispatch(authLoading(false));
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
        dispatch(authLogin(true));
      } else {
        dispatch(authLogin(false));
      }
      dispatch(authLoading(false));
    } catch (e) {
      dispatch(authLogout());
      console.log(e);
      throw e;
    }
  }
}

export function getAllUsers(url) {
  return async dispatch => {
    dispatch(authLoading(true));
    try {
      const data = await useFetch(url).then(res => res.json());
      console.log(data);
      if (data.users) {
        dispatch(getUsersSuccess(data.users));
      }
      dispatch(authLoading(false));
    } catch (e) {
      dispatch(authLogout());
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

export function authSuccess(value, result = null) {
  return {
    type: AUTH_SUCCESS,
    value, result
  }
}

export function getUsersSuccess(value) {
  return {
    type: USERS_SUCCESS,
    value
  }
}

export function authLogin(value) {
  return {
    type: AUTH_LOGIN,
    value
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