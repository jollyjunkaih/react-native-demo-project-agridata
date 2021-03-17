import React from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  View,
  KeyboardAvoidingViewBase,
} from 'react-native';
import {wp, hp, rfv} from '_utils';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
  const renderItem = ({item}) => <Item image={item.image} />;
  return (
    <KeyboardAvoidingView behavior="position" style={{flex: 1}} enabled>
      <SafeAreaView style={{flex: 1}}>
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

        <View style={styles.container}>
          <SearchableDropdown
            onItemSelect={(item) => alert(JSON.stringify(item))}
            textInputStyle={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              width: wp(277),
              height: hp(36),
              left: wp(13),
              top: hp(24),
            }}
            itemStyle={{
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
              width: wp(277),
              height: hp(36),
              left: wp(13),
              top: hp(24),
            }}
            itemTextStyle={{color: '#222'}}
            itemsContainerStyle={{maxHeight: 140}}
            items={DATA}
            placeholder="Produce"
            resetValue={true}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              borderColor: '#F1F1F1',
              position: 'absolute',
              width: wp(270),
              height: hp(36),
              left: wp(13),
              top: hp(80),
              borderWidth: 1,
              borderRadius: 20,
              textAlign: 'center',
              paddingTop: hp(12),
            }}
            placeholder="Variety (Optional)"
            underlineColorAndroid="transparent"
          />
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            placeholder="Quantity"
            underlineColorAndroid="transparent"
          />
          <DropDownPicker
            items={[
              {label: 'kgs', value: 'item1'},
              {label: 'tonnes', value: 'item2'},
            ]}
            placeholder="Units"
            containerStyle={{
              height: hp(35),
              width: wp(100),
              position: 'absolute',
              left: wp(190),
              top: hp(135),
              borderRadius: 20,
            }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />
          <DropDownPicker
            items={[
              {label: 'Self Delivery', value: 'item1'},
              {label: 'Require PickUp', value: 'item2'},
            ]}
            placeholder="Logistics Options"
            containerStyle={{
              height: hp(35),
              width: wp(273),
              position: 'absolute',
              left: wp(14),
              top: hp(190),
              borderRadius: 20,
            }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          <TextInput
            keyboardType="number-pad"
            style={styles.input2}
            placeholder="Price"
            underlineColorAndroid="transparent"
          />
          <DropDownPicker
            items={[
              {label: 'kgs', value: 'item1'},
              {label: 'tonnes', value: 'item2'},
            ]}
            placeholder="Units"
            containerStyle={{
              height: hp(35),
              width: wp(100),
              position: 'absolute',
              left: wp(190),
              top: hp(245),
              borderRadius: 20,
            }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />
          <TextInput
            keyboardType="number-pad"
            style={styles.input3}
            placeholder="Minimum Order Quantity"
            underlineColorAndroid="transparent"
          />
          <Text style={{position: 'absolute', left: wp(260), top: hp(310)}}>
            kg
          </Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            height: hp(33),
            width: wp(163),
            left: wp(99),
            top: hp(570),
            backgroundColor: '#CDDCF3',
            elevation: 3,
            borderRadius: 20,
          }}
          underlayColor="white"
          activeOpacity={0.5}>
          <Text
            style={{
              position: 'absolute',
              width: wp(142),
              height: hp(33),
              left: wp(11),
              top: hp(0),
              fontFamily: 'Poppins-Regular',
              fontSize: rfv(14),
              lineHeight: hp(24),
              letterSpacing: wp(0.13),
              alignItems: 'center',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddProduce;

const styles = StyleSheet.create({
  input3: {
    height: hp(35),
    width: wp(230),
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 20,
    textAlign: 'center',
    top: hp(199),
    left: wp(13),
  },
  input2: {
    height: hp(35),
    width: wp(150),
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 20,
    textAlign: 'center',
    top: hp(177),
    left: wp(13),
  },
  input: {
    height: hp(35),
    width: wp(150),
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 20,
    textAlign: 'center',
    top: hp(102),
    left: wp(13),
  },
  container: {
    position: 'absolute',
    width: wp(302),
    height: hp(368),
    left: wp(29),
    top: hp(192),
    elevation: 2,
    borderRadius: 20,
    backgroundColor: 'white',
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
