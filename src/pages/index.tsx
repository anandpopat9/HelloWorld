import React from "react"
import { Stack } from "office-ui-fabric-react"
import Title from "./title";
import Section from "./sections";
import SubSection from "./subSection";
import "./index.css"

const App: React.FunctionComponent = () => {
  return (
    <Stack
      className="App"
      gap={15}      
    >
      <Title />
      <Section title="Work Experience" children={
        <SubSection title="Mueller Reports, Buffalo, NY" date="July 2018 – Present" subTitle="Software Developer"/>
      } />
    </Stack>
  )
}

export default App
