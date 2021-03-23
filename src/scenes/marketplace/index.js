import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  View,
  Modal,
} from 'react-native';
import {wp, hp, rfv} from '_utils';
import {SearchBar, Rating} from 'react-native-elements';

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
    image: require('_assets/images/avacado.png'),
  },
  {
    id: 'bd7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/avacado.png'),
  },
  {
    id: 'bd127121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/avacado.png'),
  },
  {
    id: 'b11d7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/avacado.png'),
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

const Item = ({name, type, weight, date, image}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            height: hp(640),
            width: wp(360),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: wp(300),
              height: hp(400),
              backgroundColor: '#E2EDFE',
              borderRadius: 37,
              alignItems: 'center',
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Image
              style={{
                width: wp(122),
                height: wp(120),
                left: wp(0),
                top: hp(40),
              }}
              source={require('_assets/images/thumbs-up.png')}></Image>
            <Text style={styles.modalText}>ADDED!</Text>
            <TouchableOpacity
              style={[
                {
                  borderRadius: 20,
                  height: hp(20),
                  width: wp(90),
                  elevation: 2,
                  top: hp(60),
                },
                styles.buttonClose,
              ]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          margin: wp(5),
          borderRadius: 20,
          width: wp(150),
          height: hp(90),
          backgroundColor: 'white',
          elevation: 3,
        }}
        underlayColor="white"
        activeOpacity={0.4}>
        <View style={{width: wp(140), flexDirection: 'row', height: hp(55)}}>
          <View
            style={{
              width: wp(55),
              height: hp(55),
              alignItems: 'center',
              justifyContent: 'center',
              //backgroundColor: 'red',
            }}>
            <Image
              style={{
                width: wp(45),
                height: wp(45),
              }}
              source={image}></Image>
          </View>
          <View
            style={{
              width: wp(85),
              height: hp(55),
            }}>
            <Text
              style={{
                left: wp(8),
                height: hp(18),
                width: wp(80),
                top: wp(10),
                fontFamily: 'Poppins-Bold',
                fontSize: rfv(13),
                letterSpacing: wp(0.03),
                color: 'black',
              }}>
              {name}
            </Text>
            <Text
              style={{
                left: wp(8),
                top: wp(8),
                height: hp(15),
                width: wp(80),
                fontFamily: 'Poppins-Light',
                fontSize: rfv(10),
                letterSpacing: wp(0.06),
                color: '#B0B0B0B0',
              }}>
              {type}
            </Text>
            <Text
              style={{
                left: wp(8),
                top: wp(3),
                height: hp(15),
                width: wp(80),
                fontFamily: 'Poppins-Light',
                fontSize: rfv(10),
                letterSpacing: wp(0.06),
                color: '#B0B0B0B0',
              }}>
              Hinsou Farm
            </Text>
          </View>
        </View>

        <Text
          style={{
            position: 'absolute',
            width: wp(90),
            height: hp(12),
            left: wp(14),
            top: hp(50),
            fontFamily: 'Poppins-Light',
            fontSize: rfv(10),
            letterSpacing: wp(0.06),
            color: '#B0B0B0B0',
          }}>
          Available: {weight} kg
        </Text>
        <Text
          style={{
            position: 'absolute',
            width: wp(90),
            height: hp(12),
            left: wp(14),
            top: hp(62),
            fontFamily: 'Poppins-Light',
            fontSize: rfv(10),
            letterSpacing: wp(0.06),
            color: '#B0B0B0B0',
          }}>
          MOQ: 40 kg
        </Text>
        <Text
          style={{
            position: 'absolute',
            width: wp(90),
            height: hp(12),
            left: wp(14),
            top: hp(74),
            fontFamily: 'Poppins-Light',
            fontSize: rfv(10),
            letterSpacing: wp(0.06),
            color: '#B0B0B0B0',
          }}>
          Price: RM 20 per kg
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Favourites = ({image}) => (
  <TouchableOpacity
    style={{
      marginLeft: wp(5),
      marginBottom: hp(5),
      width: wp(55),
      height: hp(55),
      elevation: 3,
    }}
    underlayColor="white"
    activeOpacity={0.4}>
    <Image
      style={{
        position: 'absolute',
        width: wp(45),
        height: hp(45),
        resizeMode: 'contain',
      }}
      source={image}></Image>
  </TouchableOpacity>
);

const Marketplace = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      name={item.name}
      type={item.type}
      weight={item.weight}
      date={item.date}
      image={item.image}
    />
  );
  const renderFavourites = ({item}) => <Favourites image={item.image} />;
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      {/* Header */}
      <View
        style={{
          width: wp(360),
          height: hp(55),
          //backgroundColor: 'red',
          alignItems: 'center',
        }}>
        {/* Header Text */}
        <Text
          style={{
            top: hp(30),
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(27),
            lineHeight: hp(30),
            letterSpacing: wp(0.08),
            textTransform: 'capitalize',
            color: '#444443',
          }}>
          Marketplace
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
        {/* Favourites */}
        <View
          style={{
            width: wp(300),
            marginTop: hp(15),
            height: hp(70),
            backgroundColor: '#F1F1F1',
            elevation: 3,
            borderRadius: 14,
          }}>
          <Text
            style={{
              width: wp(238),
              marginTop: hp(5),
              marginLeft: wp(10),
              fontFamily: 'Poppins-Regular',
              fontSize: rfv(13),
              lineHeight: hp(19),
              letterSpacing: wp(0.03),
              color: 'black',
            }}>
            You favourites:
          </Text>
          <View
            style={{
              width: wp(290),
              marginleft: wp(5),
            }}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={renderFavourites}
              keyExtractor={(item) => item.id}></FlatList>
          </View>
        </View>
        {/* Search Bar */}
        <SearchBar
          platform="ios"
          placeholder="Search Produce"
          cancelButtonTitle={false}
          inputContainerStyle={{
            backgroundColor: 'white',
            width: wp(300),
            height: hp(25),
            borderWidth: 0.5,
            padding: 4,
            elevation: 2,
          }}
          containerStyle={{
            backgroundColor: 'transparent',
            textAlign: 'center',
            width: wp(310),
          }}
        />
        {/* List */}
        <View
          style={{
            marginTop: hp(0),
            width: wp(360),
            height: hp(400),
            alignItems: 'center',
            //backgroundColor: 'yellow',
          }}>
          <Text
            style={{
              right: wp(110),
              marginTop: hp(5),
              fontSize: rfv(13),
              fontFamily: 'Poppins-Regular',
              lineHeight: hp(19),
              letterSpacing: wp(0.06),
            }}>
            ALL RESULTS
          </Text>
          <View
            style={{
              marginTop: hp(5),
              width: wp(360),
              height: hp(360),
              alignItems: 'center',
            }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}></FlatList>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    top: hp(50),
    width: wp(155),
    fontFamily: 'Poppins-Bold',
    fontSize: rfv(22),
    textAlign: 'center',
  },
});
