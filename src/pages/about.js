/** @jsx jsx */
import Layout from "../components/layout"
import { jsx, Heading, Box, Text } from "theme-ui"

const About = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [6, null, 7] }}>
        What we do
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [5] }}>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Background
        </Heading>
        <Text sx={{ mb: [3] }}>
          The COVID-19 epidemic, like all epidemics, is occurring because the
          disease is contagious enough that each infection, on average, results
          in an additional 2 to 3 further infections. This process continues on,
          yielding the patterns of exponential growth that we have seen repeated
          across many countries, states, and cities. To be successful, any
          intervention needs to bring this number of secondary transmissions
          down. 
        </Text>
        <Text sx={{ mb: [3] }}>
          Current broad-scale social distancing interventions aim to bring this number
          down by reducing the number of contacts that occur between people across the
          population. These policies work under the premise that, regardless of whether a
          person is infected or not, if people do not encounter other individuals, they
          cannot pass on or receive the infection. This intervention is broad, and needs
          to be, because we don’t currently have highly accurate estimates of how many
          people, and which people, are infected. These interventions have been deployed
          across the United States and many regions of the world, which points to a gap in
          this current outbreak. We need broader surveillance of COVID-19 spread. This
          system is necessary both for measuring the effect that these broad interventions
          are having and for refining these containment policies such that they could be
          more targeted. A highly effective surveillance system is critical for guiding
          social distancing policies and  for titrating their breadth against the
          intensity of community spread.
        </Text>
        <Text sx={{ mb: [3] }}>
          However, these broad-scale interventions are necessarily blunt
          instruments and have massive societal costs. 
        </Text>
        <Heading as="h3" sx={{ borderLeft: "solid", borderWidth: 4, borderColor: "primary", 
          fontSize: [3], fontWeight: "bold", my: [4], pl: [4] }}>
          If we can move from broad-scale interventions to interventions targeted at just infected
          and exposed individuals we can achieve the same outcomes, but with
          much less societal hardship.
        </Heading>
        <Text sx={{ mb: [3] }}>
          <b>Contact tracing</b> is a targeted intervention proven to reduce transmission and curb an
          infectious disease outbreak. By identifying possible exposures of an index case, these
          exposures can be tested and isolated in the event that they are also infected. Contact
          tracing targets surveillance resources and  testing at individuals most likely to be
          positive, and also serves to test individuals early in the course of illness when isolation
          is most effective at reducing onward transmission. Testing exposed individuals may also
          identify asymptomatic infections that would otherwise have gone undetected. <b>However, traditional 
          approaches to contact tracing do not scale</b>. They rely on a huge investment in
          time and labor in which public health staff conduct thousands of hours of phone interviews
          to assess symptoms and exposure history among the network of persons under investigation.
          Each new confirmed case requires many hours of detailed followup to fully interview
          contacts. Because of this, contact tracing is typically only conducted in the early
          “containment” phase of an epidemic when there are few enough cases that public health staff
          can keep up. Once widespread community transmission occurs, there are simply not sufficient
          resources for this traditional contact tracing to be more than a drop in the bucket relative
          to the amount of overall transmission occurring. 
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: [4] }}>
          Here, we propose to enable digital participatory contact tracing. 
        </Heading>
        <Text>
          There are three components. 
        </Text>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Test
        </Heading>
        <Text>
          To conduct accurate surveillance and target interventions, we will
          need to massively increase our testing capacity. This scale up is now
          being tackled by a combination of state public health  labs, hospital
          testing, and commercial laboratories. However, relying on a
          hierarchical reporting structure is fragile and may not result in
          timely distribution of surveillance results. We propose moving to a
          decentralized reporting system in which any lab performing diagnostic
          testing can broadcast test results in an anonymized fashion.
          Surveillance systems and participatory contact tracing can be built on
          top of this decentralized network. 
        </Text>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Trace
        </Heading>
        <Text>
          We propose a system in which, if an individual is confirmed to have
          COVID-19, they can choose to register their case in an online platform. If they
          register, the  platform will warn other individuals who were possibly exposed to
          this infection that they should seek testing. Likely the platform would do this
          within a digital context, using phone location and proximity data, in a privacy
          preserving fashion, to detect possible exposure events. The app / online
          platform would essentially conduct a coarse version of what expert
          epidemiologists do with  interviews; it would build a contact history for the
          confirmed and registered case, listing out contact events with other individuals
          that could potentially have resulted in transmission. While this automated
          system would be less exact than expert interviews and daily visits to exposed
          individuals,  this system has the potential to scale massively. This could
          significantly impact an epidemic even once widespread community transmission has
          begun.  
        </Text>
        <Heading as="h3" sx={{ fontSize: [3], fontWeight: "bold", my: 4 }}>
          Guide
        </Heading>
        <Text>
          Beyond simply developing a system that can monitor individual level
          interactions and exposure events, understanding high resolution transmission
          patterns on a broad scale would allow us to characterize the heterogeneity of
          the epidemic in different areas. While we all are facing the same disease,
          variable population densities, use of public transport, and age structures will
          create subtly different environments for transmission. Therefore, in addition to
          guiding individual-level containment measures after exposure, we will use this
          platform to help inform containment policies at the community level.  
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: [4] }}>
          These are expansive and ambitious goals. 
        </Heading>
        <Text>
          But we are starting in a focused area. We
          propose to initiate development of this platform within a single
          community, rapidly iterating on the system and evaluating its
          effectiveness in guiding individual-level responses and
          community-level decision making before scaling out more broadly. We
          recognize that there are a number of other groups working on similar
          efforts towards digital contact tracing, including COVID Watch,
          TraceTogether, and Safe Paths, to name just three. It is critical that
          we scale up response efforts quickly and efficiently, and it is not
          our intention to duplicate progress made by others already.  Rather,
          we plan to collaborate with this emerging community. Our first steps
          will be a landscape analysis to ascertain which pieces of the stack
          most need our attention. If you’d like to contribute, please [get in
          touch](contact).
        </Text>
      </Box>
    </Layout>
  )
}

export default About
