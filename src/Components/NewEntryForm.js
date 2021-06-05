import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import useEntryDetail from '../hooks/useEntryDetail';

function NewEntryForm(){
const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
} = useEntryDetail();

    return (
        <div>
            <Form unstackable>
                <EntryForm 
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense}
                    />
                <ButtonSaveOrCancel 
                    addEntry={addEntry} 
                />
            </Form>
        </div>
    )
}

export default NewEntryForm
