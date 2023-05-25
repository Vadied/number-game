import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Button from "../components/ui/Button";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.higlight}>{roundsNumber}</Text>{" "}
        round to guess the number
        <Text style={styles.higlight}>{userNumber}</Text>
      </Text>
      <Button onClick={onRestart}>Start new game</Button>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.black,
    overflow: "hidden",
    margin: 36,
  },
  image: { width: "100%", height: "100%" },
  text: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.primary500,
    textAlign: "center",
    marginVertical: 24,
  },
  higlight: { fontFamily: "open-sans-bold", color: Colors.primary600 },
});
