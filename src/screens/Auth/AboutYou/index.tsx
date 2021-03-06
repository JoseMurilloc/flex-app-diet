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
  ButtonFinallyText,
  HeaderSection,
  UnitWeight,
  UnitWeightText,
} from './styles'
import { useNavigation } from '@react-navigation/native';
import { SelectedGenre } from '../../../components/Form/SelectedGenre';
import { SelectedWeight } from '../../../components/Form/SelectedWeight';
import { TouchableOpacity } from 'react-native';
import theme from '../../../global/styles/theme';

export function AboutYou() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons 
            name="chevron-back" 
            size={25}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
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
          <HeaderSection>
            <TitleSection>Peso</TitleSection>
            <UnitWeight>
              <UnitWeightText>KG</UnitWeightText>
            </UnitWeight>
          </HeaderSection>
          <ContentSection>
            <SelectedWeight />
          </ContentSection>
        </Section>

        <ButtonFinally>
          <ButtonFinallyText>Finalizar</ButtonFinallyText>      
        </ButtonFinally>
      </Form>
    </Container>
  )
}