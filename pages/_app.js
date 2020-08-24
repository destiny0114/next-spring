import React from "react";
import App, { Container } from "next/app";
import { Transition, animated } from "react-spring";

import Header from "../components/Header";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const items = [
      {
        id: this.props.router.route,
        Component,
        pageProps
      }
    ];

    return (
      <Container>
        <Header />
        <div style={{ position: "relative" }}>
          <Transition
            items={items}
            keys={item => item.id}
            from={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0, position: "absolute" }}
          >
            {(styles, { pageProps, Component }) => (
              <animated.div style={{ ...styles, width: "100%" }}>
                <Component {...pageProps} />
              </animated.div>
            )}
          </Transition>
        </div>

        <style jsx global>
          {`
            html,
            body {
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </Container>
    );
  }
}
