import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

function Home(props) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Click Me"
        onPress={() => {
          props.navigation.push('Screen2');
        }}>
        Click Me
      </Button>
    </View>
  );
}

export default Home;
