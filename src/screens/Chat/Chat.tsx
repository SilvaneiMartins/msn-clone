import React from 'react';
import {
    Smiley,
    TextAa,
    CaretDown,
    Paperclip,
    SmileyWink,
    SmileyNervous,
    PaperPlaneRight,
} from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Bubble } from '../../components/Bubble/Bubble';
import { HeaderChat } from '../../components/HeaderChat/HeaderChat';
import {
    Container,
    Footer,
    IconButtom,
    ViewEmotions,
    ViewIconButton,
    InputContainer,
    ViewInputFoorter,
    IconFooterButtom,
} from './styles';
import { ScrollView } from 'react-native';

export const Chat = () => {
    const { COLORS } = useTheme();

    return (
        <>
            <HeaderChat
                rightIcon
                iconSize={30}
                name='Silvio Martins'
                info='A sua maneira'
            />
            <Container>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Bubble
                        messageLeft
                        messange='It is a long established fact that a reader?'
                        style={{
                            backgroundColor: COLORS.WRITE_400,
                        }}
                    />
                    <Bubble
                        messageRight
                        messange='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
                        style={{
                            backgroundColor: COLORS.BLUE,
                        }}
                    />
                    <Bubble
                        messageLeft
                        messange='Contrary to popular belief, Lorem Ipsum is not simply random text.'
                        style={{
                            backgroundColor: COLORS.WRITE_400,
                        }}
                    />
                    <Bubble
                        messageLeft
                        messange='Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance?'
                        style={{
                            backgroundColor: COLORS.WRITE_400,
                        }}
                    />
                    <Bubble
                        messageRight
                        messange='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
                        style={{
                            backgroundColor: COLORS.BLUE,
                        }}
                    />
                    <Bubble
                        messageLeft
                        messange='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                        style={{
                            backgroundColor: COLORS.WRITE_400,
                        }}
                    />
                </ScrollView>
            </Container>
            <Footer>
                <ViewEmotions>
                    <IconButtom>
                        <Paperclip size={25} weight="light" />
                    </IconButtom>

                    <ViewIconButton>
                        <Smiley size={25} weight="light" />
                        <IconButtom>
                            <CaretDown size={25} weight="light" />
                        </IconButtom>
                    </ViewIconButton>

                    <ViewIconButton>
                        <SmileyWink size={25} weight="light" />
                        <IconButtom>
                            <CaretDown size={25} weight="light" />
                        </IconButtom>
                    </ViewIconButton>

                    <ViewIconButton>
                        <SmileyNervous size={25} weight="light" />
                        <IconButtom>
                            <CaretDown size={25} weight="light" />
                        </IconButtom>
                    </ViewIconButton>

                    <IconButtom>
                        <TextAa size={25} weight="light" />
                    </IconButtom>
                </ViewEmotions>
                <ViewInputFoorter>
                    <InputContainer
                        placeholder='Escreva sua mensagem aqui...'
                    />
                    <IconFooterButtom>
                        <PaperPlaneRight size={25} weight="bold" />
                    </IconFooterButtom>
                </ViewInputFoorter>
            </Footer>
        </>
    )
}
