import { Pressable } from "react-native";
import styled from "styled-components/native";


export const Container = styled(Pressable)`
    width: 100%;
    height: 79px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;

export const ViewUser = styled.View`
    flex: 1;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    background-color: toamto;
`;

export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
`;

export const ViewInfo = styled.View`
    flex: 1;
    margin-left: 5px;
    justify-content: center;
    justify-content: center;
`;

export const ViewInfoIcon = styled.View`
    flex-direction: row;
`;

export const NameInfo = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.BLACK_TEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_EXTRA_BOLD};
`;

export const TextInfo = styled.Text`
    font-size: 11px;
    margin-left: 5px;
    color: ${({ theme }) => theme.COLORS.BLACK_TEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGHT};
`;

export const ViewIcons = styled.View`
    width: 20%;
    align-items: center;
    flex-direction: row;
`;

export const ViewQtdeMessage = styled.View`
    width: 31px;
    height: 24px;
    border-radius: 39px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE2};
`;

export const ViewNotification = styled.View`
    width: 25px;
    height: 25px;
    margin-left: 7px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.ATTENTION};
`;

export const ViewNotificationQtde = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BG_WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_BOLD};
`;
