import React from 'react';
import {Text, Button, View} from 'react-native';

const myScream = (val) => {
    console.log("You scream, we all scream for Ice Cream!");
    console.log(val);
}
const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <Button
        title="scream"
        onPress={myScream(10)}
      />
    </View>
  );
};
export default HelloWorldApp;
