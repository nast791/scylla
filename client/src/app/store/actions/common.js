import {NAV_TOGGLE} from "../../utils/actions";

export function toggleNav(value) {
  return {
    type: NAV_TOGGLE,
    value
  }
}