import React from "react";

const useScrollTo = () => {
  const scrollToTop = (ref?: React.RefObject<HTMLElement>) => {
    //make is window
    const target = ref?.current || window;
    target.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = (ref?: React.RefObject<HTMLElement>) => {
    const target = ref?.current || window;
    target.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return { scrollToTop, scrollToBottom };
};

export default useScrollTo;
