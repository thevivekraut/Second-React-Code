import './ExpenseItem.css';

function ExpenseItem(expense) {
  const expenseDate = new Date(2021,2,17);
  const expenseTitle ='Car Insurance';
//   const expenseAmount = 294.67;
  const LocationOfExpenditure = 'india';

    return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__description">{LocationOfExpenditure}</div>
      <div className="expense-item__price">${expense.amount}</div>
    </div>
    </div>
  );
}

export default ExpenseItem;
