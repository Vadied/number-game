import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Button from "../components/ui/Button";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const { width, height } = useWindowDimensions();

  const imageSize = (height < 400 && 80) || (width < 380 && 150) || 300;
  const landscapeStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, landscapeStyle]}>
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
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
