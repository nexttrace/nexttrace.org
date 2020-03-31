/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text, Grid, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"

const Index = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [6, null, 7] }}>
        Controlling COVID-19
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [4] }}>
        <Heading as="h3" sx={{ fontSize: [4], lineHeight: "body", mb: [5] }}>
          NextTrace aims to coordinate test results and contact tracing to
          enable public health decisions
        </Heading>
        <Text sx={{ mb: [3] }}>
          Strong social distancing, if widely adopted, works. But stopping
          social distancing will cause a rebound in disease due to lack of
          population immunity. And it may be impossible to maintain until we
          have a vaccine without devastating our economy and society.
        </Text>
        <Text>
          We can manage this epidemic through contact tracing and isolation, at
          scale, using modern technology. But it will require coordination and
          rapid innovation.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Here's how we plan to do it
        </Heading>
        <Text sx={{mb: [3]}}>
          A massive rollout of diagnostic and serological testing is on its way.
          We will help curate that data and build tools that guide targeted
          interventions. We will do this collaboratively, working with existing
          efforts and sharing best practices as we go.
        </Text>
        <Text>
          Read more about <GatsbyLink sx={{ textDecoration: "none" }} to="/about"><Link>what we are doing</Link></GatsbyLink>.
        </Text>
      </Box>
      <Grid gap={[4, 5, 5]} columns={[1, 2, 3]} sx={{ my: [2] }}>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: [2] }}>Test</Text>
          <Text>
            We will help organize and surface diagnostic and serological data,
            working with commercial, state, and academic testing labs.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: [2] }}>Trace</Text>
          <Text>
            We will scope and build software for digital participatory contact
            tracing to find and isolate cases earlier in their course of illness.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: [2] }}>Guide</Text>
          <Text>
            We will deliver models and best practices to state and local decision
            makers to inform containment policies at the community level.
          </Text>
        </Box>
      </Grid>
      <Box>
        <Heading as="h3" sx={{ fontSize: [4], my: [5] }}>
          Follow us <Link href="https://twitter.com/nexttrace">@NextTrace</Link>
        </Heading>
      </Box>
    </Layout>
  )
}

export default Index
