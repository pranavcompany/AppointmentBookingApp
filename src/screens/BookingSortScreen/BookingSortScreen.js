import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Strings from '../../Constant';
import Button from '../../component/Button/Button';
import {Text, Alert} from 'react-native';
import {Container, SubContainer, Title, LabelWrapper, Input} from './BookingSortScreen.style';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {storeData} from '../../utill';

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
  };

  const onChangePhoneNumber = (text) => {
    setPhoneNumber(text)
  };

  const validateDetails = () =>{
    let isDetailsValidate = true
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if(!emailAddress &&  !expression.test(String(emailAddress).toLowerCase())){
      isDetailsValidate = false
    }
    if(!userName && !userName.length > 0){
      isDetailsValidate = false
    }
    if(!phoneNumber && phoneNumber.length >= 5){
      isDetailsValidate = false
    }
    return isDetailsValidate
  }

function checkTimeSortAvailable(){
  getData().then((details)=>{
    
  }).catch((e)=>{
    console.log("error",e);
  });
return false
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
          if(!validateDetails()){
            Alert.alert(
              "Alert Title",
              "Please enter validate details",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ])
          }
            let sortArry = [];
            let objectValue = {
              userName:userName,
              email:emailAddress,
              phoneNumber:phoneNumber,
              bookDate:selectTimeSort
            }
            sortArry.push(objectValue);
            storeData(sortArry);
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
