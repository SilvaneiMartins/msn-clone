import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

import Routes from './routes';
import theme from './styles/theme';

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
            <NavigationContainer>
                <StatusBar
                    translucent
                    barStyle='dark-content'
                    backgroundColor={'transparent'}
                />

                <View
                    style={{
                        // flex: 1,
                        backgroundColor: theme.COLORS.BG_WHITE,
                    }}
                >
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    )
}
