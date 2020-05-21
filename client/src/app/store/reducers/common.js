import {IS_MOUNTED_POPUP, TOGGLE_NAVBAR} from "../../utils/actions";

const initialState = {
  mountedPopup: false,
  openNavBar: false
};

export default function authChoice(state = initialState, action) {
  switch (action.type) {
    case IS_MOUNTED_POPUP:
      return {
        ...state, mountedPopup: action.value
      };
    case TOGGLE_NAVBAR:
      return {
        ...state, openNavBar: action.value
      };
    default:
      return state;
  }
}