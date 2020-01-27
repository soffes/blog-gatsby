module.exports = {
  siteMetadata: {
    title: `Hi, I’m Sam`,
    description: `The blog of Sam Soffes.`,
    author: `@soffes`,
  },
  plugins: [
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `posts`,
        remote: `https://github.com/soffes/blog`,
        patterns: `published/**`
      }
    },
  ],
}
