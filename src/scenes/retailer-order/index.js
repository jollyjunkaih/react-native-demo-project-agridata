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
    status: 'pending',
  },
  {
    id: 'bd7acb1ea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Bananas',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/banana.png'),
    status: 'pending',
  },
  {
    id: 'bd7ac12bea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    status: 'pending',
  },
  {
    id: 'bd7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    status: 'pending',
  },
  {
    id: 'bd127121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    status: 'pending',
  },
];
{
  /* List Layout */
}
const Item = ({name, type, weight, date, image}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'white',
      width: wp(315),
      height: hp(120),
      marginLeft: wp(5),
      marginBottom: hp(5),
      borderRadius: 20,
      elevation: 5,
    }}
    underlayColor="white"
    activeOpacity={0.5}>
    {/* top part */}
    <View
      style={{
        height: hp(40),
        width: wp(315),
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {/* status */}
      <View
        style={{
          width: wp(140),
          height: hp(25),
          left: wp(18),
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'grey',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            left: wp(20),
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(11),
          }}>
          Processing
        </Text>
      </View>
      <Text
        style={{
          left: wp(90),
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(11),
          color: '#B0B0B0',
        }}>
        {date}
      </Text>
    </View>
    <View
      style={{
        height: hp(80),
        //backgroundColor: 'red',
        width: wp(315),
      }}>
      <Text
        style={{
          position: 'absolute',
          left: wp(20),
          top: hp(0),
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(18),
          letterSpacing: wp(0.03),
        }}>
        #458429
      </Text>

      <Text
        style={{
          position: 'absolute',
          left: wp(20),
          bottom: hp(10),
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(13),
          letterSpacing: wp(0.03),
          color: '#788EAF',
        }}>
        payment
      </Text>

      <Text
        style={{
          position: 'absolute',
          left: wp(140),
          top: hp(5),
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(12),
          letterSpacing: wp(0.03),
        }}>
        Description
      </Text>
      <View
        style={{
          position: 'absolute',

          width: wp(160),
          height: wp(50),
          left: wp(140),
          bottom: hp(10),
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(10),
            letterSpacing: wp(0.03),
          }}>
          ajsfdbjaksfdbkja akesfdnlkafsdlksadfa
        </Text>
      </View>
    </View>
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
    <SafeAreaView style={{backgroundColor: 'white'}}>
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
