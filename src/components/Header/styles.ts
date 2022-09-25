import { Platform } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 164px;
    padding-top: 25px;
    position: absolute;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;

export const Content = styled.View`
    width: 100%;
    padding: 10px 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
`;

export const ViewInfo = styled.View`
    flex: 1;
    margin-left: 5px;
    justify-content: center;
`;

export const NameInfo = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.BLACK_TEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_EXTRA_BOLD};
`;

export const TextInfo = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.BLACK_TEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGHT};
`;
