import { Text, View, Button, StyleSheet, TextInput } from "react-native";

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
    //console.error(error.message);
  }
}

export default function Index() {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>Create account to start budgeting</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <Button title="Create Account" onPress={() => getData()} />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
 	flex: 1,
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: 'black',
   padding: 20,
},

title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
},

subtitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
},

input: {
    height: 40,
    width: "80%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 10,
    color: "white",
    borderRadius: 5,
},

 text: {
	color: 'white',
},

});
