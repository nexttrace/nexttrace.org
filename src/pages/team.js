import React from "react"
import Layout from "../components/layout"
import { Heading, Box, Text, Link } from "theme-ui"

const Team = () => {
  return (
    <Layout>
      <Heading as="h1" sx={{ my: [5], fontSize: [7] }}>
        Who we are
      </Heading>
      <Box sx={{ maxWidth: "40em", my: [5] }}>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Lead
        </Heading>
        <Text sx={{ mb: [3] }}>
          Project lead <Link href="https://twitter.com/trvrb">Trevor Bedford</Link> is 
          at the forefront of infectious disease modeling, computation and genomics. He is co-founder of 
          the <Link href="https://nextstrain.org/">NextStrain</Link> project 
          which has centralized analysis of COVID-19 genomic data,
          providing a view into the pandemic that would have been missing
          otherwise. His work with the Seattle Flu Study revealed community
          spread of COVID-19 that was missed by traditional surveillance and his
          alerting bought the US critical time to mount a stronger outbreak
          response.
        </Text>
        <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Members
        </Heading>
        <Text sx={{ mb: [3] }}>
          We will soon have dedicated staff for this new effort, focused on operational scale out, 
          technical infrastructure, and community engagement. To we get started,
          we are leveraging help from a volunteer team, including 
          {" "}<Link href="https://twitter.com/alexandraphelan">Alex Phelan</Link>, 
          {" "}<Link href="https://twitter.com/cmyeaton">Caitlin Rivers</Link>, 
          {" "}<Link href="http://misms.net/staff/cecile-viboud/">Cecile Viboud</Link>, 
          {" "}<Link href="https://twitter.com/dylanbgeorge">Dylan George</Link>, 
          {" "}<Link href="https://twitter.com/thefreemanlab">Jeremy Freeman</Link>,
          and <Link href="https://twitter.com/colinmegill">Colin Megill</Link>.
        </Text>
         <Heading as="h3" sx={{ fontSize: [4], fontWeight: "bold", my: 4 }}>
          Partners
        </Heading>
        <Text sx={{ mb: [3] }}>
          We're not doing this alone. [NEED TO FILL IN]
        </Text>
      </Box>
    </Layout>
  )
}

export default Team
