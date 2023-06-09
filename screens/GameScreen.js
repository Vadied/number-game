import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import NumberContainer from "../components/game/NumberContainer";
import Instructions from "../components/ui/Instructions";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandom = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  if (random === exclude) return generateRandom(min, max, exclude);

  return random;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onOver, guesses }) => {
  const [guess, setGuess] = useState(
    generateRandom(minBoundary, maxBoundary, userNumber)
  );

  const { width } = useWindowDimensions();

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

  let content = (
    <>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <Instructions style={styles.instructions}>
          Higher or Lower?
        </Instructions>
        <View style={styles.buttonList}>
          <View style={styles.button}>
            <Button onPress={nextGuess("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={nextGuess("higher")}>
              <Ionicons name="greater" size={24} color="white" />
            </Button>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500)
    content = (
      <>
        <Instructions style={styles.instructions}>
          Higher or Lower?
        </Instructions>
        <View style={styles.buttonListWide}>
          <View style={styles.button}>
            <Button onPress={nextGuess("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </Button>
          </View>
          <NumberContainer>{guess}</NumberContainer>
          <View style={styles.button}>
            <Button onPress={nextGuess("higher")}>
              <Ionicons name="greater" size={24} color="white" />
            </Button>
          </View>
        </View>
      </>
    );

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View>
        <FlatList
          data={guesses}
          renderItem={(data) => (
            <GuessLogItem
              round={[guesses.length - data.index]}
              guess={data.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 12, alignItems: "center" },
  instructions: { marginBottom: 12 },
  buttonList: { flexDirection: "row" },
  buttonListWide: { flexDirection: "row", alignItems: "center" },
  button: { flexGrow: 1 },
});
