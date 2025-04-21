import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expense-tra-4ac03-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
  // .then((response) => {
  //   console.log("Expense stored successfully:", response.data);
  // })
  // .catch((error) => {
  //   console.error("Error storing expense:", error);
  // });
}
