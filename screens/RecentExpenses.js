import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function loadExpenses() {
      const expenses = await fetchExpenses();
      // setFetchedExpenses(expenses);
      expensesCtx.setExpenses(expenses);
    }
    loadExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    // const recentExpenses = fetchedExpenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    // Filter expenses that are within the last 7 days
    // Compare the expense date with the date 7 days ago
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;
