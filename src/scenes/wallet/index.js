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
import {Icon} from 'react-native-elements';
import {wp, hp, rfv} from '_utils';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    action: 'Top Up',
    value: 2000,
    date: 'Feb 24 2021',
    details: 'AgriData',
  },
  {
    id: 'bd7acb1ea-c1b1-46c2-aed5-3ad53abb28ba',
    action: 'Top Up',
    value: 3000,
    date: 'Feb 14 2021',
    details: 'AgriData',
  },
  {
    id: 'bd7ac12bea-c1b1-46c2-aed5-3ad53abb28ba',
    action: 'Purchase',
    value: 500,
    date: 'Feb 15 2021',
    details: 'Hinsou Farm',
  },
  {
    id: 'bd7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    action: 'Top Up',
    value: 2000,
    date: 'Feb 24 2021',
    details: 'Hinsou Farm',
  },
  {
    id: 'bd127121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    action: 'Top Up',
    value: 2000,
    date: 'Feb 24 2021',
    details: 'Hinsou Farm',
  },
  {
    id: 'b11d7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    action: 'Top Up',
    value: 2000,
    date: 'Feb 24 2021',
    details: 'Hinsou Farm',
  },
];

const Item = ({action, value, date, details}) => (
  <TouchableOpacity
    style={{
      width: wp(311),
      height: hp(60),
      marginLeft: wp(5),
      marginBottom: hp(5),
      borderBottomColor: 'grey',
      borderRadius: 10,
      borderBottomWidth: 1,
    }}
    underlayColor="white"
    activeOpacity={0.4}>
    <Text
      style={{
        position: 'absolute',
        left: wp(8),
        top: hp(15),
        fontFamily: 'Poppins-Regular',
        fontSize: rfv(16),
        letterSpacing: wp(0.03),
      }}>
      {action}
    </Text>
    <Text
      style={{
        position: 'absolute',
        left: wp(210),
        top: hp(20),
        fontFamily: 'Poppins-Regular',
        fontSize: rfv(15),
        letterSpacing: wp(0.03),
      }}>
      RM {value}
    </Text>
    <Text
      style={{
        position: 'absolute',
        left: wp(8),
        top: hp(37),
        fontFamily: 'Poppins-Regular',
        fontSize: rfv(10),
        letterSpacing: wp(0.03),
        color: 'grey',
      }}>
      {details}
    </Text>
    <View style={{position: 'absolute', right: wp(10), top: 20}}>
      <Icon type="ionicon" name="chevron-forward-outline"></Icon>
    </View>
  </TouchableOpacity>
);

const Wallet = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      action={item.action}
      value={item.value}
      details={item.details}
      date={item.date}
    />
  );
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          width: wp(312),
          height: hp(33),
          left: wp(24),
          top: hp(40),
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(27),
            lineHeight: hp(30),
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: wp(0.08),
            textTransform: 'capitalize',
            color: '#444443',
          }}>
          Credit Wallet
        </Text>
      </View>
      <View
        style={{
          width: wp(360),
          height: hp(135),
          top: hp(60),
          alignItems: 'center',
        }}>
        <View
          style={{
            width: wp(250),
            height: hp(135),
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 20,
          }}>
          <View
            style={{
              height: hp(100),
              width: wp(250),
              backgroundColor: 'white',
              borderRadius: 30,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              borderBottomColor: '#B0B0B0',
            }}>
            <Text
              style={{
                height: hp(33),
                width: wp(150),
                left: wp(15),
                top: hp(10),
                fontFamily: 'Poppins-SemiBold',
                fontSize: rfv(16),
                color: '#8EAB3D',
              }}>
              AgriData Credit
            </Text>
            <Text
              style={{
                position: 'absolute',
                left: wp(15),
                top: hp(45),
                fontFamily: 'Poppins-Regular',
                fontSize: rfv(12),
                color: '#B0B0B0',
              }}>
              RM
            </Text>
            <Text
              style={{
                position: 'absolute',
                left: wp(38),
                top: hp(40),
                fontFamily: 'Poppins-Regular',
                fontSize: rfv(22),
                color: 'black',
              }}>
              5000
            </Text>
            <Image
              source={require('_assets/images/agridata-logo-small.png')}
              style={{
                position: 'absolute',
                right: wp(10),
                top: hp(0),
                width: wp(66),
                height: wp(55),
              }}></Image>
          </View>
          <TouchableOpacity
            style={{
              width: wp(250),
              height: hp(35),
              backgroundColor: 'white',
              borderRadius: 20,
            }}
            activeOpacity={0.2}
            underlayColor="white">
            <Text
              style={{
                left: wp(15),
                top: hp(5),
                fontFamily: 'Poppins-SemiBold',
                fontSize: rfv(12),
                color: '#788EAF',
              }}>
              TOP UP NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('fdashboard')}
        underlayColor="white"
        activeOpacity={1}>
        <Image source={require('_assets/images/back.png')}></Image>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text
          style={{
            left: wp(25),
            top: hp(5),
            fontSize: rfv(20),
            fontFamily: 'Poppins-Regular',
          }}>
          Recent Transactions
        </Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    top: hp(80),
    left: wp(20),
    width: wp(320),
    height: hp(330),
  },
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
  header: {
    position: 'absolute',
    width: wp(312),
    height: hp(33),
    left: wp(24),
    top: hp(57),
    fontFamily: 'Poppins-Regular',
    fontSize: rfv(27),
    lineHeight: hp(30),
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: wp(0.08),
    textTransform: 'capitalize',
    color: '#444443',
  },
});
