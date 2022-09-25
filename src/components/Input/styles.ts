import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 50px;
    padding: 0 12px;
    margin-left: 5px;
    border-radius: 40px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.INPUT};
`;

export const InputContainer = styled.TextInput`
    flex: 1;
    border: 0;
    height: 38px;
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGHT};
`;

export const Label = styled.Text`
    font-size: 14px;
    margin-left: 10px;
    margin-top: 5px;
    color: ${({ theme }) => theme.COLORS.BLACK_TEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_BOLD};
`;
