import React from "react"
import { Text, getNativeProps } from "office-ui-fabric-react"
import "./bulletPoints.css"

interface IBulletPoints {
    bulletPoints: Array<string>;
}

const BulletPoints: React.FunctionComponent<IBulletPoints> = (props : IBulletPoints) => {
  return (
    <ul>
        {props.bulletPoints.map(x => {
            return (
                <li>
                    <Text>
                        {x}
                    </Text>
                </li>
            );
        })}
    </ul>
  )
}

export default BulletPoints;