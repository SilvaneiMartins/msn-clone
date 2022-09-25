import React from 'react';
import { useTheme } from 'styled-components/native';
import { GearSix } from 'phosphor-react-native';

import AvatarPng from '../../assets/avatar.png'
import {
    Container,
    Content,
    Avatar,
    ViewInfo,
    NameInfo,
    TextInfo,
    ButtonIcon,
} from './styles';

interface HeaderProps {
    name: string;
    info: string;
    rightIcon?: boolean;
    iconSize?: number;
}

export const Header = ({
    name,
    info,
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
                    <ButtonIcon>
                        <GearSix
                            size={iconSize}
                            weight="light"
                            color={COLORS.DARK_BLUE}
                        />
                    </ButtonIcon>
                )}
            </Content>
        </Container>
    )
}
