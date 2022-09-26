import React from 'react';
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
    ViewForgotPassword,
    TitleForgtPassword,
    ButtonForgotPassword,
} from './styles';

export const SignIn = () => {
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('List');
    }

    return (
        <Container>
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
                        label='E-mail'
                        iconSize={20}
                        autoCorrect={false}
                        autoCapitalize='none'
                        iconName='mail-outline'
                        secureTextEntry={false}
                        keyboardType='email-address'
                        placeholder='Digite sua senha'
                    />

                    <Input
                        iconLeft
                        rightIcon
                        label='Senha'
                        iconSize={20}
                        secureTextEntry
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='default'
                        iconName='lock-closed-outline'
                        placeholder='Digite sua senha'
                    />
                </FormInputs>

                <ViewForgotPassword>
                    <ButtonForgotPassword>
                        <TitleForgtPassword>Recuperar a senha?</TitleForgtPassword>
                    </ButtonForgotPassword>
                </ViewForgotPassword>

                <ViewButton>
                    <ButtonEntrar
                        onPress={handleSignIn}
                    >
                        <ButtonTitle>Entrar</ButtonTitle>
                    </ButtonEntrar>
                </ViewButton>
            </Content>

            <ViewFooter>
                <ButtonFotter>
                    <TitleButtonFooter>Não tem uma conta?</TitleButtonFooter>
                    <InfoButtonFooter>Cadastrar-se</InfoButtonFooter>
                </ButtonFotter>
            </ViewFooter>
        </Container>
    )
}
