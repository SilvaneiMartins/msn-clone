import React from 'react';

import AvatarPng from '../../assets/avatar.png'
import {
    Container,
    ViewUser,
    Avatar,
    NameInfo,
    TextInfo,
    ViewInfo,
    ViewIcons,
    ViewNotification,
    ViewNotificationQtde,
} from './styles';

export const Contato = () => {
    return (
        <Container>
            <ViewUser>
                <Avatar
                    source={AvatarPng}
                />

                <ViewInfo>
                    <NameInfo>Silvanei Martins</NameInfo>
                    <TextInfo>After Dark - Mr Kitty</TextInfo>
                </ViewInfo>

                <ViewIcons>
                    <ViewNotification>
                        <ViewNotificationQtde>8</ViewNotificationQtde>
                    </ViewNotification>
                </ViewIcons>
            </ViewUser>
        </Container>
    )
}
