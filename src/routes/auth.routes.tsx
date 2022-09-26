import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Chat } from '../screens/Chat/Chat';
import { List } from '../screens/List/List';
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
            <Screen name='List' component={List} />
            <Screen name='Chat' component={Chat} />
        </Navigator>
    )
}
