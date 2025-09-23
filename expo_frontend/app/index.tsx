import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import React, {useState} from "react";
import { Link } from 'expo-router';
/*
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
*/

async function makeAuthenticatedRequest(endpoint, method = 'GET', body = null, accessToken) {
    try {
        if (!accessToken) {
            throw new Error('No access token available. Please login first.');
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        };
        const config = {
            method,
            headers,
        };
        if (body) {
            config.body = JSON.stringify(body);
        }
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

        if (!response.ok) {
            if (response.status === 401) {
                // Token might be expired or invalid
                localStorage.removeItem('accessToken');
                accessToken = null;
                throw new Error('Unauthorized. Please login again.');
            }
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Request error:', error.message);
        throw error;
    }
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const url = "http://localhost:8086/api/v1/login";
async function login(name, pwd) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({name: name, password: pwd}),
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data.accessToken;
    } catch (error) {
        console.error(error.message);
    }
}

export default function Index() {
    const [uNameInput, setUNameInput] = useState('');
    const [pwdInput, setPwdInput] = useState('');
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Welcome to SmartBudget</Text>
      <Text style={styles.subtitle}>Please sign in</Text>
      <TextInput
        style={styles.input}
        value={uNameInput}
        onChangeText={text => setUNameInput(text)}
        placeholder="Username"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        value={pwdInput}
        onChangeText={text => setPwdInput(text)}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <Button title="Sign In" onPress={() => login(uNameInput, pwdInput)} />
      <Link href="/newAccount" style={styles.link}>
        Or create a new account
      </Link>

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

 link: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginTop: 20,
  },

});
