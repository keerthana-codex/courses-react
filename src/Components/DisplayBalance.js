import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({title,Value,color="black",size="tiny"}) {
    return (
        <div>
             <Statistic size={size} color={color}>
               <Statistic.Label style={{ textAlign: 'left'}}>
                 {title}
               </Statistic.Label>
               <Statistic.Value>{Value}</Statistic.Value>
             </Statistic>
        </div>
    )
}

export default DisplayBalance
