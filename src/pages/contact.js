import React from "react"

import Layout from "../components/layout"
import { Heading, Box, Text, Grid, Link } from "theme-ui"

const Contact = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [7] }}>
        About
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [5] }}>
        <Text sx={{ mb: [3] }}>
          Project lead Trevor Bedford is at the forefront of infectious disease
          modeling, computation and genomics. He is co-founder of the Nextstrain
          project which has centralized analysis of COVID-19 genomic data,
          providing a view into the pandemic that would have been missing
          otherwise. His work with the Seattle Flu Study revealed community
          spread of COVID-19 that was missed by traditional surveillance and his
          alerting bought the US critical time to mount a stronger outbreak
          response.
        </Text>
        <Text sx={{ mb: [3] }}>
          We are quickly assembling a volunteer team for this new effort,
          focused on operational scale out, technical infrastructure, and
          community engagement. There is an outpouring of interest from the
          technology community to get involved in these kinds of efforts. With a
          centralized strategy, and through close partnerships with others, we
          can help orient that force.
        </Text>
        <Text>
          We plan to form an independent non-profit with dedicated staffing to
          house this work, in a way that ensures neutrality, transparency, and
          commitment and accountability to the public. Accountability is
          critical when working with human subject data and potentially
          sensitive location data, and is the reason to house this in an
          independently governed non-profit as opposed to a for-profit company
          or government agency. But time is of the essence, so we are starting
          immediately, and will build the org responsibly as we go.
        </Text>
      </Box>
    </Layout>
  )
}

export default Contact
