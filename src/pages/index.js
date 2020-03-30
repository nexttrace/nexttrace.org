/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text, Grid, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"

const Index = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [7] }}>
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
          A massive rollout of diagnostic and serological testing will soon be available.
          NextTrace will curate data and build tools to help guide decision makers and coordinate the response. 
          We will do it collaboratively, working with existing efforts and sharing best practices.
        </Text>
        <Text>
          Read more about <GatsbyLink sx={{ textDecoration: "none" }} to="/about"><Link>what we do</Link></GatsbyLink>.
        </Text>
      </Box>
      <Grid gap={5} columns={[1, 2, 3]} sx={{ my: [2] }}>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: 2 }}>Test</Text>
          <Text>
            We validate and organize diagnostic data, working
            with commercial, state, and academic testing labs. 
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: 2 }}>Trace</Text>
          <Text>
            We build tracing software to integrate test results, sequences, 
            syndromic surveillance, and serology.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: "bold", my: 2 }}>Guide</Text>
          <Text>
            We communicate and validate best practices and tools to state and local decision makers.
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
