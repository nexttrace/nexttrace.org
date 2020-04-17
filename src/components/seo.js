import React from "react"
import { Title, Link, Meta } from "react-head"
import favicon from "../favicon.png"

const Seo = () => (
  <>
    <Title>NextTrace</Title>
    <Meta name="description" content="Controlling COVID-19. Test. Trace. Guide." />
    <Link rel="canonical" content="https://nexttrace.org/" />
    <Link rel="icon" href={favicon}/>
  </>
)

export default Seo
