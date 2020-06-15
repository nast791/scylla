import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SUCCESS, POPUP_CLOSE,
  POPUP_OPEN, USERS_SUCCESS
} from "../../utils/actions";

const initialState = {
  user: null,
  allUsers: null,
  loading: false,
  errors: false,
  auth: null,
  popup: null,
  result: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, user: action.value, result: action.result
      };
    case USERS_SUCCESS:
      return {
        ...state, allUsers: action.value
      };
    case AUTH_LOGIN:
      return {
        ...state, auth: action.value
      };
    case AUTH_LOGOUT:
      return {
        ...state, user: null, loading: false, errors: false, auth: false, result: null
      };
    case AUTH_LOADING:
      return {
        ...state, loading: action.value
      };
    case AUTH_ERROR:
      return {
        ...state, errors: action.value
      };
    case POPUP_OPEN:
      return {
        ...state, popup: action.value
      };
    case POPUP_CLOSE:
      return {
        ...state, popup: null, errors: false, result: null
      };
    default:
      return state;
  }
}