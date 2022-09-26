import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 0px 15px;
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
`;

export const Footer = styled.View`
    width: 100%;
    height: 115px;
    background-color: ${({ theme }) => theme.COLORS.VERY_LIGHT_BLUE};
`;

export const ViewEmotions = styled.View`
    margin-top: 5px;
    margin-left: 25px;
    margin-right: 35px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ViewInputFoorter = styled.View`
    padding: 10px;
    flex-direction: row;
`;

export const IconButtom = styled.TouchableOpacity`
    padding: 5px;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.TextInput`
    flex: 1;
    border: 0;
    padding-left: 20px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
`;

export const ViewIconButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IconFooterButtom = styled.TouchableOpacity`
    padding: 10px;
    align-items: center;
    justify-content: center;
`;
