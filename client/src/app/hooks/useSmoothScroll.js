import {useRef} from 'react';

export const useSmoothScroll = () => {
  const ref = useRef(null);
  const scroll = event => {
    if (ref.current.classList.contains('active')) {
      event.preventDefault();
    }
    window.scrollTo({top:0, behavior: "smooth"});
  };
  return {ref, scroll};
};