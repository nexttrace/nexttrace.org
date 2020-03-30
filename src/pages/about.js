/** @jsx jsx */
import Layout from "../components/layout"
import { jsx, Heading, Box, Text } from "theme-ui"

const About = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [7] }}>
        What we do
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [5] }}>
        <Text sx={{ mb: [3] }}>
          [ Brief paragraph on the plan ]
        </Text>
        <Text>
          Full outline of our working plan coming soon.
        </Text>
      </Box>
    </Layout>
  )
}

export default About
