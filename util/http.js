import axios from "axios";

const BACKEND_URL =
  "https://your-db-url.firebaseio.com/expenses.json";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
  // .then((response) => {
  //   console.log("Expense stored successfully:", response.data);
  // })
  // .catch((error) => {
  //   console.error("Error storing expense:", error);
  // });
}

export async function fetchExpense(expenseData) {
  const response = await axios.get(BACKEND_URL + "/expenses.json", expenseData);
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

// promise is an object that will eventually give you access to some other data fetched from the backend.
