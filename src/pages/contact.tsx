import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import * as styles from '../styles/contact.module.scss';

const ContactPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Layout pageTitle="Contact me">
          <p>Contact me here!</p>
          {/* <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    /> */}
          <form action="SEND" method="POST" className={styles.form}>
            <div className={styles.labelAndInputContainer}>
              <label className={styles.label} htmlFor="Name">
                Name
              </label>
              <input
                className={styles.input}
                type="text"
                name="Name"
                required
              />
              <label className={styles.label} htmlFor="Email">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                name="Email"
                required
              />
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
              <div className={styles.submitContainer}>
                <input
                  type="submit"
                  value="Send"
                  className={styles.submitButton}
                />
              </div>
            </div>
          </form>
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

export const Head = () => <Seo title="Contact me" />;

export default ContactPage;
