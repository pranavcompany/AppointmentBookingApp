import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Label, ButtonWrapper} from './Button.style';

const Button = ({
  onPress,
  icon,
  iconName,
  iconColor,
  label,
  testID,
  labelColor,
  backgroundColor,
  margin,
}) => {
  return (
    <ButtonWrapper
      testID={testID}
      onPress={onPress}
      backgroundColor={backgroundColor}
      margin={margin}>
      {icon ? (
        <Icon name={iconName} color={iconColor} size={30} />
      ) : (
        <Label color={labelColor}>{label}</Label>
      )}
    </ButtonWrapper>
  );
};

Button.prototype = {
  onPress: PropTypes.func,
  icon: PropTypes.bool,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  testID: PropTypes.string,
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  margin: PropTypes.number,
};

Button.defaultProps = {
  iconName: 'angle-left',
  iconColor: '#fff',
  testID: 'button',
  labelColor: '#fff',
  backgroundColor: 'transparent',
};
export default Button;
