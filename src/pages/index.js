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
         When an individual is diagnosed with COVID-19, we can ask who they came
         in contact with, or may have given it to, and encourage them to isolate
         and get tested. That process, called {' '}
         <Link href='https://en.wikipedia.org/wiki/Contact_tracing'><b>contact tracing</b></Link>, 
         forms of the basis of classic
         epidemiological methods for controlling infectious disease. We know it
         works, we just need to do it with everyone. 
        </Text>
        <Text sx={{mb: [3]}}>
          Our first deliverable is a complete system for <b>contact tracing at
          scale</b> that can be deployed in the short term by public health 
          officials around the country. We are a team of scientists, epidemiologists, 
          and software developers. We are leveraging web-based survey instrumentation,
          messaging, and other tech components. We are using modern technology, but
          deeply grounded in science.
        </Text>
        <Text sx={{mb: [3]}}>
          Our approach does not require advanced location-based tracking to
          work, though can incorporate it as it becomes available. We are working 
          collaboratively with other efforts and sharing best practices as we go.
        </Text>
        <Text>
          Read more about <GatsbyLink sx={{ textDecoration: "none" }} to="/about"><Link>what we are planning</Link></GatsbyLink>.  
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
