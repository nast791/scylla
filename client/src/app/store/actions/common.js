import {POPUP_OPEN, POPUP_CLOSE} from "../../utils/actions";

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