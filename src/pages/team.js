import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text, Link } from "theme-ui"

const Team = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], fontSize: [6, null, 7] }}>
        Our team
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [4, null, 5] }}>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Lead
        </Heading>
        <Text sx={{ mb: [3] }}>
          Project lead <Link href="https://twitter.com/trvrb">Trevor
          Bedford</Link> {" "} at the Fred Hutchinson Cancer Research Center is
          at the forefront of infectious disease modeling, computation and
          genomics. He is co-founder of the {" "}<Link
          href="https://nextstrain.org/">Nextstrain</Link> project, which has
          lead real-time analysis of COVID-19 genomic data, providing a novel
          view into the pandemic that would have been absent otherwise. His work
          with the Seattle Flu Study revealed community spread of COVID-19 that
          was missed by traditional surveillance and his alerting bought the US
          critical time to mount a stronger outbreak response.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Members
        </Heading>
        <Text sx={{ mb: [3] }}>
          We will soon have dedicated staff for this new effort, focused on operational scale out,
          technical infrastructure, and community engagement. To get started,
          we are leveraging help from a volunteer team, including
          {" "}<Link href="https://www.linkedin.com/in/leah-alpert">Leah Alpert</Link>,
          {" "}<Link href="https://twitter.com/alliblk">Alli Black</Link>,
          {" "}<Link href="https://twitter.com/dbsmasher">Silvia Botros</Link>,          
          {" "}<Link href="https://twitter.com/rebeccaegger">Rebecca Egger</Link>,
          {" "}<Link href="https://twitter.com/thefreemanlab">Jeremy Freeman</Link>,
          {" "}<Link href="https://twitter.com/marcprecipice">Marc Hedlund</Link>,
          {" "}<Link href="https://twitter.com/colinmegill">Colin Megill</Link>,
          {" "}<Link href="https://twitter.com/miguelp1120">Miguel Paredes</Link>,
          and {" "}<Link href="https://twitter.com/trs">Thomas Sibley</Link>.
        </Text>
         <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Partners
        </Heading>
        <Text sx={{ mb: [3] }}>
          We're not doing this alone. We have critical advising from
          {" "}<Link href="https://twitter.com/dylanbgeorge">Dylan George</Link> (In-Q-Tel),
          {" "}<Link href="https://twitter.com/meyerslab">Lauren Meyers</Link> (UT Austin),
          {" "}<Link href="https://twitter.com/alexandraphelan">Alex Phelan</Link> (Georgetown University),
          {" "}<Link href="https://twitter.com/cmyeaton">Caitlin Rivers</Link> (Johns Hopkins University),
          and <Link href="http://misms.net/staff/cecile-viboud/">Cecile Viboud</Link> (NIH Fogarty Center).
        </Text>
      </Box>
    </Layout>
  )
}

export default Team
