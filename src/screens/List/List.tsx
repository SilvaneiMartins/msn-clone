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
                iconSize={30}
                name='Silvanei Martins'
                info='A vida é boa e será bela .-.'
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Content>
                    <ViewTitle>
                        <TitleFavorito>Favorito</TitleFavorito>
                        <CaretUp size={15} weight="bold" color={COLORS.DARK_BLUE} />
                    </ViewTitle>

                    <Contato
                        leftIcon
                        qtdeMessage
                        qtdenofication={8}
                        name='Silvio Martins'
                        info='A sua maneira'
                    />
                    <Contato
                        leftIcon
                        name='Robertão'
                        info='Dormir na praça'
                        style={{
                            backgroundColor: COLORS.BG_WHITE
                        }}
                    />
                    <Contato
                        leftIcon
                        name='O bil'
                        info='Zoio de Lula'
                        style={{
                            backgroundColor: COLORS.BG_WHITE
                        }}
                    />
                    <Contato
                        leftIcon
                        qtdeMessage
                        notifications
                        qtdenofication={10}
                        name='Carlão'
                        info='Hoje a noite não tem luar'
                    />

                    <ViewTitle>
                        <TitleFavorito>Grupos</TitleFavorito>
                        <CaretUp size={15} weight="bold" color={COLORS.DARK_BLUE} />
                    </ViewTitle>

                    <Contato
                        qtdeMessage
                        leftIconUser
                        qtdenofication={24}
                        name='Grupo Futebol'
                        info='Eu, Roberto, Silvio'
                    />
                    <Contato
                        qtdeMessage
                        leftIconUser
                        notifications
                        qtdenofication={65}
                        name='Família'
                        style={{
                            backgroundColor: COLORS.BG_WHITE
                        }}
                        info='Eu, Ramires, Silvio, Cardoso'
                    />
                    <Contato
                        qtdeMessage
                        leftIconUser
                        qtdenofication={13}
                        name='Grupo Trabalho'
                        info='Eu, Robertao, Silvio, Cardoso'
                    />

                    <ViewTitle>
                        <TitleFavorito>Colega de Trabalho</TitleFavorito>
                        <CaretUp size={15} weight="bold" color={COLORS.DARK_BLUE} />
                    </ViewTitle>


                    <Contato
                        qtdeMessage
                        leftIconInfo
                        qtdenofication={1}
                        name='Silvio Martins'
                        info='Eu amo programação'
                    />
                    <Contato
                        qtdeMessage
                        leftIconInfo
                        notifications
                        qtdenofication={7}
                        name='Gestor de Equipe  '
                        info='Eu amo programação'
                        style={{
                            backgroundColor: COLORS.BG_WHITE
                        }}
                    />
                    <Contato
                        qtdeMessage
                        leftIconInfo
                        qtdenofication={2}
                        name='Cardoso Ribeiro'
                        info='UI/UE Experience'
                    />
                </Content>
            </ScrollView>
        </Container>
    )
}
