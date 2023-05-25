import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [rounds, setRounds] = useState([]);
  const [number, setNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  const handlePickNumber = (num) => {
    setNumber(num);
    setRounds((old) => [num, ...old]);
    setIsGameOver(false);
  };

  const handleRestart = () => {
    setNumber(null);
    setRounds([]);
    setIsGameOver(false);
  };

  return (
    <LinearGradient
      colors={[Colors.secondary600, Colors.secondary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.rootScreen}>
          {!isGameOver && !number && <StartScreen onPick={handlePickNumber} />}
          {!isGameOver && number && (
            <GameScreen userNumber={number} onOver={setIsGameOver} guesse={rounds} />
          )}
          {isGameOver && (
            <GameOverScreen
              roundsNumber={rounds}
              userNumber={number}
              onRestart={handleRestart}
            />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  image: { opacity: 0.15 },
});
