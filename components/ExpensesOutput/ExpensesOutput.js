import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";

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

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
