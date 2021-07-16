import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList,Text} from 'react-native';
import Button from '../../component/Button/Button';
import {
  Container,
  SubView,
  Header,
  Label,
  ItemView,
  ItemLabel
} from './ViewSortScreen.style';
import Strings from '../../Constant';
import {getData} from '../../utill';

  const ViewSortScreen = ({navigation}) => {
    const [sortDetails,setSortDetails] = useState()
    useEffect(()=>{
      getData().then((details)=>{
        setSortDetails(details)
        console.log(details)
        }).catch((e)=>{
          console.log("error",e);
        });
    },[]);


  const Item = ({ item }) => (
    <ItemView>
      <Text style={{fontSize: 16}}>
            {item}
      </Text>
  </ItemView>
  );

  const renderItem = ({ item }) => (
    <>
    <Item item={item.userName} />
    <Item item={item.bookDate} />
    <Item item={item.email} />
    <Item item={item.phoneNumber} />
  </>
  );

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
      <FlatList
        data={sortDetails}
        renderItem={renderItem}
        keyExtractor={item => item.bookDate}
      />
    </Container>
  );
};

ViewSortScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
  }).isRequired,
};
export default ViewSortScreen;
