import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
`;

export const Content = styled.View`
    flex: 1;
`;

export const ViewTitle = styled.View`
    padding: 15px;
    margin-left: 10px;
    align-items: center;
    flex-direction: row;
`;

export const TitleFavorito = styled.Text`
    font-size: 15px;
    margin-right: 5px;
    color: ${({ theme }) => theme.COLORS.BLACK_TEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGHT};
`;
