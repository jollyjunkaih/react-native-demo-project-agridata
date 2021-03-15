import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import {wp, hp, rfv} from '_utils';

const HelloWorld = ({name}) => (
  <KeyboardAwareScrollView>
    <Text>Hello World {name}!</Text>

    <View>
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />

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
    </View>
    <TouchableOpacity style={styles.button}>
      <Text>Press Here</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        // position: 'absolute',
        // height: hp(33),
        // width: wp(163),
        // left: wp(99),
        // top: hp(570),
        backgroundColor: '#CDDCF3',
        // elevation: 3,
        borderRadius: 20,
      }}
      //   underlayColor="white"
      activeOpacity={0.5}>
      {/* <Text
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
      </Text> */}
    </TouchableOpacity>
  </KeyboardAwareScrollView>
);

export default HelloWorld;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
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
});
