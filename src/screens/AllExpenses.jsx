import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses.context';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const sortedExpenses = [...expensesCtx.expenses].sort(
    (a, b) => b.date - a.date,
  );

  return (
    <ExpensesOutput
      expenses={sortedExpenses}
      expensesPeriod="Total"
      fallbackText="No registered expense found!"
    />
  );
}

export default AllExpenses;
