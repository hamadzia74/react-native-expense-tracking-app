import { View, Text } from "react-native";
import React from "react";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // Reduce is a higher-order function that takes a callback function and an initial value (0 in this case) and returns the accumulated value. The callback function takes two arguments: the accumulator (sum) and the current value (expense). The reduce function iterates over each expense in the expenses array and adds its amount to the sum.
  // The initial value is 0, so the first iteration will add the first expense's amount to 0, and so on.

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
