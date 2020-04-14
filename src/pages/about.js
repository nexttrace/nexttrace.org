/** @jsx jsx */
import Layout from "../components/layout"
import { jsx, Heading, Box, Text, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

const About = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], fontSize: [6, null, 7] }}>
        Our plan
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [4, null, 5] }}>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Background
        </Heading>
        <Text sx={{ mb: [3] }}>
          The COVID-19 epidemic, like all epidemics, is occurring because the
          disease is contagious enough that each infection, on average, results
          in 2 to 3 further infections. This process creates the exponential
          growth we have seen repeated across countries, states, and cities. Any
          successful intervention must reduce this number of secondary
          transmissions.
        </Text>
        <Text sx={{ mb: [3] }}>
          Current broad-scale social distancing interventions aim to bring this
          number down by decreasing the number of contacts between people across
          the population. These policies work because if people do not encounter
          each other, they cannot spread infection, regardless of whether they
          are infected or not. These interventions are coarse, and must be,
          because we lack accurate estimates of who is infected.
        </Text>
        <Text sx={{ mb: [3] }}>
          The use of social distancing across the United States and many regions
          of the world reveals a gap in our outbreak response: we need broader
          surveillance of COVID-19 spread. A surveillance system is necessary
          both for measuring the effect of these broad interventions, and for
          making these containment policies more targeted. We need a robust
          surveillance system to guide social distancing policies and to adjust
          them based on the intensity of community spread.
        </Text>
        <Text sx={{ mb: [3] }}>
          Unfortunately, broad-scale social distancing is a blunt intervention
          with massive societal and economic costs.
        </Text>
        <Heading
          as="h3"
          sx={{
            borderLeft: "solid",
            borderWidth: 4,
            borderColor: "primary",
            fontSize: [3],
            fontWeight: "bold",
            my: [4],
            pl: [4],
          }}
        >
          If we can move toward interventions targeted at infected and exposed
          individuals we can achieve the same outcomes with less societal
          hardship.
        </Heading>
        <Text sx={{ mb: [3] }}>
          Contact tracing is a targeted intervention proven to reduce
          transmission and curb an infectious disease outbreak. By identifying
          possible exposures of an index case, the exposed individuals can be
          tested and isolated in the event that they are also infected.
        </Text>
        <Text sx={{ mb: [3] }}>
          Contact tracing targets surveillance resources and testing at
          individuals most likely to be positive, and also serves to test
          individuals early in the course of illness when isolation is most
          effective at reducing transmission. Testing exposed individuals may
          also identify asymptomatic infections that would otherwise have gone
          undetected. However, traditional approaches to contact tracing do not
          scale.
        </Text>
        <Text sx={{ mb: [3] }}>
          Traditional approaches rely on a huge investment in time and labor on
          the part of public health staff. Experts must conduct thousands of
          hours of phone interviews, and each new confirmed case requires many
          hours of detailed followup.
        </Text>
        <Text>
          Because of the effort required, contact tracing is typically only
          conducted in the early “containment” phase of an epidemic when there
          are few enough cases for public health staff to handle. Once
          widespread community transmission occurs, there are simply not enough
          resources to keep up.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: [4] }}>
          The plan
        </Heading>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Our work at present
        </Heading>
          <Text sx={{mb: [2]}}>
            Our first deliverable is a survey-based contact tracing platform 
            that can be deployed by public health officials around the United States.
          </Text>
          <Text sx={{mb: [2]}}>
          <Link target='_blank' href="https://docs.google.com/document/d/1inQyAzC8eihq2kCz487Xb7dkjNaWtM3uzL_ceNrgpXI/edit?usp=sharing">
            Read the white paper (Google Doc)
          </Link>
        </Text>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          As our work matures
        </Heading>
        <Text sx={{ mb: [3] }}>
          Beyond simply developing a system that can monitor individual-level
          interactions and exposure events, understanding high resolution
          transmission patterns on a broad scale would allow us to characterize
          the heterogeneity of the epidemic in different areas. While we all are
          facing the same disease, variable levels of immunity, population
          densities, and age structures will create subtly different
          environments for transmission. Therefore, in addition to guiding
          individual-level containment measures after exposure, we will use this
          platform to help inform containment policies at the community level.
        </Text>
        <Text sx={{ mb: [3] }}>
          If you’d like to contribute, please{" "}
          <GatsbyLink to="/contact" sx={{ textDecoration: "none" }}>
            <Link>get in touch</Link>
          </GatsbyLink>
          .
        </Text>
      </Box>
    </Layout>
  )
}

export default About
