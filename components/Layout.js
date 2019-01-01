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
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      />
    </Head>
    {props.children}
  </Fragment>
);

export default Layout;
