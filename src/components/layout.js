import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./layout.module.css"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={styles.layout}>
      <header>
        <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
