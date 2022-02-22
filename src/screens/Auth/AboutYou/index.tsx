import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { getHeightStatusBar } from '../../../commons/getHeightStatusBar'
import { 
  Container,
  Header,
  TitleHeader,
  Form,
  Section,
  TitleSection,
  ContentSection,
  ButtonFinally,
  ButtonFinallyText
} from './styles'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectedGenre } from '../../../components/Form/SelectedGenre';

export default function AboutYou() {
  const {STATUSBAR_HEIGHT} = getHeightStatusBar()
  const navigation = useNavigation();

  return (
    <Container statusBarHeight={STATUSBAR_HEIGHT}>
      <Header>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Ionicons 
            name="chevron-back" 
            size={25}
            color="#1D115C"
          />
        </TouchableWithoutFeedback>
        <TitleHeader>Sobre você</TitleHeader>
      </Header>

      <Form>
        <Section>
          <TitleSection>Gênero</TitleSection>
          <ContentSection>
            <SelectedGenre />
          </ContentSection>
        </Section>

        <Section>
          <TitleSection>Altura</TitleSection>
          <ContentSection />
        </Section>

        <Section>
          <TitleSection>Peso</TitleSection>
          <ContentSection />
        </Section>

        <ButtonFinally>
          <ButtonFinallyText>Finalizar</ButtonFinallyText>      
        </ButtonFinally>
      </Form>
    </Container>
  )
}