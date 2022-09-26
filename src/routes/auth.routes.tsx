import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Chat } from '../screens/Chat/Chat';
import { List } from '../screens/List/List';
import { SignIn } from '../screens/SignIn/SignIn';
import { SignUp } from '../screens/SignUp/SignIn';
import { ForgotPassword } from '../screens/ForgotPassword/ForgotPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName='SignIn'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='List' component={List} />
            <Screen name='Chat' component={Chat} />
            <Screen name='SignIn' component={SignIn} />
            <Screen name='SignUp' component={SignUp} />
            <Screen name='ForgotPassword' component={ForgotPassword} />
        </Navigator>
    )
}
