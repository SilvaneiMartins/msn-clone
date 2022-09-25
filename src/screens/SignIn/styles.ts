import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    /* flex: 1; */
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
`;

export const ViewHeader = styled.View`
    width: 100%;
    height: 280px;
`;

export const ImageHeader = styled.Image`
    width: 100%;
    height: 280px;
`;

export const ViewLogo = styled.View`
    left: 0;
    right: 0;
    top: 47px;
    width: 100%;
    height: 146px;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const ImageLogo = styled.Image`
    width: 146px;
    height: 146px;
`;

export const Title = styled.Text`
    font-size: 24px;
    margin-left: 10px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS_EXTRA_BOLD};
`;

export const Content = styled.View`
    padding: 20px;
`;

export const FormInputs = styled.View`
    padding: 10px 0;
    justify-content: center;
`;

export const ViewForgotPassword = styled.View`
    width: 100%;
    padding: 15px 0;
    margin-top: 10px;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const TitleForgtPassword = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_BOLD};
`;

export const ButtonForgotPassword = styled(Pressable)``;

export const ViewButton = styled.View`
    width: 100%;
    height: 60px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.VERY_LIGHT_BLUE};
`;

export const ButtonEntrar = styled.TouchableOpacity`
    width: 100%;
    height: 55px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const ViewFooter = styled.View`
    width: 100%;
    height: 60px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFotter = styled(Pressable)`
    flex-direction: row;
`;

export const TitleButtonFooter = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM};
`;

export const InfoButtonFooter = styled.Text`
    font-size: 16px;
    margin-left: 5px;
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_EXTRA_BOLD};
`;
