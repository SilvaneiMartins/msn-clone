import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { SignIn } from '../screens/SignIn/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName='SignIn'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='SignIn' component={SignIn} />
        </Navigator>
    )
}