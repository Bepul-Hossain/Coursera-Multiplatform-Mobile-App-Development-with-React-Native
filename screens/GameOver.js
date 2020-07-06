import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text> Number of round:{props.roundsNumber}</Text>
      <Text> Nuber was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onResstart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOver;
