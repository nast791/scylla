import {ACCOUNT_ERROR, ACCOUNT_LOADING, ACCOUNT_RESET, ACCOUNT_SUCCESS} from "../../utils/actions";
import {useFetch} from "../../hooks/useFetch";

export function getAccountData(url, redirect) {
  return async dispatch => {
    dispatch(accountLoading(true));
    try {
      const data = await useFetch(url).then(res => res.json());
      dispatch(accountSuccess(data.user));
      dispatch(accountLoading(false));
      if (!data.user) redirect();
    } catch (e) {
      dispatch(accountError(true));
      console.log(e);
      throw e;
    }
  }
}

export function accountSuccess(value) {
  return {
    type: ACCOUNT_SUCCESS,
    value
  }
}

export function accountLoading(value) {
  return {
    type: ACCOUNT_LOADING,
    value
  }
}

export function accountError(value) {
  return {
    type: ACCOUNT_ERROR,
    value
  }
}

export function accountReset() {
  return {
    type: ACCOUNT_RESET
  }
}