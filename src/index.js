import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Farm from '_scenes/farm';
import FDashboard from '_scenes/farmer-dashboard';
import Order from '_scenes/farmer-order';
import AddProduce from '_scenes/add_produce';
import {createStackNavigator} from '@react-navigation/stack';
import MarketPlace from '_scenes/marketplace';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="marketplace" component={MarketPlace} />
        <Stack.Screen name="addproduce" component={AddProduce} />
        <Stack.Screen name="fdashboard" component={FDashboard} />
        <Stack.Screen name="farm" component={Farm} />
        <Stack.Screen name="forder" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
