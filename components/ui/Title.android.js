import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    /* fontWeight: "bold", */
    color: Colors.secondary500,
    borderWidth: 0,
    borderColor: Colors.secondary500,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
