import {useEffect} from "react";

export const useToggleScrollBar = (popup) => {
  useEffect(() => {
    if (popup) {
      document.body.setAttribute('style', "overflow-y: hidden");
    } else {
      document.body.removeAttribute('style');
    }
  }, [popup]);
};