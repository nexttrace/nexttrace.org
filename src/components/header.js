/** @jsx jsx */
import React from "react"
import { Component } from 'react'
import { Flex, Box, Link, Image, MenuButton } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"
import logo from "../logo.svg"

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {expanded: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(state => ({
      expanded: !state.expanded
    }))
  }

  render () {
    const { expanded } = this.state

    return <Box>
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
        <Box sx={{display: ['inherit', 'none', 'none'], mt: "-4px"}}>
          <MenuButton onClick={ this.toggle } aria-label="Toggle Menu" />
        </Box>
        <Box sx={{display: ['none', 'inherit', 'inherit']}}>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/about">What we plan</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/team">Who we are</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/resources">Resources</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/faq">FAQ</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav"}} to="/contact">Contact</GatsbyLink>
        </Box>
      </Flex>
      { expanded && 
        <div sx={{position: "absolute", right: [3], width: "100%", height: "100%", background: "rgb(255,255,255,0.95)", textAlign: "right"}}>
          <GatsbyLink sx={{variant: "links.nav", fontSize: [4], display: "block"}} to="/about">What we plan</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", fontSize: [4], display: "block"}} to="/team">Who we are</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", fontSize: [4], display: "block"}} to="/resources">Resources</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", fontSize: [4], display: "block"}} to="/faq">FAQ</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", fontSize: [4], display: "block"}} to="/contact">Contact</GatsbyLink>
        </div>
      }
    </Box>
  }
}

export default Header
