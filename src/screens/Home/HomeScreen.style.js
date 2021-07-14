import styled from 'styled-components/native';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-horizontal: 20px;
  align-items: center;
  background-color: white;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Label = styled(Text)`
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 10px;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
`;

export const Input = styled(TextInput)`
  height: 50px;
  border-width: 0px;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 20px;
  border-color: #c7f5f3;
  border-radius: 5px;
  background-color: #fff;
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Button = styled(TouchableOpacity)`
  border-radius: 8px;
  width: 100%;
  align-items: center;
  padding: 6px;
  background-color: red;
  margin-bottom: 20px;
`;
