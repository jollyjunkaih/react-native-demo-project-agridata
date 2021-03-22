import {SearchBar} from 'react-native-elements';
import React from 'react';
import {View} from 'react-native';

export default class Marketplace extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={{width: 360, justifyContent: 'center', height: 60}}>
        <SearchBar
          platform="ios"
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          cancelButtonTitle={false}
          inputContainerStyle={{backgroundColor: 'red', width: 280, height: 35}}
          containerStyle={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  }
}
