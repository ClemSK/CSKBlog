import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface seo {
  title: string;
}

const Seo = ({ title }: seo) => {
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
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
