import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text, Link } from "theme-ui"

const Contact = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], fontSize: [6, null, 7] }}>
        Contact
      </Heading>
      <Box sx={{ maxWidth: '40em', my: [4, null, 5] }}>
        <Text sx={{ mb: [3] }}>
          We're looking for collaborators, contributors, and users, and we're looking to move fast.
          We'll soon have a dedicated team, but for now we're mainly volunteers. Please fill out
          {" "}<Link href="https://docs.google.com/forms/d/e/1FAIpQLSdnlm3h1ct00VugxzXazpE_TYVvSW4W3aqAK5QPffuPtxFyJQ/viewform?usp=pp_url">this Google form</Link> if you'd like to get in touch. We'd love to hear from several groups of people!
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Are you a state-level public health or government official?
        </Heading>
        <Text sx={{ mb: [3] }}>
          Providing valuable information to you is our highest priority. Fill out the form,
          or <Link href="mailto:hello@nexttrace.org">email us</Link> directly.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Are you involved in another COVID-19 software or data project and want to collaborate?
        </Heading>
        <Text sx={{ mb: [3] }}>
          Fill out the form and desribe your project and how we might work together.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Are you a developer / designer / operator and want to contribute?
        </Heading>
        <Text sx={{ mb: [3] }}>
          Fill our the form here with your skills and interests, or sign up with our friends
          at <Link href='https://www.usdigitalresponse.org/'>US Digital Response</Link>,
          who are helping route people to projects like this one.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Are you an epidemiologist or scientist?
        </Heading>
        <Text sx={{ mb: [3] }}>
          We want to collaborate closely with others curating data or building models, and help build a shared knowledge base.
          Fill out the form and we'll try to get you involved.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [3] }}>
          Are you a funder?
        </Heading>
        <Text sx={{ mb: [3] }}>
          Please reach out! We'll need support. You can <Link href="mailto:hello@nexttrace.org">email us</Link> directly.
        </Text>
      </Box>
    </Layout>
  )
}

export default Contact
