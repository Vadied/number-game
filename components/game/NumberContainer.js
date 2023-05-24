import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    borderRadius: 8,
  },
  text: { color: Colors.secondary500, fontSize: 36, fontWeight: "bold" },
});