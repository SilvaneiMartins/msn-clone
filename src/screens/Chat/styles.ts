import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BG_WHITE};
`;

export const Footer = styled.View`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.COLORS.VERY_LIGHT_BLUE};
`;
