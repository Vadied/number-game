import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [number, setNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePickNumber = (num) => {
    setNumber(num);
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
            <GameScreen userNumber={number} onOver={setIsGameOver} />
          )}
          {isGameOver && <GameOverScreen />}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  image: { opacity: 0.15 },
});
