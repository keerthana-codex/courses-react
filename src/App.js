import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLines from './Components/EntryLines';

import MainHeader from './Components/MainHeader';
import ModelEdit from './Components/ModelEdit';
import NewEntryForm from './Components/NewEntryForm';


const initialEntries = [
  {
    id: 1,
    description:"Work income",
    value: 1000.00,
    isExpense:false
  },
  {
    id: 2,
    description:"Water bill",
    value: 20.00,
    isExpense:true
  },
  {
    id: 3,
    description:"Rent",
    value: 300,
    isExpense:false
  },
  { 
    id: 4,
    description:"Power bill",
    value: 50,
    isExpense:true
  },
  
]

function App() {
  const [ entries, setEntries] = useState(initialEntries);
  const [ description, setDescription ] = useState('');
  const [ value, setValue ] = useState('')
  const [ isExpense, setIsExpense ] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [ entryId, setEntryId ] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  },[isOpen])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if(entry.isExpense) {
        return (totalExpenses += Number(entry.value))
      }
      return (totalIncomes += Number(entry.value))
    });
    setTotal( totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses)
    setIncomeTotal(totalIncomes)
    console.log(`total incomes are: ${totalIncomes} and total expenses are ${totalExpenses}`)
  }, [entries])

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id){
    console.log(`edit entry with id ${id}`);
    if(id){
      const index = entries.findIndex((entry) => entry.id === id)
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(false);
    }
  }

  function addEntry() {
    const result = entries.concat({id: entries.length + 1, description,value})
    setEntries(result)
    resetEntry();
  }

  function resetEntry(){
    setDescription('');
    setValue('');
    setIsExpense(true);
  }
  return (
    <>
   <Container>
    <MainHeader title="Budget" type="h1"/>

    <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />
`   <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} total={total} />
    <MainHeader title="History" type="h3"/>
    <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>
    <MainHeader title="Add new transaction" type="h3" />
    <NewEntryForm 
      addEntry={addEntry} 
      description={description}
      setDescription={setDescription}
      value={value}
      setValue={setValue}
      isExpense={isExpense}
      setIsExpense={setIsExpense}
    />
    <ModelEdit 
      isOpen={isOpen} 
      setIsOpen={setIsOpen}
      description={description}
      setDescription={setDescription}
      value={value}
      setValue={setValue}
      isExpense={isExpense}
      setIsExpense={setIsExpense}
      />
   </Container>
   </>
  );
}

export default App;


