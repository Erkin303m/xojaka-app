import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import commonOptions from './CommonOptions';

/* ------------- SCREENS ------------- */
import LaunchScreen from "../screens/LaunchScreen";
import Enter from '../screens/Entering/Enter';
import CodePage from "../screens/codePage/CodePage"
/* ------------- SCREENS ------------- */

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen options={{...commonOptions}} name='screenStructure' component={ScreenStructure}/> */}
            {/* <Stack.Screen options={{ ...commonOptions }} name='swiper' component={Swiper} /> */}
            <Stack.Screen options={{ ...commonOptions }} name='enter' component={Enter} />
            <Stack.Screen options={{ ...commonOptions }} name='code' component={CodePage} />
            <Stack.Screen options={{ ...commonOptions }} name='launchScreen' component={LaunchScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
