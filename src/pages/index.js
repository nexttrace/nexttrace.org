import React from "react"

import Layout from "../components/layout"
import { Heading, Box, Text, Grid, Link } from "theme-ui"

const Index = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [7] }}>
        Controlling COVID-19
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [5] }}>
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
      </Box>
      <Box>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Here's how we do it.
        </Heading>
      </Box>
      <Grid gap={5} columns={[1, 2, 3]} sx={{ my: [4] }}>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: "bold", my: 2 }}>Test</Text>
          <Text>
            We validate, organize, and recommend diagnostic data by working
            directly with commercial, state, and academic testing labs. 
            We will coordinate with existing efforts to 
            ensure integration and harmonization.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: "bold", my: 2 }}>Trace</Text>
          <Text>
            We are building a tracing platform to integrate test results
            (positive and negative), sequences, syndromic surveillance, and
            serology. We will bootstrap from existing tools where possible,
            and iteratively build out use cases, software, and data operations.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: "bold", my: 2 }}>Guide</Text>
          <Text>
            We provide state and local decision makers with access to quality, 
            vetted tools that can target interventions based on tracing. 
            To build models, we bring epidemiologists together to share best practices
            and use the best available data.
          </Text>
        </Box>
      </Grid>
      <Box>
        <Heading as="h3" sx={{ fontSize: [4], my: [5] }}>
          Follow us <Link href="https://twitter.com/nexttrace">@NextTrace</Link>{" "}
        </Heading>
      </Box>
    </Layout>
  )
}

export default Index
