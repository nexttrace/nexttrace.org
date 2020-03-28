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
            We will validate, organize, and recommend diagnostic data by working
            with existing efforts and also directly with commercial, state, and
            academic testing labs. Coordination will ensure integration and
            harmonization.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: "bold", my: 2 }}>Trace</Text>
          <Text>
            We will build a tracing platform that integrates test results
            (positive and negative), sequences, syndromic surveillance, and
            serology. We will bootstrap by coordinating with existing efforts,
            and iteratively build out software, operations, and use cases.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: "bold", my: 2 }}>Guide</Text>
          <Text>
            We will coordinate with academic labs building models and ensure
            they have the best data to work from. We will provide state and
            local decision makers with access to quality, vetted tools and data
            that can target interventions based on tracing.
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
