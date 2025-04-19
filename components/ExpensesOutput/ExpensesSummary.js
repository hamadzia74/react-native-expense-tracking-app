import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../components/constants/styles";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // Reduce is a higher-order function that takes a callback function and an initial value (0 in this case) and returns the accumulated value. The callback function takes two arguments: the accumulator (sum) and the current value (expense). The reduce function iterates over each expense in the expenses array and adds its amount to the sum.
  // The initial value is 0, so the first iteration will add the first expense's amount to 0, and so on.

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
