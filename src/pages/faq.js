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
          house this work. However, given the need to move quickly in response to COVID-19, we are starting
          immediately with volunteer effort. We will build the organization responsibly as we go, valuing neutrality, transparency, and
          commitment and accountability to the public.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          How is this related to promixity and location-based tracing apps?
        </Heading>
        <Text>
          Our core thesis is that traditional contact tracing — as performed by public
          health officials conducting extensive interviews with positive cases — works
          well. But we simply don't have the human resources to do it at the scale
          necessary to combat COVID-19. So, our starting point is to scale up the classic
          approach, using web-based surveys and innovative approaches to data management,
          rather than invent a new approach. There are approaches being developed to
          implement privacy-preserving proximity-tracking. As these approaches mature, we
          will explore methods to incorporate this data into our approach.
        </Text>
      </Box>
    </Layout>
  )
}

export default FAQ
