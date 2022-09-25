import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { List } from '../screens/List/List';
import { SignIn } from '../screens/SignIn/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName='List'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='List' component={List} />
            <Screen name='SignIn' component={SignIn} />
        </Navigator>
    )
}
