import React, { useState } from 'react'
import styled from 'styled-components'

const Styles = styled.div`

`;

export default () => {
    const [curValue, setCurValue] = useState(50)
    return(
        <Styles>
            <input className="slider" type="range" min={0} max={255} value={curValue} onChange={e => setCurValue(e.target.value)} />
            <div className="value">{curValue}</div>
        </Styles>
    )
}