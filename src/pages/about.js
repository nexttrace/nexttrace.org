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
          Text text text...
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Background
        </Heading>
        <Text sx={{ mb: [3] }}>
          Text text text...
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Plan
        </Heading>
        <Text>
          Text text text...
        </Text>
      </Box>
    </Layout>
  )
}

export default About
