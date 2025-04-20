import { StyleSheet, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  function amountChangeHandler(enteredValue) {
    console.log(enteredValue);
  }
  function dateChangeHandler(enteredValue) {
    console.log(enteredValue);
  }
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: dateChangeHandler,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, default is true
          // autoCapitalize: "none",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
