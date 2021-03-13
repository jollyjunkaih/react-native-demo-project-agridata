import React from 'react';
import {SafeAreaView, Text, TouchableOpacity,Image,StyleSheet,FlatList, View} from 'react-native';
import {ButtonGroup} from "react-native-elements"
import {wp, hp, rfv} from '_utils';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Avacado',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80,
    image: require("_assets/images/avacado.png")
  },
  {
    id: 'bd7acb1ea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Bananas',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80,
    image: require("_assets/images/banana.png")
  },
  {
    id: 'bd7ac12bea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  {
    id: 'bd7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  {
    id: 'bd127121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  {
    id: 'b11d7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  {
    id: 'bd712121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  {
    id: 'bd122347121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  {
    id: 'b11d7121231acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  {
    id: 'bd723112121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: "Eureka",
    date: "Feb 24 2021",
    weight: 80
  },
  

];

const Item = ({name, type, weight, date, image}) => (
  <TouchableOpacity style={styles.item} underlayColor = "white" activeOpacity= {1}>
    <Text style ={{position:"absolute", flex: 1, left: wp(106), top: hp(16), fontFamily:"Poppins-Regular", fontSize:rfv(13), letterSpacing:wp(0.03) }}>{name}</Text>
    <Text style ={{position:"absolute", flex: 1, left: wp(106), top: hp(40), fontFamily:"Poppins-Regular", fontSize:rfv(13), letterSpacing:wp(0.03) }}>{type}</Text>
    <Text style ={{position:"absolute", flex: 1, left: wp(106), top: hp(61), fontFamily:"Poppins-Regular", fontSize:rfv(13), letterSpacing:wp(0.03) }}>{weight} kg | {date}</Text>
    <Image style={{position: "absolute", width:wp(68),height:hp(60),left: wp(15),top:hp(7)}} source={image}></Image>
  </TouchableOpacity>
)

const buttons = ['PENDING', 'SOLD']

const Order = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item name={item.name} type={item.type} weight={item.weight} date={item.date} image={item.image}  />
  );
  return(
    <SafeAreaView style={{flex: 1}}>
        <ButtonGroup buttons={buttons} containerStyle={{top:hp(120), width:wp(311), left:wp(17), height: hp(42)}} buttonContainerStyle={{backgroundColor: 'cadetblue'}}textStyle={{color: '#fff'}}/>
        <Text style={{position: "absolute", width: wp(312), height: hp(33), left: wp(24), top: hp(75), fontFamily: "Poppins-Regular",fontSize: rfv(27),lineHeight: hp(30), display: "flex",alignItems: "center",textAlign: "center",letterSpacing: wp(0.08),textTransform: "capitalize", color: "#444443"}}>My Records</Text>
        <Text style={{position: "absolute", width: wp(90), height: hp(32), top:hp(190), left:wp(27), fontFamily: "Poppins-Regular", fontSize:rfv(13),lineHeight:hp(19), letterSpacing: wp(0.06)}}>ALL RESULTS</Text>
        <TouchableOpacity style = {styles.back} onPress={() => navigation.navigate('fdashboard')} underlayColor = "white" activeOpacity= {1}>
            <Image source={require('_assets/images/back.png')}></Image>
        </TouchableOpacity>
        <View style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
        </View>
  </SafeAreaView>
  )
  
  };

export default Order;

const styles = StyleSheet.create({
  container: {
    top:hp(200),
    left:wp(10),
    width: wp(311),
    height:hp(340)
  },
  item: {
    backgroundColor: 'white',
    width: wp(311),
    height: hp(85),
    marginLeft: wp(5),
    marginBottom: hp(5),
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
  back:{
    position: "absolute",
    width: wp(28),
    height: hp(22),
    left: wp(20),
    top: hp(35)
  },
  header:{
    position: "absolute",
    width: wp(312),
    height: hp(33),
    left: wp(24),
    top: hp(57),
    fontFamily: "Poppins-Regular",
    fontSize: rfv(27),
    lineHeight: hp(30),
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: wp(0.08),
    textTransform: "capitalize",
    color: "#444443"
  }
})