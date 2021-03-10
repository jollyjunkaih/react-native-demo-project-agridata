import React from 'react';
import {SafeAreaView, Text, TouchableOpacity,Image,StyleSheet} from 'react-native';
import {wp, hp, rfv} from '_utils';

const Farm = ({navigation}) => (
  <SafeAreaView>
    <TouchableOpacity style = {styles.back} onPress={() => navigation.navigate('fdashboard')} underlayColor = "white" activeOpacity= {1}>
      <Image source={require('_assets/images/back.png')}></Image>
    </TouchableOpacity>
    <Text style={styles.header}>John's Farm</Text>
  </SafeAreaView>
);

export default Farm;

const styles = StyleSheet.create({
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