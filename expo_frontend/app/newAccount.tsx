import { Text, View, Button, StyleSheet } from "react-native";

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
      <View style={styles.container}>
      <Text style={styles.text}>Basic account creation screen</Text>
      <Button title="Click Me" onPress={() => getData()} />
    </View>
  );
}



const styles = StyleSheet.create({
 container: {
 	flex: 1,
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: 'black',
},

 input: {
    	height: 40,
    	margin: 12,
    	borderWidth: 1,
    	padding: 10,
},

 text: {
	color: 'white',
},

});
