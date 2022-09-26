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
import { ScrollView } from 'react-native';

export const SignUp = () => {
    const navigation = useNavigation();

    const handleSignIn = () => {
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
                    <Title>Cadastro</Title>
                    <FormInputs>
                        <Input
                            iconLeft
                            typeUser
                            label='Nome'
                            iconSize={20}
                            autoCorrect={false}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            keyboardType='email-address'
                            placeholder='Digite seu nome'
                        />

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

                        <Input
                            iconLeft
                            rightIcon
                            typePassword
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

                    <ViewButton>
                        <ButtonEntrar>
                            <ButtonTitle>Cadastrar</ButtonTitle>
                        </ButtonEntrar>
                    </ViewButton>
                </Content>

                <ViewFooter>
                    <ButtonFotter
                        onPress={handleSignIn}
                    >
                        <TitleButtonFooter>Já tenho conta?</TitleButtonFooter>
                        <InfoButtonFooter>Entrar</InfoButtonFooter>
                    </ButtonFotter>
                </ViewFooter>
            </ScrollView>
        </Container>
    )
}
