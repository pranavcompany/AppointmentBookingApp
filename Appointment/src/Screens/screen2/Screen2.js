import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

function Screen2(props) {
  return (
    <View>
      <Text>Screen2</Text>
      <Button
        title="Click Me"
        onPress={() => {
          props.navigation.push('Screen3');
        }}>
        Click Me
      </Button>
    </View>
  );
}

export default Screen2;
