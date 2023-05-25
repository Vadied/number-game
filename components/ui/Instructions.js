import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/colors";

const Instructions = ({ children, style = {} }) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export default Instructions;

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans",
    color: Colors.secondary500,
    fontSize: 24,
  },
});
