import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumer, setuserNumer] = useState();
  const [guessRounds, setguessRounds] = useState(0);

  const cofigurenewgamHandler =()=>{
    setguessRounds(0)
    setuserNumer(null);
  }

  const startGameHandler = (selectedNumber) => {
    setuserNumer(selectedNumber);
    setguessRounds(0);
  };
  const gameOverHandler = (numOfRounds) => {
    setguessRounds(numOfRounds);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumer && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumer} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumer} onResstart={cofigurenewgamHandler}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
