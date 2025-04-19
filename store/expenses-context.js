import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-01-01"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 39.99,
    date: new Date("2023-01-02"),
  },
  {
    id: "e3",
    description: "A pair of socks",
    amount: 9.99,
    date: new Date("2023-01-03"),
  },
  {
    id: "e4",
    description: "A pair of gloves",
    amount: 19.99,
    date: new Date("2023-01-04"),
  },
  {
    id: "e5",
    description: "A pair of sunglasses",
    amount: 29.99,
    date: new Date("2023-02-05"),
  },
  {
    id: "e6",
    description: "A pair of headphones",
    amount: 89.99,
    date: new Date("2023-01-06"),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-06-07"),
  },
  {
    id: "e8",
    description: "A pair of pants",
    amount: 39.99,
    date: new Date("2023-01-19"),
  },
  {
    id: "e9",
    description: "A pair of socks",
    amount: 9.99,
    date: new Date("2023-04-09"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString(); // psuedo unique id
      return [...state, { id: id, ...action.payload }];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
