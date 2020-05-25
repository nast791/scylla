import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REG,
  AUTH_SUCCESS, POPUP_CLOSE,
  POPUP_OPEN
} from "../../utils/actions";

const initialState = {
  user: null,
  loading: false,
  errors: false,
  auth: false,
  success: false,
  popup: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, user: action.value
      };
    case AUTH_REG:
      return {
        ...state, success: action.value
      };
    case AUTH_LOGIN:
      return {
        ...state, auth: true
      };
    case AUTH_LOGOUT:
      return {
        ...state, user: null, loading: false, errors: false, auth: false, success: false
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
        ...state, popup: null, errors: false, success: false
      };
    default:
      return state;
  }
}