import {IS_MOUNTED_POPUP, TOGGLE_NAVBAR} from "../../utils/actions";

export function isMountedPopup(value) {
  return {
    type: IS_MOUNTED_POPUP,
    value
  }
}

export function toggleNavBar(value) {
  return {
    type: TOGGLE_NAVBAR,
    value
  }
}