import React from 'react';
import { useTheme } from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AvatarPng from '../../assets/avatar.png'
import {
    Container,
    Content,
    Avatar,
    ViewInfo,
    NameInfo,
    TextInfo,
} from './styles';

interface HeaderProps {
    name: string;
    info: string;
    rightIcon?: boolean;
    iconSize?: number;
    iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export const Header = ({
    name,
    info,
    iconName,
    iconSize,
    rightIcon,
}: HeaderProps) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Content>
                <Avatar
                    source={AvatarPng}
                />
                <ViewInfo>
                    <NameInfo>{name}</NameInfo>
                    <TextInfo>{info}</TextInfo>
                </ViewInfo>

                {rightIcon && (
                    <MaterialCommunityIcons
                        name={iconName}
                        size={iconSize}
                        color={COLORS.DARK_BLUE}
                    />
                )}
            </Content>
        </Container>
    )
}
