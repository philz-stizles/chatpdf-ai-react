import React, { Fragment } from "react";
import { Footer, Header } from "..";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
