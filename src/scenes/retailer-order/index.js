import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {wp, hp, rfv} from '_utils';

{
  /* Dummy Data */
}
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Avacado',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/avacado.png'),
  },
  {
    id: 'bd7acb1ea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Bananas',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/banana.png'),
  },
  {
    id: 'bd7ac12bea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
  {
    id: 'bd7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
  {
    id: 'bd127121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
  {
    id: 'b11d7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
  {
    id: 'bd712121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
  {
    id: 'bd122347121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
  {
    id: 'b11d7121231acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
  {
    id: 'bd723112121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
  },
];
{
  /* List Layout */
}
const Item = ({name, type, weight, date, image}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'white',
      width: wp(311),
      height: hp(85),
      marginLeft: wp(5),
      marginBottom: hp(5),
      borderRadius: 20,
      elevation: 5,
    }}
    underlayColor="white"
    activeOpacity={0.5}>
    <Text
      style={{
        position: 'absolute',
        flex: 1,
        left: wp(106),
        top: hp(16),
        fontFamily: 'Poppins-Regular',
        fontSize: rfv(13),
        letterSpacing: wp(0.03),
      }}>
      {name}
    </Text>
    <Text
      style={{
        position: 'absolute',
        flex: 1,
        left: wp(106),
        top: hp(40),
        fontFamily: 'Poppins-Regular',
        fontSize: rfv(13),
        letterSpacing: wp(0.03),
      }}>
      {type}
    </Text>
    <Text
      style={{
        position: 'absolute',
        flex: 1,
        left: wp(106),
        top: hp(61),
        fontFamily: 'Poppins-Regular',
        fontSize: rfv(13),
        letterSpacing: wp(0.03),
      }}>
      {weight} kg | {date}
    </Text>
    <Image
      style={{
        position: 'absolute',
        width: wp(68),
        height: hp(60),
        left: wp(15),
        top: hp(7),
      }}
      source={image}></Image>
  </TouchableOpacity>
);

const buttons = ['NEW', 'CONFIRMED', 'COMPLETED'];

const ROrder = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      name={item.name}
      type={item.type}
      weight={item.weight}
      date={item.date}
      image={item.image}
    />
  );
  return (
    <SafeAreaView>
      {/* Header */}
      <View
        style={{
          width: wp(360),
          height: hp(70),
          //backgroundColor: 'red',
          alignItems: 'center',
        }}>
        {/* Header Text */}
        <Text
          style={{
            top: hp(50),
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(27),
            lineHeight: hp(30),
            letterSpacing: wp(0.08),
            textTransform: 'capitalize',
            color: '#444443',
          }}>
          My Records
        </Text>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('fdashboard')}
          underlayColor="white"
          activeOpacity={1}>
          <Image source={require('_assets/images/back.png')}></Image>
        </TouchableOpacity>
      </View>
      {/* Main View */}
      <View
        style={{
          width: wp(360),
          height: hp(550),
          //backgroundColor: 'blue',
          alignItems: 'center',
        }}>
        {/* Buttons */}
        <ButtonGroup
          buttons={buttons}
          containerStyle={{
            top: hp(20),
            width: wp(311),
            height: hp(42),
          }}
          buttonContainerStyle={{backgroundColor: 'cadetblue'}}
          textStyle={{color: '#fff'}}
        />
        {/* List View */}
        <View
          style={{
            width: wp(360),
            height: hp(460),
            //backgroundColor: 'green',
            alignItems: 'center',
            top: hp(30),
          }}>
          <Text
            style={{
              position: 'absolute',
              top: hp(0),
              left: wp(20),
              fontFamily: 'Poppins-Regular',
              fontSize: rfv(13),
              lineHeight: hp(19),
              letterSpacing: wp(0.06),
            }}>
            ALL RESULTS
          </Text>
          {/* List */}
          <View
            style={{
              top: hp(30),
              width: wp(360),
              height: hp(400),
              alignItems: 'center',
            }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}></FlatList>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ROrder;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  back: {
    position: 'absolute',
    width: wp(28),
    height: hp(22),
    left: wp(20),
    top: hp(35),
  },
});
