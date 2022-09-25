import React from 'react';
import { ThemeProvider } from 'styled-components';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

import theme from './styles/theme';
import { SignIn } from './screens/SignIn/SignIn';

export const MyApp = () => {

    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
    })

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                translucent
                barStyle='dark-content'
                backgroundColor={'transparent'}
            />

            <View
                style={{
                    backgroundColor: theme.COLORS.BG_WHITE,
                }}
            >
                <SignIn />
            </View>
        </ThemeProvider>
    )
}
