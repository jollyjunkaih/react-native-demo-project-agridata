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
import {wp, hp, rfv} from '_utils';

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

const Item = ({name, type, weight, date, image}) => (
  <TouchableOpacity
    style={{
      marginLeft: wp(5),
      marginBottom: hp(5),
      borderRadius: 20,
      width: wp(145),
      height: hp(85),
      backgroundColor: 'white',
      elevation: 3,
    }}
    underlayColor="white"
    activeOpacity={0.4}>
    <Text
      style={{
        position: 'absolute',
        width: wp(90),
        height: hp(32),
        left: wp(14),
        top: hp(4),
        fontFamily: 'Poppins-Bold',
        fontSize: rfv(13),
        letterSpacing: wp(0.03),
      }}>
      {name}
    </Text>
    <Text
      style={{
        position: 'absolute',
        width: wp(90),
        height: hp(12),
        left: wp(14),
        top: hp(36),
        fontFamily: 'Poppins-Light',
        fontSize: rfv(10),
        letterSpacing: wp(0.06),
        color: '#B0B0B0B0',
      }}>
      {type}
    </Text>
    <Text
      style={{
        position: 'absolute',
        width: wp(90),
        height: hp(12),
        left: wp(14),
        top: hp(51),
        fontFamily: 'Poppins-Light',
        fontSize: rfv(10),
        letterSpacing: wp(0.06),
        color: '#B0B0B0B0',
      }}>
      {weight} kg
    </Text>
    <Text
      style={{
        position: 'absolute',
        width: wp(90),
        height: hp(12),
        left: wp(14),
        top: hp(66),
        fontFamily: 'Poppins-Light',
        fontSize: rfv(10),
        letterSpacing: wp(0.06),
        color: '#B0B0B0B0',
      }}>
      {date}
    </Text>
    <Image
      style={{
        position: 'absolute',
        width: wp(45),
        height: hp(45),
        right: wp(6),
        top: hp(7),
      }}
      source={image}></Image>
  </TouchableOpacity>
);

const Farm = ({navigation}) => {
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
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('fdashboard')}
        underlayColor="white"
        activeOpacity={1}>
        <Image source={require('_assets/images/back.png')}></Image>
      </TouchableOpacity>
      <Text style={styles.header}>John's Farm</Text>
      <View
        style={{
          position: 'absolute',
          width: wp(311),
          height: hp(65),
          left: wp(24),
          top: hp(110),
          backgroundColor: '#F1F1F1',
          elevation: 3,
          borderRadius: 14,
        }}>
        <Text
          style={{
            position: 'absolute',
            width: wp(227),
            height: hp(34),
            left: wp(16),
            top: hp(12),
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(13),
            lineHeight: hp(17),
            letterSpacing: wp(0.06),
            color: '#788EAF',
          }}>
          Some Random Quote
        </Text>
        <Image
          style={{
            position: 'absolute',
            width: wp(91),
            height: hp(60),
            left: wp(215),
            top: hp(1),
          }}
          source={require('_assets/images/veg.png')}></Image>
      </View>
      <Text
        style={{
          position: 'absolute',
          width: wp(311),
          height: hp(32),
          left: wp(24),
          top: wp(210),
          fontSize: rfv(13),
          fontFamily: 'Poppins-Regular',
          lineHeight: hp(19),
          letterSpacing: wp(0.06),
        }}>
        ALL RESULTS
      </Text>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}></FlatList>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          height: hp(30),
          width: wp(204),
          left: wp(78),
          top: hp(570),
          backgroundColor: 'white',
          elevation: 3,
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate('addproduce')}
        underlayColor="white"
        activeOpacity={0.5}>
        <Text
          style={{
            position: 'absolute',
            width: wp(140),
            height: hp(25),
            left: wp(19),
            top: hp(5),
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(14),
            lineHeight: hp(21),
            letterSpacing: wp(0.13),
          }}>
          ADD PRODUCE
        </Text>
        <Image
          source={require('_assets/images/plus.png')}
          style={{
            position: 'absolute',
            width: wp(17),
            height: hp(17),
            left: wp(170),
            top: hp(7),
          }}></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Farm;

const styles = StyleSheet.create({
  container: {
    top: hp(230),
    width: wp(311),
    height: hp(320),
    left: wp(25),
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
