import { Text, View, Button } from "react-native";

let banana: number = 5;
var coins = 12;
console.log(banana);
console.log(coins);
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Click Me" onPress={() => console.log("Button pressed!")} />
    </View>
  );
}
