import React from "react"

import Header from "./header"
import Footer from "./footer"
import Seo from "./seo"
import { Box } from "theme-ui"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <Box
        sx={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem` }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
