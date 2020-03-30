/** @jsx jsx */
import React from "react"
import { Flex, Box, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"

const Header = () => {
  return (
    <Box>
      <Flex
        sx={{
          margin: `0 auto`,
          width: "100%",
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          justifyContent: "space-between",
        }}
      >
        <GatsbyLink sx={{variant: "links.nav"}} to="/">NextTrace</GatsbyLink>
        <Box>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/about">What we do</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/team">Who we are</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/resources">Resources</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/faq">FAQ</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav"}} to="/contact">Contact</GatsbyLink>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
