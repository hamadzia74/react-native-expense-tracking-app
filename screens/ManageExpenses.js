import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // Convert to boolean
  // isEditing will be true if editedExpenseId is not undefined or null
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

export default ManageExpenses;
