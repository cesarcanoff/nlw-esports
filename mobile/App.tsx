import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: String;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title={"Entrar"} />
      <Button title={"Entrar 2"} />
      <Button title={"Entrar 3"} />
      <StatusBar style="auto" />
    </View>
  );
}

// Estilização...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
