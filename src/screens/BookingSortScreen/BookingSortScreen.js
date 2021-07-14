import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Strings from '../../Constant';
import Button from '../../component/Button/Button';
import {Text, Alert} from 'react-native';
import {Container, SubContainer, Title, LabelWrapper, Input} from './BookingSortScreen.style';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const BookingSortScreen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectTimeSort, setSelectTimeSort] = useState();

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectTimeSort(date)
    hideDatePicker();
  };

  const onChangeEmail = (text) => {
    setEmailAddress(text)
  };

  const onChangeUserName = (text) => {
    setUserName(text)
(text)
  };

  const onChangePhoneNumber = (text) => {
    setPhoneNumber(text)
  };

  const validateDetails = () =>{
    let isDetailsValidate = true
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailAddress &&  !mailformat.match(emailAddress)){
      isDetailsValidate = false
    }
    if(userName && !userName.length > 0){
      isDetailsValidate = false
    }
    if(phoneNumber && phoneNumber.length !== 10){
      isDetailsValidate = false
    }
    return isDetailsValidate
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('SortDetails', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  

  return (
    <Container>
      <SubContainer>
        <Button
          testID="back-button"
          icon
          iconColor="#000"
          iconName="angle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>{Strings.BOOKSORT}</Title>
        <Button
          testID="next-button"
          icon
          iconColor="#000"
          iconName="angle-right"
          onPress={() => navigation.navigate('ViewSortScreen')}
        />
      </SubContainer>
      <Button
        backgroundColor="grey"
        margin={10}
        label={Strings.SELECT_SORT}
        onPress={()=>{
          setDatePickerVisibility(true);
        }}
      />
       {selectTimeSort && <LabelWrapper>
        <Text testID="store-label">Selected Time {selectTimeSort ? moment(selectTimeSort).format('MMMM Do YYYY, h:mm:ss a') : ""}</Text>
      </LabelWrapper>}
       {selectTimeSort && <Input
        testID="input-field"
        onChangeText={onChangeUserName}
        placeholder={'Enter User Name'}
        returnKeyType="done"
      />}
      {selectTimeSort && <Input
        testID="input-field"
        onChangeText={onChangeEmail}
        placeholder={'Enter Email address'}
        returnKeyType="done"
      />}
      {selectTimeSort &&  <Input
        testID="input-field"
        onChangeText={onChangePhoneNumber}
        placeholder={'Enter Phone Numbers'}
        returnKeyType="done"
      />}

{selectTimeSort && <Button
        backgroundColor="grey"
        margin={10}
        label={"Book Sort"}
        onPress={()=>{
            if(validateDetails()){
              Alert("Please enter validate details")
            }
            let detailsArray = [];
            let objectValue = {
              userName:userName,
              email:emailAddress,
              phoneNumber:phoneNumber,
              bookDate:selectTimeSort
            }
            detailsArray.push(objectValue);
            storeData(detailsArray);
          setDatePickerVisibility(true);
        }}
      />  }
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        maximumDate={
          new Date(
            moment()
              .add(2, 'days')
              .endOf('days'),
          )
        }
        minimumDate={new Date()}
        date={new Date()}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
};

BookingSortScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
export default BookingSortScreen;
