import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text, Link } from "theme-ui"

const FAQ = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], fontSize: [6, null, 7] }}>
        Resources
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [4, null, 5] }}>
        <Text sx={{ mb: [3] }}>
          This is where we'll document data, tools, and best practices.
        </Text>
        <Text>
          <Link target='_blank' href="https://docs.google.com/document/d/1inQyAzC8eihq2kCz487Xb7dkjNaWtM3uzL_ceNrgpXI/edit?usp=sharing">
            Project white paper (Google Doc)
          </Link>
        </Text>
      </Box>
    </Layout>
  )
}

export default FAQ
