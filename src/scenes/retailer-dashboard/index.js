//import statements
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {wp, hp, rfv} from '_utils';
import userdata from '../../../dummy-data/userdata';

const RDashboard = ({navigation}) => (
  <SafeAreaView style={{flex: 1}}>
    <ImageBackground
      source={require('_assets/images/dashboard.png')}
      style={styles.image}>
      {/* Header */}
      <View
        style={{
          position: 'absolute',
          width: wp(360),
          height: hp(100),
          top: hp(20),
          left: 0,
        }}>
        {/* Dashboard */}
        <Text
          style={{
            left: wp(15),
            top: hp(5),
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(27),
            lineHeight: hp(30),
            letterSpacing: wp(0.08),
            textTransform: 'uppercase',
            textShadowOffset: {width: 2, height: 2},
            textShadowColor: 'black',
            textShadowRadius: 10,
          }}>
          Retailer{'\n'}Dashboard
        </Text>
        {/* Encouragement Text */}
        <Text
          style={{
            left: wp(15),
            top: hp(10),
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(13),
            lineHeight: hp(19),
            letterSpacing: 0.06,
          }}>
          Welcome! How can we help you today?
        </Text>
      </View>
      {/* Main View */}
      <View
        style={{
          width: wp(360),
          height: hp(600),
          backgroundColor: 'white',
          top: hp(160),
          alignItems: 'center',
          borderRadius: 40,
          elevation: 10,
        }}>
        {/* Profile Picture */}
        <View
          style={{
            width: wp(107),
            backgroundColor: 'white',
            height: hp(107),
            borderRadius: hp(107) / 2,
            top: -hp(54),
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
          }}>
          <Image
            style={{width: wp(95), height: hp(95), borderRadius: hp(90)}}
            source={require('_assets/images/jiafei.png')}></Image>
        </View>
        {/* Profile Name */}
        <Text
          style={{
            top: -hp(50),
            fontFamily: 'Poppins-SemiBold',
            fontSize: rfv(22),
            lineHeight: hp(33),
            letterSpacing: wp(0.08),
            textTransform: 'uppercase',
            color: '#444443',
          }}>
          {userdata[0].name}
        </Text>
        {/* Activity Report */}
        <View
          style={{
            width: wp(278),
            height: hp(124),
            top: hp(-40),
            backgroundColor: '#F1F1F1',
            borderRadius: 14,
            elevation: 2,
          }}>
          <Image
            style={{
              position: 'absolute',
              width: wp(103),
              height: hp(82),
              left: wp(4),
              top: hp(33),
            }}
            source={require('_assets/images/weather.png')}></Image>
          <Text
            style={{
              position: 'absolute',
              width: wp(200),
              height: hp(33),
              left: wp(16),
              top: hp(9),
              fontFamily: 'Poppins-Medium',
              fontSize: rfv(22),
              lineHeight: hp(33),
              display: 'flex',
              alignItems: 'center',
              letterSpacing: wp(0.03),
              textTransform: 'capitalize',
              color: '#444443',
            }}>
            Sunny Morning
          </Text>
          <Image
            style={{
              position: 'absolute',
              width: wp(41),
              height: hp(39),
              left: wp(227),
              top: hp(3),
            }}
            source={require('_assets/images/temp.png')}></Image>
          <Text
            style={{
              position: 'absolute',
              width: wp(163),
              height: hp(33),
              left: wp(105),
              top: hp(57),
              fontFamily: 'Poppins-Medium',
              fontSize: rfv(10),
              lineHeight: hp(12),
              display: 'flex',
              alignItems: 'center',
              letterSpacing: wp(0.06),
              color: '#444443',
            }}>
            Clear skies. Sunny to partly cloudy in the afternoon. Low 27°C
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: wp(59),
              height: hp(12),
              left: wp(199),
              top: hp(102),
              backgroundColor: '#CDDCF3',
              borderRadius: 10,
            }}>
            <Text
              style={{
                position: 'absolute',
                width: wp(46),
                height: hp(12),
                left: wp(7),
                top: hp(0),
                fontFamily: 'Poppins-Medium',
                fontSize: rfv(9),
                lineHeight: hp(12),
                display: 'flex',
                alignItems: 'center',
                letterSpacing: wp(0.04),
                textTransform: 'uppercase',
                color: '#444443',
              }}>
              See More
            </Text>
          </TouchableOpacity>
        </View>
        {/* Buttons */}
        <View
          style={{
            width: wp(360),
            height: hp(110),
            backgroundColor: 'transparent',
            top: -hp(20),
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {/* My Orders Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#E2EDFE',
              borderRadius: 14,
              elevation: 4,
              width: wp(115),
              height: hp(105),
            }}
            onPress={() => navigation.navigate('rorder')}
            activeOpacity={0.5}>
            <Image
              style={[
                styles.image3,
                {left: wp(21), width: wp(73), height: hp(78)},
              ]}
              source={require('_assets/images/track-order.png')}></Image>
            <Text style={[styles.text]}>My Orders</Text>
          </TouchableOpacity>
          {/* Shop for Crops Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#E2EDFE',
              borderRadius: 14,
              elevation: 4,
              width: wp(115),
              height: hp(105),
            }}
            onPress={() => navigation.navigate('marketplace')}
            activeOpacity={0.5}>
            <Image
              style={styles.image3}
              source={require('_assets/images/shop-crop.png')}></Image>
            <Text style={[styles.text]}>Marketplace</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </SafeAreaView>
);

export default RDashboard;

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    width: wp(105),
    height: hp(32),
    left: wp(5),
    top: hp(74),
    fontFamily: 'Poppins-Bold',
    fontSize: rfv(14),
    lineHeight: hp(15),
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: wp(0.06),
    color: '#444443',
  },
  image3: {
    position: 'absolute',
    width: wp(83),
    height: hp(78),
    left: wp(15),
    top: hp(5),
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
