import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Button = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.pressable] : styles.pressable
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressable: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: Colors.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
