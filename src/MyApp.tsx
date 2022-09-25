import React from 'react';
import { ThemeProvider } from 'styled-components';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Routes from './routes';
import theme from './styles/theme';

const MyApp = () => {
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
                        flex: 1,
                        backgroundColor: theme.COLORS.BG_WHITE
                    }}
                >
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default MyApp;
