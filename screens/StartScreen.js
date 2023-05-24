import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

import Button from "../components/ui/Button";
import Colors from "../constants/colors";

const StartScreen = ({ onPick }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

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

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: Colors.secondary600,
    borderRadius: 8,
    elevation: 4, // android only property
    shadowColor: Colors.black,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
