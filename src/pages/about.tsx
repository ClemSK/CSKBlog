import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/aboutPage.module.scss';

const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Layout pageTitle="About me">
          <p>Hi there! I'm the proud creators of this site.</p>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
          />
          <p>
            I'm building an ecommerce platform to:
            <ul>
              <li>Try new technologies.</li>
              <li>Deliver better user experiences,</li>
              <li>Learn how to sell on the web.</li>
            </ul>
            This site is built on Gatsby for speed and delivering a great user
            experience for this blog. The blog posts are generated using
            markdown and a template to render them.
          </p>
          <p>
            I'm a full-stack developer from London, UK working with the
            Microsoft platform on SharePoint. At work I use the following stack:
          </p>
          <ul>
            <li>React + TS</li>
            <li>CSS / Sass</li>
            <li>C#</li>
            <li>CosmosDB</li>
            <li>Azure</li>
          </ul>
        </Layout>
        <script
          data-goatcounter="https://bluechipdevs.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </div>
    </>
  );
};

export const Head = () => <Seo title="About me" />;

export default AboutPage;
