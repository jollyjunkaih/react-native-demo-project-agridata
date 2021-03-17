import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import {wp, hp, rfv} from '_utils';
import SearchableDropdown from 'react-native-searchable-dropdown';
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
    image: require('_assets/images/banana.png'),
  },
];

const Item = ({image}) => (
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

const AddProduce = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({item}) => <Item image={item.image} />;
  return (
    <SafeAreaView>
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
      </Modal>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('farm')}
        underlayColor="white"
        activeOpacity={0.4}>
        <Image source={require('_assets/images/back.png')}></Image>
      </TouchableOpacity>
      <Text style={styles.header}>Add Produce</Text>
      <View
        style={{
          position: 'absolute',
          width: wp(302),
          height: hp(80),
          left: wp(29),
          top: hp(88),
          backgroundColor: '#F1F1F1',
          elevation: 3,
          borderRadius: 14,
        }}>
        <Text
          style={{
            position: 'absolute',
            width: wp(238),
            height: hp(33),
            left: wp(19),
            top: hp(10),
            fontFamily: 'Poppins-Regular',
            fontSize: rfv(13),
            lineHeight: hp(19),
            letterSpacing: wp(0.03),
            color: 'black',
          }}>
          You recently added:
        </Text>
        <View
          style={{
            position: 'absolute',
            display: 'flex',
            top: hp(30),
            left: wp(4),
          }}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          height: hp(340),
          width: wp(300),
          top: hp(180),
          left: wp(30),
          borderRadius: 20,
        }}>
        <View
          style={{
            top: hp(10),
            left: wp(10),
            height: hp(80),
            position: 'absolute',
            zIndex: 3,
            borderColor: 'blue',
            width: wp(300),
          }}>
          <SearchableDropdown
            onItemSelect={(item) => alert(JSON.stringify(item))}
            containerStyle={{zIndex: 5}}
            textInputStyle={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              width: wp(277),
              height: hp(30),
            }}
            itemStyle={{
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
              width: wp(277),
              height: hp(30),
            }}
            itemTextStyle={{color: '#222'}}
            itemsContainerStyle={{maxHeight: 100, zIndex: 5}}
            items={DATA}
            placeholder="Produce"
            resetValue={true}
            underlineColorAndroid="transparent"
            defaultIndex={5}
          />
        </View>
        <View style={styles.container}>
          <KeyboardAwareScrollView enableOnAndroid={true}>
            <View>
              <View
                style={{
                  height: hp(35),
                  width: wp(300),
                  top: hp(20),
                  //backgroundColor: 'red',
                }}>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Variety (Optional)"
                  underlineColorAndroid="transparent"
                  style={{
                    height: hp(35),
                    width: wp(270),
                    borderWidth: 1,
                    borderColor: '#F1F1F1',
                    borderRadius: 20,
                    textAlign: 'center',
                    left: wp(13),
                    position: 'absolute',
                  }}
                />
              </View>
              <View
                style={{
                  height: hp(35),
                  width: wp(230),
                  top: hp(40),
                  //backgroundColor: 'red',
                }}>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Quantity"
                  underlineColorAndroid="transparent"
                  style={{
                    position: 'absolute',
                    height: hp(35),
                    width: wp(150),
                    borderWidth: 1,
                    borderColor: '#F1F1F1',
                    borderRadius: 20,
                    textAlign: 'center',
                    left: wp(13),
                  }}
                />
              </View>
              <View
                style={{
                  left: wp(14),
                  top: hp(60),
                  height: hp(35),
                  width: wp(273),
                  zIndex: 3,
                }}>
                <DropDownPicker
                  items={[
                    {label: 'Self Delivery', value: 'item1'},
                    {label: 'Require PickUp', value: 'item2'},
                  ]}
                  placeholder="Logistics Options"
                  containerStyle={{
                    height: hp(35),
                    width: wp(273),
                    borderRadius: 20,
                  }}
                  onChangeItem={(item) => console.log(item.label, item.value)}
                />
              </View>
              <View
                style={{
                  height: hp(35),
                  width: wp(300),
                  top: hp(80),
                  //backgroundColor: 'red',
                }}>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Price"
                  underlineColorAndroid="transparent"
                  style={{
                    height: hp(35),
                    width: wp(150),
                    borderWidth: 1,
                    borderColor: '#F1F1F1',
                    borderRadius: 20,
                    textAlign: 'center',
                    left: wp(13),
                    position: 'absolute',
                  }}
                />
                <Text style={{position: 'absolute', left: wp(235), top: hp(8)}}>
                  per kilo
                </Text>
              </View>
              <View
                style={{
                  height: hp(35),
                  width: wp(300),
                  top: hp(100),
                  //backgroundColor: 'red',
                }}>
                <TextInput
                  keyboardType="number-pad"
                  placeholder="Minimum Order Quantity"
                  underlineColorAndroid="transparent"
                  style={styles.input3}
                />
                <Text style={{position: 'absolute', left: wp(260), top: hp(8)}}>
                  kg
                </Text>
              </View>
              <View
                style={{
                  top: hp(110),
                  height: 200,
                  backgroundColor: 'white',
                }}></View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          height: hp(75),
          width: wp(360),
          left: wp(99),
          top: hp(540),
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            height: hp(33),
            width: wp(163),
            backgroundColor: '#CDDCF3',
            elevation: 3,
            borderRadius: 20,
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttontext}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: hp(40),
            height: hp(33),
            width: wp(163),
            backgroundColor: '#CDDCF3',
            elevation: 3,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('producelist')}>
          <Text style={styles.buttontext}>VIEW LIST</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddProduce;
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
  input3: {
    position: 'absolute',
    height: hp(35),
    width: wp(230),
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 20,
    textAlign: 'center',
    left: wp(13),
  },
  container: {
    position: 'absolute',
    width: wp(302),
    height: hp(300),
    left: wp(0),
    top: hp(50),
    borderRadius: 20,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  header: {
    position: 'absolute',
    width: wp(312),
    height: hp(33),
    left: wp(24),
    top: hp(50),
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
  back: {
    position: 'absolute',
    width: wp(28),
    height: hp(22),
    left: wp(20),
    top: hp(35),
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
