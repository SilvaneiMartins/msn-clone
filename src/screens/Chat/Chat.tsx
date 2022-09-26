import React from 'react';
import { View, Text } from 'react-native';

import { HeaderChat } from '../../components/HeaderChat/HeaderChat';
import {
    Container,
    Footer,
} from './styles';

export const Chat = () => {
    return (
        <>
            <HeaderChat
                rightIcon
                iconSize={30}
                name='Silvio Martins'
                info='A sua maneira'
            />
            <Container>

            </Container>
            <Footer>

            </Footer>
        </>
    )
}
