import React from 'react';
import { ScrollView, Text } from 'react-native';
import { CaretUp } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header/Header';
import { Contato } from '../../components/Contato/Contato';
import {
    Container,
            Content,
            ViewTitle,
            TitleFavorito,
} from './styles';

export const List = () => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Header
                rightIcon
                iconSize={40}
                name='Silvanei Martins'
                info='A vida é boa e será bela .-.'
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Content>
                    <ViewTitle>
                        <TitleFavorito>Favorito</TitleFavorito>
                        <CaretUp size={15} weight="bold" color={COLORS.DARK_BLUE}  />
                    </ViewTitle>

                    <Contato />
                    <Contato />
                    <Contato />
                    <Contato />

                    <ViewTitle>
                        <TitleFavorito>Grupos</TitleFavorito>
                        <CaretUp size={15} weight="bold" color={COLORS.DARK_BLUE}  />
                    </ViewTitle>

                    <Contato />
                    <Contato />
                    <Contato />
                    <Contato />

                    <ViewTitle>
                        <TitleFavorito>Colega de Trabalho</TitleFavorito>
                        <CaretUp size={15} weight="bold" color={COLORS.DARK_BLUE}  />
                    </ViewTitle>

                    <Contato />
                    <Contato />
                    <Contato />
                </Content>
            </ScrollView>
        </Container>
    )
}
