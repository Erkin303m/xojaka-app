import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import commonOptions from './CommonOptions';

/* ------------- SCREENS ------------- */
import ScreenStructure from '../screens/ScreenStructure';
import LaunchScreen from "../screens/LaunchScreen";
/* ------------- SCREENS ------------- */

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{...commonOptions}} name='screenStructure' component={ScreenStructure}/>
            <Stack.Screen options={{...commonOptions}} name='launchScreen' component={LaunchScreen}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;
