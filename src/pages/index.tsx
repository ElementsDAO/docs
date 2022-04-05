import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <video autoPlay muted loop id="bgvid">
          <source src="/assets/background_vid.mp4" type="video/webm" />
          <source src="/assets/background_vid.mp4" type="video/mp4" />
        </video>
        <div className={styles.quote}>
          We cannot solve our problems with the same thinking we used when we
          created them.
          <br />
          <br />
          <a
            href="https://www.youtube.com/watch?v=B1wYQc29weU&feature=youtu.be&t=2m46s"
            target="_blank"
          >
            Albert Einstein
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
