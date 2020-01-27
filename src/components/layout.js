import React from "react"
import { Link } from "gatsby"

import styles from "./layout.module.css"

export default ({ children }) => (
  <div className={styles.layout}>
    <header>
      <h1><Link to="/">Hi, I’m Sam</Link></h1>
    </header>
    <main>
      {children}
    </main>
  </div>
)
