import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Clem's Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/CSK-logo.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     // Footnotes mode (default: true)
    //     footnotes: true,
    //     // GitHub Flavored Markdown mode (default: true)
    //     gfm: true,
    //     // Plugins configs
    //     plugins: [],
    //     extensions: [`.md`, `.mdx`],
    //   },
    // },
  ],
};

export default config;
