import React from "react"

import Layout from "../components/layout"
import { Heading, Box, Text, Link } from "theme-ui"

const Contact = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [7] }}>
        Contact
      </Heading>
      <Box sx={{ maxWidth: '40em', my: [5] }}>
        <Text sx={{ mb: [3] }}>
          We're looking for collaborators, contributors, and users, and we're looking to move fast.
          We'll soon have a dedicated team, but for now [name] and [name] and [name] are volunteering to help get 
          us off the ground.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Are you a state-level public health or government official?
        </Heading>
        <Text sx={{ mb: [3] }}>
          Contact [name] immediately. Providing valuable information to you is our highest priority.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Are you involved in another COVID-19 software or data project and want to collaborate?
        </Heading>
        <Text sx={{ mb: [3] }}>
          Contact [name] for how to get involved.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Are you a developer / designer / operator and want to contribute?
        </Heading>
        <Text sx={{ mb: [3] }}>
          Contact [name] or sign up with our friends at <Link href='https://www.usdigitalresponse.org/'>US Digital Response</Link>. 
          They can help route people here.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Are you an epidemiologist or scientist?
        </Heading>
        <Text sx={{ mb: [3] }}>
          We want to collaborate closely with others curating data or building models, and help build a shared knowledge base. 
          You can start contributing to our public FAQ immediately, or contact [name].
        </Text>
        
      </Box>
    </Layout>
  )
}

export default Contact
