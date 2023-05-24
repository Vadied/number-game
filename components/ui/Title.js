import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary500,
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: 12,
  },
});
