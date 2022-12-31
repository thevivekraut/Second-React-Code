import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { 
      id: "e1",
      title: "shopping", 
      amount: 40, 
      date: new Date(2020, 7, 14) 
    },
    { 
      id: "e2", 
      title: "holiday", 
      amount: 400, 
      date: new Date(2022, 7, 44) 
    },
    {
      id: "e3",
      title: "car serviceamount",
      amount: 50,
      date: new Date(2022, 10, 2),
    },
    {
      id: "e4",
      title: "car insurance",
      amount: 500,
      date: new Date(2022, 3, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
    
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>

      {/* {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))} */}
    </div>
  );
}

export default App;
