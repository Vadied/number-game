import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instructions from "../components/ui/Instructions";

import Colors from "../constants/colors";

const StartScreen = ({ onPick }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height } = useWindowDimensions();

  const handleNumber = (value) => setEnteredNumber(value);
  const handleReset = () => setEnteredNumber("");

  const handleConfirm = () => {
    const num = parseInt(enteredNumber);

    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: handleReset }]
      );
      return;
    }

    onPick(num);
  };

  const dinamycStyle = { marginTop: height < 400 ? 30 : 100 };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.container, dinamycStyle]}>
          <Title>Guess My Number</Title>
          <Card>
            <Instructions>Enter a number</Instructions>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={handleNumber}
            />
            <View style={styles.buttonList}>
              <View style={styles.button}>
                <Button onPress={handleReset}>Reset</Button>
              </View>
              <View style={styles.button}>
                <Button onPress={handleConfirm}>Confirm</Button>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "baseline",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonList: { flexDirection: "row" },
  button: { flexGrow: 1 },
});
