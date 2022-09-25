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
    height: 268px;
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

`;
