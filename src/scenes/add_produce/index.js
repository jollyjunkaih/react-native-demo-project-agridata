{
  /* Import Statements */
}
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
import DropDownPicker from 'react-native-dropdown-picker';
import {wp, hp, rfv} from '_utils';
import SearchableDropdown from 'react-native-searchable-dropdown';

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
    image: require('_assets/images/banana.png'),
  },
  {
    id: 'bd7awecbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Ginger',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/avacado.png'),
  },
  {
    id: 'bd7acb1e12ea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Kiwi',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/banana.png'),
  },
  {
    id: 'bd7ac12bea-c1b1-46c24322-aed5-3ad53abb28ba',
    name: 'Tangerine',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/banana.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-323ad53abb28ba',
    name: 'Orange',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/avacado.png'),
  },
  {
    id: 'bd7acb1ea23-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Apple',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/banana.png'),
  },
  {
    id: 'bd7ac12be233a-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Durian',
    type: 'Eureka',
    date: 'Feb 24 2021',
    weight: 80,
    image: require('_assets/images/banana.png'),
  },
];

{
  /* Recent Produce Layout */
}
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

{
  /* App Scene */
}
const AddProduce = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({item}) => <Item image={item.image} />;
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
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
          Add Produce
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
          height: hp(570),
          width: wp(360),
          alignItems: 'center',
          //backgroundColor: 'yellow',
        }}>
        {/* Recent Produce */}
        <View
          style={{
            width: wp(302),
            top: hp(15),
            height: hp(80),
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
        {/* Form */}
        <View
          style={{
            width: wp(300),
            height: hp(350),
            alignItems: 'center',
            marginTop: hp(25),
            backgroundColor: 'white',
            borderRadius: 20,
            elevation: 4,
          }}>
          {/* Searchable Dropdown */}
          <View style={{elevation: 5, marginTop: hp(10)}}>
            <SearchableDropdown
              onTextChange={(text) => console.log(text)}
              onItemSelect={(item) => alert(JSON.stringify(item))}
              containerStyle={{padding: 1, width: wp(250), borderRadius: 20}}
              //suggestion container style
              textInputStyle={{
                //inserted text style
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#FAF7F6',
              }}
              itemStyle={{
                //single dropdown item style
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#bbb',
                borderWidth: 1,
              }}
              itemTextStyle={{
                //text style of a single dropdown item
                color: '#222',
              }}
              itemsContainerStyle={{
                //items container style you can pass maxHeight
                //to restrict the items dropdown hieght
                maxHeight: '80%',
              }}
              items={DATA}
              //mapping of item array
              defaultIndex={2}
              //default selected item index
              placeholder="Produce"
              //place holder for the search input
              resetValue={false}
              //reset textInput Value with true and false state
              underlineColorAndroid="transparent"
            />
          </View>
          {/*Variety */}
          <View
            style={{
              height: hp(35),
              width: wp(300),
              marginTop: hp(10),
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Variety (Optional)"
              underlineColorAndroid="transparent"
              style={{
                height: hp(35),
                width: wp(270),
                borderWidth: 1,
                borderColor: '#F1F1F1',
                borderRadius: 20,
                textAlign: 'center',
                elevation: 2,
              }}
            />
          </View>
          {/* Quantity */}
          <View
            style={{
              height: hp(35),
              width: wp(300),
              marginTop: hp(10),
              flexDirection: 'row',
            }}>
            <TextInput
              keyboardType="number-pad"
              placeholder="Quantity"
              underlineColorAndroid="transparent"
              style={{
                height: hp(35),
                width: wp(150),
                borderWidth: 1,
                borderColor: '#F1F1F1',
                borderRadius: 20,
                textAlign: 'center',
                left: wp(13),
                elevation: 2,
              }}
            />
            <Text style={{left: wp(100), top: hp(10)}}>kg</Text>
          </View>
          {/* MOQ */}
          <View
            style={{
              height: hp(35),
              width: wp(300),
              marginTop: hp(10),
              flexDirection: 'row',
            }}>
            <TextInput
              keyboardType="number-pad"
              placeholder="MOQ"
              underlineColorAndroid="transparent"
              style={{
                height: hp(35),
                width: wp(150),
                borderWidth: 1,
                borderColor: '#F1F1F1',
                borderRadius: 20,
                textAlign: 'center',
                left: wp(13),

                elevation: 2,
              }}
            />
            <Text style={{left: wp(100), top: hp(8)}}>kg</Text>
          </View>
          {/* Price */}
          <View
            style={{
              height: hp(35),
              width: wp(300),
              marginTop: hp(10),
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
                elevation: 2,
              }}
            />
            <Text style={{left: wp(235), top: hp(10)}}>per kilo</Text>
          </View>
          {/* Dropdown */}
          <View
            style={{
              marginTop: hp(10),
              height: hp(110),
              width: wp(273),
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
              }}
              dropDownStyle={{elevation: 2}}
              style={{elevation: 2}}
              onChangeItem={(item) => console.log(item.label, item.value)}
            />
          </View>
        </View>
        {/* Buttons */}
        <TouchableOpacity
          style={{
            height: hp(33),
            width: wp(163),
            backgroundColor: '#CDDCF3',
            elevation: 3,
            borderRadius: 20,
            marginTop: hp(10),
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttontext}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: hp(33),
            width: wp(163),
            backgroundColor: '#CDDCF3',
            elevation: 3,
            borderRadius: 20,
            margin: hp(10),
          }}
          onPress={() => navigation.navigate('producelist')}>
          <Text style={styles.buttontext}>VIEW LIST</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default AddProduce;

{
  /* Styling */
}

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
