import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { GearSix, SignOut } from 'phosphor-react-native';

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
    const navigation = useNavigation();

    const handleSignOut = () => {
        navigation.navigate('SignIn');
    }

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
                <ButtonIcon onPress={handleSignOut}>
                    <SignOut
                        size={30}
                        weight="light"
                        color={COLORS.DARK_BLUE}
                    />
                </ButtonIcon>
            </Content>
        </Container>
    )
}
