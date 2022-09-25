import React from 'react';

import { Header } from '../../components/Header/Header';
import { Container } from './styles';

export const List = () => {
    return (
        <Container>
            <Header
                rightIcon
                iconSize={25}
                name='Silvanei Martins'
                info='a dança da vida .-.'
                iconName='mdiCogOutline'
            />
        </Container>
    )
}
