import {POPUP_OPEN, POPUP_CLOSE} from "../../utils/actions";

const initialState = {
  popupName: null
};

export default function authChoice(state = initialState, action) {
  switch (action.type) {
    case POPUP_OPEN:
      return {
        ...state, popupName: action.value
      };
    case POPUP_CLOSE:
      return {
        ...state, popupName: null
      };
    default:
      return state;
  }
}