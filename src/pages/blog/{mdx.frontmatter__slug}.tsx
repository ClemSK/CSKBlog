import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql, Link } from 'gatsby';
import { ReactNode } from '@mdx-js/react/lib';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from '../../styles/components/blog/mdxFrontmatter.module.scss';

interface IBlog {
  data: any;
  children: ReactNode;
}

const BlogPost = ({ data, children }: IBlog) => {
  const image = getImage(data.mdx.frontmatter.hero_image) as IGatsbyImageData;

  const handleTags = data.mdx.frontmatter.tags.map((tag: number, i: string) => {
    return <li className={styles.tagStyles}>- {tag}</li>;
  });

  return (
    <>
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <div className={styles.dateAndBackButton}>
          <p>{data.mdx.frontmatter.date}</p>
        </div>
        <div className={styles.imgContainer}>
          <GatsbyImage
            // imgStyle={{ width: '1000px' }}
            style={{
              width: '100%',
              height: '500px',
            }}
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
      <script
        data-goatcounter="https://bluechipdevs.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
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
        tags
      }
    }
  }
`;

export const Head = ({ data }: IBlog) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
