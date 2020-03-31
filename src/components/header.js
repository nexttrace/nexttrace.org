/** @jsx jsx */
import React from "react"
import { Flex, Box, Link, Image } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"
import logo from "../logo.svg"

const Header = () => {
  return (
    <Box>
      <Flex
        sx={{
          margin: `0 auto`,
          width: "100%",
          maxWidth: 960,
          paddingTop: "2rem",
          paddingBottom: "1.45rem",
          paddingLeft: "1.0875rem",
          paddingRight: " 1.0875rem",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <GatsbyLink><Image src={logo} sx={{width: 40, verticalAlign: "text-top", marginTop: "-10px", marginRight: "10px"}}></Image></GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav"}} to="/">NextTrace</GatsbyLink>
        </Box>
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
