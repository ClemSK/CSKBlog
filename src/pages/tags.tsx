// import React from 'react';
// import PropTypes from 'prop-types';

// // Utilities
// import kebabCase from 'lodash/kebabCase';

// // Components
// import { Helmet } from 'react-helmet';
// import { Link, graphql } from 'gatsby';

// interface TagsPage {
//   data?: any;
//   group?: string;
//   title?: string;
//   tag?: string;
// }

// // const TagsPage = ({
// //   data: {
// //     allMdx: { group },
// //     site: {
// //       siteMetadata: { title },
// //     },
// //   },
// // }: TagsPage) => (
// //   <div>
// //     <Helmet title={title} />
// //     <div>
// //       <h1>Tags</h1>
// //       <ul>
// //         {group.map((tag: { fieldValue: any; totalCount: number }) => (
// //           <li key={tag.fieldValue}>
// //             <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
// //               {tag.fieldValue} ({tag.totalCount}))
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   </div>
// // );

// const TagsPage = ({
//   data: {
//     // allMdx: { group },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }: TagsPage) => (
//   <div>
//     <Helmet title={title} />
//     <div>
//       <h1>Tags</h1>
//       <ul>
//         {/* {group} */}
//         {/* {group.map((tag: { fieldValue: any; totalCount: number }) => (
//           <li key={tag.fieldValue}>
//             <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//               {tag.fieldValue} ({tag.totalCount})
//             </Link>
//           </li>
//         ))} */}
//       </ul>
//     </div>
//   </div>
// );

// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// };

// export default TagsPage;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx(limit: 2000) {
//       group(field: { frontmatter: { tags: SELECT } }) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `;
