import React from "react"
import { Stack, Text,  FontWeights, getNativeProps } from "office-ui-fabric-react"
import BulletPoints from "./bulletPoints";
import "./subSection.css"

interface ISubSection {
    title: string;
    date: string;
    subTitle: string;
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
        <BulletPoints bulletPoints={[
            "Developed UX/UI for a complex web-application using ReactJS, JavaScript, HTML and CSS. Made custom components and libraries to achieve the desired brand standard",
            "Created APIs and business logic of the web application to get, store and edit information in the database. Also wrote SQL scripts and stored procedures to maintain and grow the database",
            "Used latest technology and best practices to develop software in an agile team environment where much importance is given to software design techniques and code reviews"
            ]} />
    </Stack>
  )
}

export default SubSection;