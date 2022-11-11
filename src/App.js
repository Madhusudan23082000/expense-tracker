import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';



  
  const DUMMY_EXPENSES  = [
    {
      id: "e1",
    title: "car insurance",
    amount: 12.12,
    date: new Date(2022, 8, 16)
  },
  {
    id: "e2",
    title: "rent",
    amount: 13.12,
    date: new Date(2022, 9, 15)
  },
  {
    id: "e3",
    title: "house keeper",
    amount: 15.12,
    date: new Date(2022, 10, 14)
  },
  {
    id: "e4",
    title: "loan",
    amount: 18.12,
    date: new Date(2022, 11, 13)
  }
  ];

  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;