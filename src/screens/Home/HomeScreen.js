import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Strings from '../../Constant';
import Button from '../../component/Button/Button';
import {Container} from './HomeScreen.style';
import {getData} from '../../utill';

const HomeScreen = ({navigation}) => {

const [sortDetails,setSortDetails] = useState()
  useEffect(()=>{
    getData().then((details)=>{
        setSortDetails(details)
      }).catch((e)=>{
        console.log("error",e);
      });
  });

const onBookSortPress = () => {
  navigation.navigate('BookingSortScreen');
};

const onViewSortPress = () => {
  navigation.navigate('ViewSortScreen');
};

return (
  <Container>    
    <Button
      backgroundColor="grey"
      margin={10}
      label={Strings.BOOK_APPOINTMENT_BTN}
      onPress={onBookSortPress}
    />
    {sortDetails && <Button
      backgroundColor="grey"
      margin={10}
      label={Strings.VIEW_APPOINTMENT_BTN}
      onPress={onViewSortPress}
    />}
  </Container>
);
};

HomeScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
  }).isRequired,
};
export default HomeScreen;
