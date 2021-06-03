import React from 'react'
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntyLine from './Components/EntyLine';

import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';

function App() {
  return (
    <>
   <Container>
    <MainHeader title="Budget" type="h1"/>

    <DisplayBalance title="Your Balance:" Value="2,550.53" size="small" />
`   <DisplayBalances />
    <MainHeader title="History" type="h3"/>
     <EntyLine description="income" Value="$822.50" />
     <EntyLine description="expense" Value="$822.50" isExpense/>

    <MainHeader title="Add new transaction" type="h3" />
    <NewEntryForm />
   </Container>
   </>
  );
}

export default App;
