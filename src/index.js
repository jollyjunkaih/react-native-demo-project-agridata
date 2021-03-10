import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Farm from '_scenes/farm';
import FDashboard from '_scenes/farmer-dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "farm" component = {Farm}/>
                <Stack.Screen name = "fdashboard" component = {FDashboard}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default App;