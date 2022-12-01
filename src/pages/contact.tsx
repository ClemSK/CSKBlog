import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import * as styles from '../styles/pagesIndex.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <Layout pageTitle="Home Page">
        <p>Contact me here!</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <form action="post">
          <label htmlFor="input">
            <p>name</p>
            <input type="text" />
          </label>
          <label htmlFor="input">
            <p>email</p>
            <input type="email" />
          </label>
          <label htmlFor="input">
            <p>message</p>
            <textarea
              name="message"
              id="nessage"
              cols={30}
              rows={10}
            ></textarea>
          </label>
        </form>
      </Layout>
    </div>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
