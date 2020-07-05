import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalIn = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inpucontainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText={goalIn}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inpucontainer: {
    borderBottomColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
