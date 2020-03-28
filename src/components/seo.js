import React from "react"
import { Title, Link, Meta } from "react-head"

const Seo = () => (
  <>
    <Title>NextTrace</Title>
    <Meta name="description" content="Controlling COVID-19. Test. Trace. Guide." />
    <Link rel="canonical" content="https://nexttrace.org/" />
    <Link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/microscope_1f52c.png"/>
  </>
)

export default Seo