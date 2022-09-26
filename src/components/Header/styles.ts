import { Platform } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 134px;
    padding-top: 25px;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};

    border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
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

export const ButtonIcon = styled.TouchableOpacity`
    padding: 5px;
    align-items: center;
    /* margin-right: 5px; */
    justify-content: center;
`;
