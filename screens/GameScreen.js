import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import NumberContainer from "../components/game/NumberContainer";
import Instructions from "../components/ui/Instructions";

const generateRandom = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  if (random === exclude) return generateRandom(min, max, exclude);

  return random;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onOver }) => {
  const [guess, setGuess] = useState(
    generateRandom(minBoundary, maxBoundary, userNumber)
  );

  useEffect(() => {
    if (guess !== userNumber) return;

    onOver(true);
  }, [guess, userNumber, onOver]);

  const nextGuess = (direction) => () => {
    if (
      (direction === "lower" && guess < userNumber) ||
      (direction === "greater" && guess > userNumber)
    )
      return Alert.alert("You know this is wrong", {
        text: "Sorry",
        style: "cancel",
      });

    if (direction === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }

    const newGuess = generateRandom(minBoundary, maxBoundary, guess);
    setGuess(newGuess);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <Instructions style={styles.instructions} >Higher or Lower?</Instructions>
        <View style={styles.buttonList}>
          <View style={styles.button}>
            <Button onPress={nextGuess("lower")}>-</Button>
          </View>
          <View style={styles.button}>
            <Button onPress={nextGuess("higher")}>+</Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 12 },
  instructions: {marginBottom: 12},
  buttonList: { flexDirection: "row" },
  button: { flexGrow: 1 },
});
