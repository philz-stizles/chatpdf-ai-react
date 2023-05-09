import React, { Fragment, PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
