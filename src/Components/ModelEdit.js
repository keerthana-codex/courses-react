import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import { closeEditModal } from '../actions/modals.actions'
import useEntryDetail from '../hooks/useEntryDetail'
import EntryForm from './EntryForm'

function ModelEdit({ isOpen,description,value,isExpense,id }) {
     const dispatch = useDispatch() 
     const entryUpdate = useEntryDetail(description,value,isExpense)
    return (
    <Modal open={isOpen}>
        <Modal.Header>Edit entry</Modal.Header>
        <Modal.Content>
            <EntryForm 
                 description={entryUpdate.description}
                 setDescription={entryUpdate.setDescription}
                 value={entryUpdate.value}
                 setValue={entryUpdate.setValue}
                 isExpense={entryUpdate.isExpense}
                 setIsExpense={entryUpdate.setIsExpense}
            />
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
            <Button onClick={() => entryUpdate.updateEntry(id)} primary>ok</Button>
        </Modal.Actions>
    </Modal>
    )
}

export default ModelEdit
