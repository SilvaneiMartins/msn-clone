import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/msnlogo.png';
import BgWaves from '../../assets/bgwaves.png';
import { Input } from '../../components/Input/Input';
import {
    Title,
    Content,
    ViewLogo,
    ImageLogo,
    Container,
    FormInputs,
    ViewHeader,
    ImageHeader,
    ViewButton,
    ButtonTitle,
    ButtonEntrar,
    ViewFooter,
    ButtonFotter,
    InfoButtonFooter,
    TitleButtonFooter,
} from './styles';

export const ForgotPassword = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('SignIn');
    }

    return (
        <Container>
            <ScrollView>
                <ViewHeader>
                    <ImageHeader
                        source={BgWaves}
                        resizeMode='cover'
                    />
                    <ViewLogo>
                        <ImageLogo
                            source={Logo}
                            resizeMode='contain'
                        />
                    </ViewLogo>
                </ViewHeader>
                <Content>
                    <Title>Bem vindo de volta!</Title>
                    <FormInputs>
                        <Input
                            iconLeft
                            typeEmail
                            label='E-mail'
                            iconSize={20}
                            autoCorrect={false}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            keyboardType='email-address'
                            placeholder='Digite sua senha'
                        />
                    </FormInputs>
                    <ViewButton>
                        <ButtonEntrar>
                            <ButtonTitle>Recuperar Senha</ButtonTitle>
                        </ButtonEntrar>
                    </ViewButton>
                </Content>
                <ViewFooter>
                    <ButtonFotter onPress={handleLogin}>
                        <TitleButtonFooter>Não quer recuperar senha?</TitleButtonFooter>
                        <InfoButtonFooter>Voltar</InfoButtonFooter>
                    </ButtonFotter>
                </ViewFooter>
            </ScrollView>
        </Container>
    )
}
