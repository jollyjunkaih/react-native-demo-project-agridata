import React from 'react';
import {Image, ImageBackground, SafeAreaView, View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import {wp, hp, rfv} from '_utils';
import userdata from "../../../dummy-data/userdata"

const FDashboard = ({navigation}) => (
  <SafeAreaView style={{flex:1}}>
    <ImageBackground source={require('_assets/images/dashboard.png')} style={styles.image}>
      <Text style={styles.header}>Farmer{"\n"}Dashboard</Text>
      <Text style ={styles.welcome}>Welcome! How can we help you today? </Text>
      <View style = {styles.background2}>
        <View style = {styles.circle}></View>
        <Image style={styles.image2} source={require('_assets/images/profile-pic.png')}></Image>
        <Text style={styles.name}>{userdata[0].name}</Text>
        
        <View style = {styles.weather}>
          <Image style={{  position: "absolute",width: wp(103),height: hp(82),left: wp(4),top: hp(33)}} source={require('_assets/images/weather.png')}></Image>
          <Text style={{  position: "absolute", width: wp(200),height: hp(33),left: wp(16),top: hp(9),fontFamily: "Poppins-Medium",fontSize: rfv(22),lineHeight: hp(33),display: "flex",alignItems: "center",letterSpacing: wp(0.03),textTransform: "capitalize",color: "#444443"}}>Sunny Morning</Text>
          <Image style={{  position: "absolute",width: wp(41),height: hp(39),left: wp(227),top: hp(3)}} source={require('_assets/images/temp.png')}></Image>
          <Text style={{   position: "absolute",width: wp(163),height: hp(33),left: wp(105),top: hp(57),fontFamily: "Poppins-Medium",fontSize: rfv(10),lineHeight: hp(12),display: "flex",alignItems: "center",letterSpacing: wp(0.06), color: "#444443"}}>Clear skies. Sunny to partly cloudy in the afternoon. Low 27°C</Text>
          <TouchableOpacity style={{  position: "absolute",width: wp(59),height: hp(12),left: wp(199),top: hp(102),backgroundColor: "#CDDCF3",borderRadius: 10}}>
            <Text style={{  position: "absolute",width: wp(46),height: hp(12),left: wp(7),top: hp(0),fontFamily: "Poppins-Medium",fontSize: rfv(9),lineHeight: hp(12),display: "flex",alignItems: "center",letterSpacing: wp(0.04),textTransform: "uppercase",color: "#444443"}}>See More</Text>
          </TouchableOpacity>
      </View>

        <TouchableOpacity style={styles.button}>
          <Image style={[styles.image3,{left:wp(21), width:wp(73), height:hp(78)}]} source={require('_assets/images/order-icon.png')}></Image>
          <Text style={[styles.text]}>My Orders</Text>
        </TouchableOpacity>
       
        
        <TouchableOpacity style={[styles.button, {left:wp(203)}]} onPress={() => navigation.navigate('farm')} activeOpacity= {0.5}>
          <Image style={styles.image3} source={require('_assets/images/farm-icon.png')}></Image>
          <Text style={[styles.text]}>My Farm</Text>
        </TouchableOpacity>
        
        
      </View>
    </ImageBackground>
  </SafeAreaView>
  
);

export default FDashboard;
function filterById(jsonObject, id) {
  return jsonObject.filter(function(jsonObject) 
  {return (jsonObject['id'] == id);})[0];}

const styles = StyleSheet.create({
  weather: {
    position: "absolute",
    width: wp(278),
    height: hp(124),
    left: wp(41),
    top: hp(130),
    backgroundColor: "#F1F1F1",
    borderRadius: 14
  },
  text:{
    position: "absolute",
    width: wp(105),
    height: hp(32),
    left: wp(5),
    top: hp(74),
    fontFamily: "Poppins-Bold",
    fontSize: rfv(14),
    lineHeight: hp(15),
    alignItems: "center",
    textAlign: "center",
    letterSpacing: wp(0.06),
    color: "#444443",
  },
  image3:{
    position: "absolute",
    width: wp(83),
    height: hp(78),
    left: wp(15),
    top: hp(5)
  },
  button:{
    position: "absolute",
    width: wp(115),
    height: hp(105),
    left: wp(41),
    top: hp(275),
    backgroundColor: "#E2EDFE",
    borderRadius: 14,
    elevation: 4,
  },
  name:{
    position: "absolute",
    width: wp(312),
    height: hp(33),
    left: wp(24),
    top: hp(52),
    fontFamily: "Poppins-SemiBold",
    fontSize: rfv(22),
    lineHeight: hp(33),
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: wp(0.08),
    textTransform: "uppercase",
    color: "#444443"
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  image2:{
    position: "absolute",
    width: wp(95),
    height: hp(95),
    left: wp(132),
    top: hp(-47),
    borderRadius: 100,
  },
  background2: {
    width: wp(360),
    height: hp(526),
    backgroundColor: 'white',
    position: "absolute",
    left: 0,
    top: hp(186),
    borderRadius: 37,
  },
  circle:{
    position: "absolute",
    width: wp(107),
    backgroundColor: 'white',
    height: hp(107),
    left: wp(126),
    top: hp(-53),
    borderRadius: 200,
  },
  header: {
    position: "absolute", 
    width: wp(312),
    height: hp(53),
    left: wp(15),
    top: hp(41),
    color: "black",
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
    fontSize: rfv(27),
    lineHeight: hp(30),
    display: "flex",
    alignItems: "center",
    letterSpacing: wp(0.08),
    textTransform: "uppercase",
    textShadowOffset: {width: 2, height: 2}, 
    textShadowColor: "black", 
    textShadowRadius: 10,
  },
  welcome:{
    position: "absolute",
    width: wp(304),
    height: hp(33),
    left: wp(15),
    top: hp(101),
    fontFamily: "Poppins-Regular",
    fontWeight: "500",
    fontSize: rfv(13),
    lineHeight: hp(19),
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.06,
  },
})
