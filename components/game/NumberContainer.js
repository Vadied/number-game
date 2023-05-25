import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.secondary500,
    fontSize: width < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
