import styled from 'styled-components/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import SwipeButton from 'rn-swipe-button';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

export const SubView = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled(Text)`
  font-size: ${props => props.fontSize || 16}px;
  text-align: center;
  margin: ${props => props.margin || 15}px;
  color: ${props => props.color || 'black'};
`;

export const ButtonLabelWithColor = styled(Label)`
  font-size: 16px;
  text-align: center;
  margin: 15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #33adff;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  margin: 10px;
`;

export const ItemLabel = styled(Text)`
  font-size: ${props => props.fontSize || 16}px;
  text-align: left;
  margin: ${props => props.margin || 15}px;
  color: ${props => props.color || 'black'};
`;

export const ItemView = styled(Text)`
  text-align: left;
  marginHorizontal: 16px;
  flex-direction: column;
  background-color: grey;
`;