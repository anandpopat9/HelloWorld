import React from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import { CommunicationColors, SharedColors } from '@uifabric/fluent-theme/lib/fluent/FluentColors';
import "./title.css"

const boldStyle = { root: { fontWeight: FontWeights.semibold, color: CommunicationColors.shade20 } }

const Title: React.FunctionComponent = () => {
  return (
    <Stack className="title">
        <Text variant="xxLarge" styles={boldStyle}>
            Anand Popat
        </Text>
        <Text variant="mediumPlus" styles={{ root: { color: SharedColors.gray20}}}>
            anandpopat@outlook.com | (716) 445-3910 | https://github.com/anandpopat9
        </Text>
    </Stack>
  )
}

export default Title;