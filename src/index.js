import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Farm from '_scenes/farm';
import FDashboard from '_scenes/farmer-dashboard';
import FOrder from '_scenes/farmer-order';
import ROrder from '_scenes/retailer-order';
import AddProduce from '_scenes/add_produce';
import ProduceList from '_scenes/produce-list';
import Wallet from '_scenes/wallet';
import RDashboard from '_scenes/retailer-dashboard';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="rorder" component={ROrder} />
        <Stack.Screen name="forder" component={FOrder} />
        <Stack.Screen name="frashboard" component={RDashboard} />
        <Stack.Screen name="fdashboard" component={FDashboard} />
        <Stack.Screen name="addproduce" component={AddProduce} />

        <Stack.Screen name="wallet" component={Wallet} />
        <Stack.Screen name="producelist" component={ProduceList} />
        <Stack.Screen name="farm" component={Farm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
