import { Text, View } from "react-native";

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
    </View>
  );
}
