import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql, Link } from 'gatsby';
import { ReactNode } from '@mdx-js/react/lib';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from '../../styles/mdxFrontmatter.module.scss';

interface IBlog {
  data: any;
  children: ReactNode;
}

const BlogPost = ({ data, children }: IBlog) => {
  const image = getImage(data.mdx.frontmatter.hero_image) as IGatsbyImageData;

  return (
    <>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <div className={styles.dateAndBackButton}>
          <p>{data.mdx.frontmatter.date}</p>
          <Link to="/blog" className={styles.navLinkText}>
            Back
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            className={styles.img}
          />
          <p>
            Photo Credit:{' '}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
        </div>
        {children}
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlog) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
