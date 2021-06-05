import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLines from './Components/EntryLines';

import MainHeader from './Components/MainHeader';
import ModelEdit from './Components/ModelEdit';
import NewEntryForm from './Components/NewEntryForm';



function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState({});
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);
 

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id)
    setEntry(entries[index]);
  },[isOpen, id]);

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
  }, [entries]);

return (
    <>
   <Container>
    <MainHeader title="Budget" type="h1"/>

    <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />
`   <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} total={total} />
    <MainHeader title="History" type="h3"/>
    <EntryLines entries={entries} />
    <MainHeader title="Add new transaction" type="h3" />
    <NewEntryForm />
    <ModelEdit isOpen={isOpen} {...entry}/>
   </Container>
   </>
  );
}

export default App;


