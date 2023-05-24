import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import NumberContainer from "../components/game/NumberContainer";

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
    <View>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <Button onPress={nextGuess("lower")}>-</Button>
          <Button onPress={nextGuess("higher")}>+</Button>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 12 },
});
