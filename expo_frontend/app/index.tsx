import { Text, View, Button } from "react-native";

let banana: number = 5;
var coins = 12;
console.log(banana);
console.log(coins);

async function getData() {
  const url = "http://localhost:8086/test1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(`Harry's age is ${result.age}`);
  } catch (error) {
    console.error(error.message);
  }
}

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
      <Button title="Click Me" onPress={() => getData()} />
    </View>
  );
}
