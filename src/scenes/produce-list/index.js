import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  View,
  ImageBackground,
  Modal,
} from 'react-native';
import {wp, hp, rfv} from '_utils';
import {Icon} from 'react-native-elements';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Avacado',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/avacado.png'),
    delivery: 'Self-Pickup',
    price: 20,
    minorder: 50,
  },
  {
    id: 'bd7acb1ea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Bananas',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/banana.png'),
    delivery: 'Self-Pickup',
    price: 20,
    minorder: 50,
  },
  {
    id: 'bd7ac12bea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    delivery: 'Self-Pickup',
    price: 20,
    minorder: 50,
  },
  {
    id: 'bd7121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    delivery: 'Self-Pickup',
    price: 20,
    minorder: 50,
  },
  {
    id: 'bd127121acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lemon',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    delivery: 'Self-Pickup',
    price: 20,
    minorder: 50,
  },
];

const Item = ({name, type, weight, date, image, delivery, minorder, price}) => (
  <View
    style={{
      marginLeft: wp(12),
      marginBottom: hp(5),
      borderRadius: 20,
      width: wp(285),
      height: hp(100),
      backgroundColor: 'white',
      elevation: 3,
    }}
    underlayColor="white"
    activeOpacity={0.4}>
    <Image
      style={{
        position: 'absolute',
        width: wp(45),
        height: hp(45),
        left: wp(6),
        top: hp(7),
      }}
      source={image}></Image>
    <View
      style={{
        position: 'absolute',
        width: wp(202),
        height: hp(32),
        left: wp(66),
        top: hp(8),
        flexDirection: 'row',
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: rfv(14),
          letterSpacing: wp(0.03),
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: rfv(14),
          letterSpacing: wp(0.03),
          left: wp(5),
          color: '#B0B0B0',
        }}>
        ({type})
      </Text>
    </View>

    <View style={{width: wp(200), height: hp(65), left: wp(66), top: hp(34)}}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(10),
          letterSpacing: wp(0.06),
          color: 'black',
        }}>
        Quantity: {weight} kg
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(10),
          letterSpacing: wp(0.06),
          color: 'black',
        }}>
        Mode of Delivery: {delivery}
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(10),
          letterSpacing: wp(0.06),
          color: 'black',
        }}>
        Price: RM {price} per kg
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: rfv(10),
          letterSpacing: wp(0.06),
          color: 'black',
        }}>
        Min. Order: {minorder} kg
      </Text>
    </View>

    <View
      style={{
        position: 'absolute',
        left: wp(230),
        top: hp(8),
        height: hp(20),
        width: wp(45),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity>
        <Icon
          size={wp(19)}
          color="black"
          type="ionicon"
          name="pencil-outline"></Icon>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          size={wp(19)}
          color="black"
          type="ionicon"
          name="trash-outline"></Icon>
      </TouchableOpacity>
    </View>
  </View>
);

const ProduceList = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({item}) => (
    <Item
      name={item.name}
      type={item.type}
      weight={item.weight}
      date={item.date}
      image={item.image}
      delivery={item.delivery}
      price={item.price}
      minorder={item.minorder}
    />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Image
            style={{
              width: wp(122),
              height: wp(120),
              left: wp(0),
              top: hp(40),
            }}
            source={require('_assets/images/thumbs-up.png')}></Image>
          <Text style={styles.modalText}>CONFIRMED!</Text>
          <TouchableOpacity
            style={[
              {
                borderRadius: 20,
                height: hp(20),
                width: wp(110),
                elevation: 2,
                top: hp(60),
              },
              styles.buttonClose,
            ]}
            onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate('fdashboard');
            }}>
            <Text style={styles.textStyle}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ImageBackground
        source={require('_assets/images/dashboard.png')}
        style={styles.image}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('addproduce')}
          underlayColor="white"
          activeOpacity={1}>
          <Image source={require('_assets/images/back.png')}></Image>
        </TouchableOpacity>
        <Image
          style={{position: 'absolute', right: 0, top: hp(10)}}
          source={require('_assets/images/produce-platter.png')}></Image>
        <View
          style={{
            position: 'absolute',
            width: wp(360),
            height: hp(505),
            left: 0,
            top: hp(115),
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: rfv(27),
              top: hp(15),
            }}>
            Produce List
          </Text>
          <View style={styles.container}>
            <Text
              style={{
                left: wp(30),
                top: hp(10),
                fontFamily: 'Poppins-Regular',
                fontSize: rfv(17),
              }}>
              You are adding:
            </Text>
            <View style={{height: hp(290), width: wp(310), top: hp(30)}}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={1}></FlatList>
            </View>
            <View
              style={{
                left: wp(70),
                top: hp(40),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: rfv(10),
                }}>
                Claim payment after 30 days. {'\n'}It’s 10% higher than the
                normal payment.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              top: hp(25),
              height: hp(33),
              width: wp(163),
              backgroundColor: '#CDDCF3',
              elevation: 3,
              borderRadius: 20,
            }}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttontext}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProduceList;

const styles = StyleSheet.create({
  modalView: {
    top: hp(180),
    left: wp(70),
    width: wp(226),
    height: hp(264),
    backgroundColor: '#E2EDFE',
    borderRadius: 37,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    width: wp(28),
    height: hp(22),
    left: wp(20),
    top: hp(25),
  },
  container: {
    backgroundColor: '#F1F1F1',
    height: hp(390),
    width: wp(310),
    top: hp(20),
    borderRadius: 20,
  },
  buttontext: {
    position: 'absolute',
    width: wp(142),
    height: hp(33),
    left: wp(11),
    top: hp(0),
    fontFamily: 'Poppins-SemiBold',
    fontSize: rfv(14),
    lineHeight: hp(24),
    letterSpacing: wp(0.13),
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
