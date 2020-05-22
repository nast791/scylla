import {useEffect} from "react";

export const useToggleScrollBar = (props) => {
  useEffect(() => {
    if (props && props.popupName) {
      document.body.setAttribute('style', "overflow-y: hidden");
    } else {
      document.body.removeAttribute('style');
    }
  }, [props.popupName]);
};