import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import * as styles from '../styles/pagesIndex.module.scss';

const IndexPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Layout pageTitle="Home Page">
          <p>My great home page!</p>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          />
        </Layout>
      </div>
      <script
        data-goatcounter="https://bluechipdevs.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
    </>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
