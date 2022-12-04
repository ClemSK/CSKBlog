import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import * as styles from '../../styles/blogPage.module.scss';

interface blog {
  data: any;
}

const BlogPage = ({ data }: blog) => {
  return (
    <>
      <Layout pageTitle="My Blog Posts">
        {data.allMdx.nodes.map(
          (node: {
            id: string;
            frontmatter: {
              slug: any;
              title: string;
              date: string;
            };
            excerpt: string;
          }) => (
            <article key={node.id}>
              <h2>
                <Link
                  to={`/blog/${node.frontmatter.slug}`}
                  className={styles.blogTitles}
                >
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          )
        )}
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
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
