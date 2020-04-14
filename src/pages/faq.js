/** @jsx jsx */
import Layout from "../components/layout"
import { jsx, Heading, Box, Text } from "theme-ui"

const FAQ = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], fontSize: [6, null, 7] }}>
        FAQ
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [4, null, 5] }}>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          How is this project structured?
        </Heading>
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
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          How is this related to location-based tracing apps?
        </Heading>
        <Text>
          Our core thesis is that traditional contact tracing — as performed by
          public health officials conducting extensive interviews with positive
          cases — works well. But we simply don't have the human resources to do
          it at scale. So, our starting point is to scale up the classic
          approach, using digital surveys and other web-based technology 
          to fill in the gaps, rather than invent a new approach. 
          But as location-tracking apps and approaches mature, 
          we will explore methods to incorporate this data 
          into our approach.
        </Text>
      </Box>
    </Layout>
  )
}

export default FAQ
