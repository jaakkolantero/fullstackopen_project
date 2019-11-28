import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/index.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pizza italia </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
