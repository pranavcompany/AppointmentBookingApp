import styled from 'styled-components/native';
import {Text} from 'react-native';

export const Label = styled(Text)`
  font-size: ${props => props.fontSize || 16}px;
  text-align: center;
  margin: ${props => props.margin || 15}px;
  color: ${props => props.color || '#66b3ff'};
`;

export const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  ${({backgroundColor}) =>
    backgroundColor && ` background-color:${backgroundColor}`}
  ${({marginTop}) => marginTop && `margin-top:${marginTop}px`};
  ${({margin}) => margin && `margin:${margin}px`};
  ${({marginBottom}) => marginBottom && `margin-bottom:${marginBottom}px`};
`;
