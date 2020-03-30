import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text } from "theme-ui"

const FAQ = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [7] }}>
        Resources
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [5] }}>
        <Text>
          This is where we'll organize documents on data, tools, and best practices.
        </Text>
        <Text>
          More coming soon!
        </Text>
      </Box>
    </Layout>
  )
}

export default FAQ
