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
          NextTrace coordinates test results and tracing to enable public health
          decisions.
        </Heading>
        <Text sx={{ mb: [3] }}>
          Strong social distancing, if widely adopted, works. But stopping
          social distancing will cause a rebound due to a lack of population
          immunity. And it may be impossible to maintain until we have a vaccine
          without devastating our economy and society.
        </Text>
        <Text>
          We can manage this epidemic through contact tracing and isolation, at
          scale, using modern technology. But it will take centralization and
          coordination.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Here's how we do it.
        </Heading>
        <Text sx={{mb: [3]}}>
          A massive rollout of diagnostic and serological testing is coming soon.
          We will help curate that data and build tools that guide targeted interventions. 
          We will do this collaboratively, working with existing efforts and sharing best practices as we go.
        </Text>
        <Text>
          Read more about <GatsbyLink sx={{ textDecoration: "none" }} to="/about"><Link>what we do</Link></GatsbyLink>.
        </Text>
      </Box>
      <Grid gap={5} columns={[1, 2, 3]} sx={{ my: [2] }}>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: 2 }}>Test</Text>
          <Text>
            We will help validate and organize diagnostic and serological data, working
            with commercial, state, and academic testing labs. 
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: 2 }}>Trace</Text>
          <Text>
            We will scope and build tracing software to integrate test results, sequences, 
            syndromic surveillance, and serology.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: 2 }}>Guide</Text>
          <Text>
            We will communicate and validate best practices and information to the state and local decision makers that need it.
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
