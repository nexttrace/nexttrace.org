/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text, Grid, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"

const Index = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], fontSize: [6, null, 7] }}>
        Controlling COVID-19
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [4] }}>
        <Heading as="h3" sx={{ fontSize: [4], lineHeight: "body", mb: [4, null, 5] }}>
          NextTrace is building a contact tracing system
          to enable public health decisions
        </Heading>
        <Text sx={{ mb: [3] }}>
          Social distancing, if widely adopted, works. Unfortunately, it's
          unsustainable. If we continue distancing, it may devastate our society. 
          But if we stop before a vaccine is ready, it will cause a
          rebound in infections because not enough of us are immune. 
        </Text>
        <Text sx={{mb: [3]}}>
          We need another option.
        </Text>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Contact tracing — at scale
        </Heading>
        <Text sx={{ mb: [3] }}>
         We know interviewing infected individuals about who they came in contact with,
         and encouraging them to isolate, works to slow the rate of an infection. This process, called {' '}
         <Link href='https://en.wikipedia.org/wiki/Contact_tracing'><b>contact tracing</b></Link>, 
         forms of the basis of classic epidemiological methods.
        </Text>
        <Text sx={{mb: [3]}}>
          We are developing a system for <b>survey-based contact tracing at
          scale</b> that can be deployed by public health 
          officials around the United States. Our approach does not require advanced 
          location-based tracking, though can incorporate data from such 
          systems as it becomes available. Read more about {' '}
          <GatsbyLink sx={{ textDecoration: "none" }} to="/about"><Link>our plan</Link></GatsbyLink>.
        </Text>
        <Text sx={{mb: [3]}}>
          We are a {' '}
          <GatsbyLink sx={{ textDecoration: "none" }} to="/about"><Link>team</Link></GatsbyLink> of scientists, epidemiologists, 
          and software developers. We are working collaboratively with 
          other efforts and sharing best practices as we go.
        </Text>
      </Box>
      <Grid gap={[4, 5, 5]} columns={[1, 2, 3]} sx={{ my: [2] }}>
        <Box>
          <Box sx={{backgroundColor: "secondary", width: "20px", height: "20px", borderRadius: "20px"}}></Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: [2] }}>Test</Text>
          <Text>
            We will help organize and surface diagnostic and serological data,
            working with commercial, state, and academic testing labs.
          </Text>
        </Box>
        <Box>
           <Box sx={{backgroundColor: "primary", width: "20px", height: "20px", borderRadius: "20px"}}></Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: [2] }}>Trace</Text>
          <Text>
            We are building a scalable survey-based solution for contact
            tracing to find and isolate cases earlier in their course of illness.
          </Text>
        </Box>
        <Box>
           <Box sx={{backgroundColor: "muted", width: "20px", height: "20px", borderRadius: "20px"}}></Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: [2] }}>Guide</Text>
          <Text>
            We will provide tools to state and local public health departments
            to inform containment policies at the community level.
          </Text>
        </Box>
      </Grid>
      <Box>
        <Heading as="h3" sx={{ fontSize: [3], my: [4, 5, 5] }}>
          Follow us <Link href="https://twitter.com/nexttrace">@NextTrace</Link>
        </Heading>
      </Box>
    </Layout>
  )
}

export default Index
