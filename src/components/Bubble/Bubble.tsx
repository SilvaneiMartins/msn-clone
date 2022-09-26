import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import {
    Container,
    ContainerLeft,
    ContainerRight,
    TextMessenge,
} from './styles';

interface IBubbleProps {
    messange: string
    style?: StyleProp<ViewStyle>;
    messageLeft?: boolean;
    messageRight?: boolean;
}

export const Bubble = ({
    messange,
    style,
    messageLeft,
    messageRight,
}: IBubbleProps) => {
    return (
        <Container>
            {messageLeft && (
                <ContainerLeft
                    style={style}
                >
                    <TextMessenge>{messange}</TextMessenge>
                </ContainerLeft>
            )}
            {messageRight && (
                <ContainerRight
                    style={style}
                >
                    <TextMessenge>{messange}</TextMessenge>
                </ContainerRight>
            )}
        </Container>
    )
}
