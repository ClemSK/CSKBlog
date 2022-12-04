import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as styles from '../styles/layout.module.scss';
import { ReactNode } from '@mdx-js/react/lib';

interface layout {
  pageTitle: string;
  children: ReactNode;
}

const Layout = ({ pageTitle, children }: layout) => {
  let date = new Date().getFullYear();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.siteTitle}>
          {data.site.siteMetadata.title}
        </header>
        <nav className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
              <Link to="/" className={styles.navLinkText}>
                Home
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/about" className={styles.navLinkText}>
                About
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/blog" className={styles.navLinkText}>
                Blog
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/contact" className={styles.navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <main className={styles.contentContainer}>
          <h1 className={styles.heading}>{pageTitle}</h1>
          {children}
        </main>
        <footer className={styles.layoutFooter}>
          <p>Created with ❤️ by Blue Chip Devs</p>
          <p>&copy; {date}</p>
        </footer>
      </div>
    </section>
  );
};

export default Layout;
