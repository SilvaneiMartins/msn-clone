import styled from "styled-components/native";

export const Container = styled.View`
    padding: 5px;
    justify-content: space-between;
`;

export const ContainerLeft = styled.View`
    width: 240px;
    padding: 5px;
    justify-content: center;
    border-top-left-radius: 0px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 16px;
`;

export const ContainerRight = styled.View`
    width: 240px;
    padding: 5px;
    margin-left: auto;
    justify-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 0px;
`;

export const TextMessenge = styled.Text`
    font-size: 15px;
    margin-left: 15px;
    color: ${({ theme }) => theme.COLORS.BLACK_TEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGHT};
`;
