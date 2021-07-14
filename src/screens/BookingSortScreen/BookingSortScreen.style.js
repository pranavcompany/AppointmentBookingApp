import styled from 'styled-components/native';
import {Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const SubContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LabelWrapper = styled.View`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextInput)`
  height: 50px;
  border-width: 0px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 20px;
  border-color: #c7f5f3;
  border-radius: 5px;
  background-color: #fff;
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: bold;
`;

export const Button = styled(TouchableOpacity)`
  border-radius: 8px;
  width: 100%;
  align-items: center;
  padding: 6px;
`;

