import React, { useState } from 'react';
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { BellSimpleRinging, MusicNoteSimple, Info, User } from 'phosphor-react-native';

import AvatarPng from '../../assets/avatar.png'
import {
    Container,
    ViewUser,
    Avatar,
    NameInfo,
    TextInfo,
    ViewInfo,
    ViewIcons,
    ViewInfoIcon,
    ViewQtdeMessage,
    ViewNotification,
    ViewNotificationQtde,
} from './styles';

interface IContatoProps {
    name: string;
    info: string;
    qtdeMessage?: boolean;
    notifications?: boolean;
    qtdenofication?: number;
    style?: StyleProp<ViewStyle>
    leftIcon?: boolean;
    leftIconUser?: boolean;
    leftIconInfo?: boolean;
}

export const Contato = ({
    name,
    info,
    leftIcon,
    qtdeMessage,
    leftIconInfo,
    leftIconUser,
    notifications,
    qtdenofication,
    style,
}: IContatoProps) => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const GoChat = () => {
        navigation.navigate('Chat');
    }

    return (
        <Container
            style={style}
            onPress={GoChat}
        >
            <ViewUser>
                <Avatar
                    source={AvatarPng}
                />

                <ViewInfo>
                    <NameInfo>{name}</NameInfo>
                    <ViewInfoIcon>
                        {leftIcon && (
                            <MusicNoteSimple
                                size={16}
                                weight="bold"
                            />
                        )}
                        {leftIconUser && (
                            <User
                                size={16}
                                weight="bold"
                            />
                        )}
                        {leftIconInfo && (
                            <Info
                                size={16}
                                weight="bold"
                            />
                        )}
                        <TextInfo>{info}</TextInfo>
                    </ViewInfoIcon>
                </ViewInfo>

                <ViewIcons>
                    {qtdeMessage && (
                        <TouchableOpacity>
                            <ViewQtdeMessage>
                                <ViewNotificationQtde>{qtdenofication}</ViewNotificationQtde>
                            </ViewQtdeMessage>
                        </TouchableOpacity>
                    )}
                    {notifications && (
                        <TouchableOpacity>
                            <ViewNotification>
                                <BellSimpleRinging
                                    size={18}
                                    weight="bold"
                                    color={COLORS.BG_WHITE}
                                />
                            </ViewNotification>
                        </TouchableOpacity>
                    )}
                </ViewIcons>
            </ViewUser>
        </Container>
    )
}
