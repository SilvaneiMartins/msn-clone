import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { Container, InputContainer, Label } from './styles';

interface InputProps extends TextInputProps {
    label: string;
    iconSize?: number;
    iconColor?: string;
    iconLeft?: boolean;
    rightIcon?: boolean;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    secureTextEntry?: boolean;
}

export const Input = ({
    label,
    iconColor,
    iconName,
    iconSize,
    iconLeft,
    rightIcon,
    secureTextEntry,
    ...rest
}: InputProps) => {
    const { COLORS } = useTheme();
    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <>
            <Label>{label}</Label>
            <Container>
                {iconLeft && (
                    <Ionicons
                        name={iconName}
                        size={iconSize}
                        color={iconColor || COLORS.BACKGROUND}
                        style={{ padding: 5 }}
                    />
                )}
                <InputContainer
                    {...rest}
                    secureTextEntry={secury}
                    underlineColorAndroid='transparent'
                />
                {rightIcon && (
                    <TouchableOpacity onPress={() => setSecury(!secury)}>
                        <Ionicons
                            name={secury ? 'eye-outline' : 'eye-off-outline'}
                            size={iconSize}
                            color={iconColor || COLORS.BACKGROUND}
                            style={{ padding: 5 }}
                        />
                    </TouchableOpacity>
                )}
            </Container>
        </>
    )
}
