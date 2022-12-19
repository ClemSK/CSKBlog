import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import * as styles from '../../styles/components/blog/blogPage.module.scss';

interface blog {
  data?: any;
}

const BlogPage = ({ data }: blog) => {
  //   const handleTags = data.allMdx.nodes.frontmatter.tags.map(
  //     (tag: number, i: string) => {
  //       return <li>{tag}</li>;
  //     }
  //   );

  //   const handleNextIcon = () => {
  //     return (
  //       <div>
  //         <svg
  //           width="32"
  //           height="38"
  //           viewBox="0 0 32 38"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             fill-rule="evenodd"
  //             clip-rule="evenodd"
  //             d="M1.45508 22.5702C1.45508 30.2383 7.9673 36.4545 16.0005 36.4545C24.0338 36.4545 30.546 30.2383 30.546 22.5702V16.0909H1.45508V22.5702Z"
  //             fill="black"
  //             stroke="black"
  //             stroke-width="2"
  //           ></path>
  //           <ellipse
  //             cx="16.0005"
  //             cy="16.0909"
  //             rx="14.5455"
  //             ry="14.5455"
  //             fill="white"
  //             stroke="black"
  //             stroke-width="2"
  //           ></ellipse>
  //           <path
  //             d="M13.4551 21.1818L18.546 16.0909L13.4551 10.9999"
  //             stroke="black"
  //             stroke-width="2"
  //             stroke-linecap="square"
  //           ></path>
  //         </svg>
  //       </div>
  //     );
  //   };

  return (
    <>
      <Layout pageTitle="Blog Posts">
        {data.allMdx.nodes.map(
          (node: {
            id: string;
            frontmatter: {
              slug: any;
              title: string;
              date: string;
              tags: [];
            };
            excerpt: string;
          }) => (
            <article key={node.id}>
              <div className={styles.blogLinkContainer}>
                <h2>
                  <Link
                    to={`/blog/${node.frontmatter.slug}`}
                    className={styles.blogTitles}
                  >
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <Link
                  to={`/blog/${node.frontmatter.slug}`}
                  className={styles.blogTitles}
                >
                  <div className={styles.btnContainer}>
                    <svg
                      width="32"
                      height="38"
                      viewBox="0 0 32 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.45508 22.5702C1.45508 30.2383 7.9673 36.4545 16.0005 36.4545C24.0338 36.4545 30.546 30.2383 30.546 22.5702V16.0909H1.45508V22.5702Z"
                        fill="black"
                        stroke="black"
                        stroke-width="2"
                      ></path>
                      <ellipse
                        cx="16.0005"
                        cy="16.0909"
                        rx="14.5455"
                        ry="14.5455"
                        fill="white"
                        stroke="black"
                        stroke-width="2"
                      ></ellipse>
                      <path
                        d="M13.4551 21.1818L18.546 16.0909L13.4551 10.9999"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="square"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
              <div className={styles.tagsContainer}>
                <p>Tags: </p>
                <ul className={styles.listTagStyles}>
                  {node.frontmatter.tags.map((tag) => {
                    return (
                      <li className={styles.tagStyles} key={tag}>
                        - {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
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
          tags
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Blog Posts" />;

export default BlogPage;
