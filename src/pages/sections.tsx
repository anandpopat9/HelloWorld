import React from "react"
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Stack, Text, FontWeights } from "office-ui-fabric-react"

interface ISection {
    title: string;
    children: any;
}

const Section: React.FunctionComponent<ISection> = (props: ISection) => {
    return (
      <Stack className="title">
          <Separator alignContent="center">
              <Text variant="large" styles={{ root: { fontWeight: FontWeights.semibold}}}>
                  {props.title}
              </Text>
          </Separator>
          {props.children}
      </Stack>
    )
  }
  
  export default Section;