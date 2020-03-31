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
      </Box>
      <i>More coming soon!</i>
    </Layout>
  )
}

export default FAQ
