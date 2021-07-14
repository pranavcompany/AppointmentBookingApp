import React from 'react';
import PropTypes from 'prop-types';
import Strings from '../../Constant';
import Button from '../../component/Button/Button';
import {Container} from './HomeScreen.style';

const HomeScreen = ({navigation}) => {

  const onPress = () => {
    navigation.navigate('BookingSortScreen');
};


  return (
    <Container>    
      <Button
        backgroundColor="grey"
        margin={10}
        label={Strings.BOOK_APPOINTMENT_BTN}
        onPress={onPress}
      />
    </Container>
  );
};

HomeScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
  }).isRequired,
};
export default HomeScreen;
