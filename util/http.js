import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://your-db-url.firebaseio.com/expenses.json",
    expenseData
  );
  // .then((response) => {
  //   console.log("Expense stored successfully:", response.data);
  // })
  // .catch((error) => {
  //   console.error("Error storing expense:", error);
  // });
}
