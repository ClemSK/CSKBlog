import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import * as styles from '../styles/contact.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <Layout pageTitle="Home Page">
        <p>Contact me here!</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <form action="SEND" method="POST" className={styles.form}>
          <div className={styles.labelAndInputContainer}>
            <label className={styles.label} htmlFor="Name">
              Name
            </label>
            <input className={styles.input} type="text" name="Name" required />
            {/* </div> */}
            {/* <div className={styles.labelAndInputContainer}> */}
            <label className={styles.label} htmlFor="Email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name="Email"
              required
            />
            {/* </div> */}
            {/* <div className={styles.labelAndInputContainer}> */}
            <label className={styles.label} htmlFor="Message">
              Message
            </label>
            <textarea
              className={styles.input}
              name="Message"
              id="nessage"
              cols={30}
              rows={10}
              required
            />
            <div className={styles.submit}>
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </Layout>
    </div>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
