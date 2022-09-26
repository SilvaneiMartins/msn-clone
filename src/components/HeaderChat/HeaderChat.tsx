import React from 'react';
import { useTheme } from 'styled-components/native';
import { CaretLeft, DotsThreeOutlineVertical  } from 'phosphor-react-native';

import AvatarPng from '../../assets/avatar.png'
import {
    Container,
    Content,
    Avatar,
    ViewInfo,
    NameInfo,
    TextInfo,
    ButtonIcon,
    ViewIconButton,
} from './styles';

interface HeaderProps {
    name: string;
    info: string;
    rightIcon?: boolean;
    iconSize?: number;
}

export const HeaderChat = ({
    name,
    info,
    iconSize,
    rightIcon,
}: HeaderProps) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Content>
                <ViewIconButton>
                    <CaretLeft size={25} weight="light" color={COLORS.BACKGROUND} />
                </ViewIconButton>

                <Avatar
                    source={AvatarPng}
                />
                <ViewInfo>
                    <NameInfo>{name}</NameInfo>
                    <TextInfo>{info}</TextInfo>
                </ViewInfo>

                {rightIcon && (
                    <ButtonIcon>
                        <DotsThreeOutlineVertical
                            size={iconSize}
                            weight="light"
                            color={COLORS.WRITE_900}
                        />
                    </ButtonIcon>
                )}
            </Content>
        </Container>
    )
}
