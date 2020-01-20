import React from "react";
import App from "next/app";
import Head from "next/head";
import { Tina, TinaCMS } from "tinacms";
import "../styles/index.css";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
  cms: TinaCMS;
  constructor(props) {
    super(props);
    // initialize the cms
    this.cms = new TinaCMS();
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Tina position="fixed" cms={this.cms}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Tina>
    );
  }
}
