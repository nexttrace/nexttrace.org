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
          because we lack  accurate estimates of who is infected. 
        </Text>
        <Text sx={{ mb: [3] }}>
          The use of social distancing across the United States and many regions of the
          world reveals a gap in our outbreak response: we need broader
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
        <Heading as="h3" sx={{ borderLeft: "solid", borderWidth: 4, borderColor: "primary",
          fontSize: [3], fontWeight: "bold", my: [4], pl: [4] }}>
          If we can move toward interventions targeted at infected and exposed
          individuals we can achieve the same outcomes with less societal
          hardship.
        </Heading>
        <Text sx={{ mb: [3] }}>
          <b>Contact tracing</b> is a targeted intervention proven to reduce
          transmission and curb an infectious disease outbreak. By identifying
          possible exposures of an index case, the exposed individuals can be
          tested and isolated in the event that they are also infected.
        </Text>
        <Text sx={{ mb: [3] }}>
          Contact tracing targets surveillance resources and  testing at individuals
          most likely to be positive, and also serves to test individuals early
          in the course of illness when isolation is most effective at reducing
          transmission. Testing exposed individuals may also identify
          asymptomatic infections that would otherwise have gone undetected.{" "}
          <b>However, traditional approaches to contact tracing do not
          scale</b>.
        </Text>
        <Text sx={{ mb: [3] }}>
          Traditional approaches rely on a huge investment in time and labor on
          the part of public health staff. Experts must conduct thousands of hours
          of phone interviews, and each new confirmed case requires many hours
          of detailed followup. 
        </Text>
        <Text>
          Because of the effort required, contact tracing is typically only
          conducted in the early “containment” phase of an epidemic when there
          are few enough cases for public health staff to handle. Once
          widespread community transmission occurs, there are simply not
          enough resources to keep up.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: [4] }}>
          The plan: digital participatory contact tracing
        </Heading>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Test
        </Heading>
        <Text>
          To conduct accurate surveillance and target interventions, we will
          need to massively increase our testing capacity. This scale-up is now
          being tackled by a combination of state public health  labs, hospital
          testing, and commercial laboratories. However, relying on a
          hierarchical reporting structure is fragile and may not result in
          timely distribution of surveillance results. We propose moving to a
          decentralized reporting system in which any lab performing diagnostic
          testing can broadcast test results in an anonymized fashion.
          Surveillance systems and participatory contact tracing can be built on
          top of this decentralized network. Additionally, we propose a wide-scale 
          roll out of serological testing that would determine someone’s immune status.
        </Text>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Trace
        </Heading>
        <Text>
          We propose a system in which, if an individual is confirmed to have
          COVID-19, they can choose to register their case in an online
          platform. If they register, the  platform will warn other individuals
          who were possibly exposed to this infection that they should seek
          testing, using cell phone location and proximity data to detect
          possible exposure events while ensuring that privacy is preserved and
          data is secure. The app / online platform would essentially conduct a
          coarse version of what expert epidemiologists do with interviews; it
          would build a contact history for the registered case,
          listing out contact events with other individuals that could
          potentially have resulted in transmission. While this automated system
          would be less exact than expert interviews and daily visits to exposed
          individuals, it has the potential to scale massively. This could
          significantly impact an epidemic even once widespread community
          transmission has begun.
        </Text>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Guide
        </Heading>
        <Text>
          Beyond simply developing a system that can monitor individual-level
          interactions and exposure events, understanding high resolution
          transmission patterns on a broad scale would allow us to characterize
          the heterogeneity of the epidemic in different areas. While we all are
          facing the same disease, variable levels of immunity, population densities,  
          and age structures will create subtly different
          environments for transmission. Therefore, in addition to guiding
          individual-level containment measures after exposure, we will use this
          platform to help inform containment policies at the community level.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: [4] }}>
          How we start
        </Heading>
        <Text sx={{mb: [3] }}>
          These are expansive and ambitious goals, but we are starting in a focused area. We propose to initiate
          development of this platform within a single community, rapidly
          iterating on the system and evaluating its effectiveness in guiding
          individual-level responses and community-level decision making before
          scaling out more broadly.
        </Text>
        <Text sx={{mb: [3] }}>
          We recognize that there are a number of
          other groups working on similar efforts towards digital contact
          tracing, including COVID Watch, TraceTogether, and Safe Paths, to name
          just three. It is critical that we scale up response efforts quickly
          and efficiently, and it is not our intention to duplicate progress
          made by others already.  Rather, we plan to collaborate with this
          emerging community.
        </Text>
        <Text>
          Our first steps will be a landscape analysis to
          ascertain which pieces of the stack most need our attention. If you’d
          like to contribute, please <GatsbyLink to="/contact" sx={{ textDecoration: "none" }}>
          <Link>get in touch</Link></GatsbyLink>.
        </Text>
      </Box>
    </Layout>
  )
}

export default About
