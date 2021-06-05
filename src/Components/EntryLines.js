import React from 'react'
import { Container } from 'semantic-ui-react'
import EntyLine from './EntyLine'

function EntryLines({ entries }) {
    return (
       <Container>
        {entries.map((entry) => (
        <EntyLine 
            key={entry.id} {...entry}  />
        )
        )}
       </Container>
    )
}

export default EntryLines
