import {ACCOUNT_ERROR, ACCOUNT_LOADING, ACCOUNT_RESET, ACCOUNT_SUCCESS} from "../../utils/actions";

const initialState = {
  user: null,
  loading: false,
  error: false
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_SUCCESS:
      return {
        ...state, user: action.value
      };
    case ACCOUNT_LOADING:
      return {
        ...state, loading: action.value
      };
    case ACCOUNT_ERROR:
      return {
        ...state, error: action.value
      };
    case ACCOUNT_RESET:
      return {
        ...state, user: null, loading: false, error: false
      };
    default:
      return state;
  }
}