import React from 'react'
import { Container } from 'semantic-ui-react'
import EntyLine from './EntyLine'

function EntryLines({entries, deleteEntry,editEntry}) {
    return (
       <Container>
        {entries.map((entry) => (
        <EntyLine 
            key={entry.id} {...entry} 
            deleteEntry={deleteEntry} 
            editEntry={editEntry}
            />
        )
        )}
       </Container>
    )
}

export default EntryLines
