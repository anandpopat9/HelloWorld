import React from "react"
import { Stack, Text,  FontWeights, getNativeProps } from "office-ui-fabric-react"
import BulletPoints from "./bulletPoints";
import "./subSection.css"

interface ISubSection {
    title: string;
    date?: string;
    subTitle?: string;
    bulletPoints?: Array<string>;
}
const SubSection: React.FunctionComponent<ISubSection> = (props: ISubSection) => {
  return (  
    <Stack className="subSection">
        <Stack horizontal>
            <Stack.Item>
                <Text variant="mediumPlus" style={{ fontWeight: FontWeights.semibold }}>
                    {props.title}
                </Text>
            </Stack.Item>
            <Stack.Item className="floatRight">
                <Text variant="mediumPlus">
                    {props.date}
                </Text>
            </Stack.Item>
        </Stack>
        <Text variant="mediumPlus" style={{fontWeight: FontWeights.semibold}}>{props.subTitle}</Text>
        <BulletPoints bulletPoints={props.bulletPoints} />
    </Stack>
  )
}

export default SubSection;