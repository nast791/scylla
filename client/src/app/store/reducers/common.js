import {NAV_TOGGLE} from "../../utils/actions";

const initialState = {
  navBar: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case NAV_TOGGLE:
      return {
        ...state, navBar: action.value
      };
    default:
      return state;
  }
}