import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import { TextInputProps, TouchableOpacity } from 'react-native';
import {
    User,
    Eye,
    EyeSlash,
    LockSimple,
    Envelope
} from 'phosphor-react-native';

import { Container, InputContainer, Label } from './styles';

interface InputProps extends TextInputProps {
    label: string;
    iconSize?: number;
    iconColor?: string;
    iconLeft?: boolean;
    rightIcon?: boolean;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    secureTextEntry?: boolean;
    typeUser?: boolean;
    typeEmail?: boolean;
    typePassword?: boolean;
}

export const Input = ({
    label,
    iconColor,
    iconName,
    iconSize,
    iconLeft,
    rightIcon,
    secureTextEntry,
    typeUser,
    typeEmail,
    typePassword,
    ...rest
}: InputProps) => {
    const { COLORS } = useTheme();
    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <>
            <Label>{label}</Label>
            <Container>
                {iconLeft && (
                    <>
                        {typeUser && (
                            <User
                                size={20}
                                weight="light"
                                color={COLORS.BACKGROUND}
                                style={{ padding: 5 }}
                            />
                        )}
                        {typeEmail && (
                            <Envelope
                                size={20}
                                weight="light"
                                color={COLORS.BACKGROUND}
                                style={{ padding: 5 }}
                            />
                        )}
                        {typePassword && (
                            <LockSimple
                                size={20}
                                weight="light"
                                color={COLORS.BACKGROUND}
                                style={{ padding: 5 }}
                            />
                        )}
                    </>
                )}
                <InputContainer
                    {...rest}
                    secureTextEntry={secury}
                    underlineColorAndroid='transparent'
                />
                {rightIcon && (
                    <>
                        {secury ? (
                            <TouchableOpacity onPress={() => setSecury(!secury)}>
                                <Eye
                                    size={20}
                                    weight='light'
                                    color={COLORS.BACKGROUND}
                                    style={{ padding: 5 }}
                                />
                            </TouchableOpacity>
                        ): (

                            <TouchableOpacity onPress={() => setSecury(!secury)}>
                                 <EyeSlash
                                    size={20}
                                    weight='light'
                                    color={COLORS.BACKGROUND}
                                    style={{ padding: 5 }}
                                />
                            </TouchableOpacity>
                        )}
                    </>
                )}
            </Container>
        </>
    )
}
