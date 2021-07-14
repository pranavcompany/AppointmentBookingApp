import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';
import Button from '../../component/Button/Button';
import {
  Container,
  SubView,
  Header,
  Label,
  Input,
} from './ViewSortScreen.style';
import Strings from '../../Constant';

const ViewSortScreen = ({navigation}) => {

  return (
    <Container>
      <SubView>
        <Header>
          <Button
            icon
            iconName="angle-left"
            iconColor='black'
            onPress={() => navigation.goBack()}
          />
          <Label fontSize={28} margin={10}>
            {Strings.VIEWSORT}
          </Label>
          <Button
            icon
            iconColor='black'
            iconName="home"
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </Header>
      </SubView>
    </Container>
  );
};

ViewSortScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
  }).isRequired,
};
export default ViewSortScreen;
