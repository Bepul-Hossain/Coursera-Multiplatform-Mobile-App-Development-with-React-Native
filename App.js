import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoal = (goalTitle) => {
    setCourseGoals((currnetGoals) => [
      ...currnetGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 25,
  },
});
