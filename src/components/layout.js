import React from "react"

import Header from "./header"
import Footer from "./footer"
import { ThemeProvider, Box } from "theme-ui"
import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box
        sx={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem` }}
      >
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
