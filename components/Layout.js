import React, { Fragment } from "react";
import Head from "next/head";

const Layout = props => (
  <Fragment>
    <Head>
      <title>{props.pageTitle}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <link rel="stylesheet" href={props.pageStyles} />
    </Head>
    {props.children}
  </Fragment>
);

export default Layout;
