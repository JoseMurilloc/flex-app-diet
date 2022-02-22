import React, { useState } from 'react';
import { Text } from 'react-native';
  import { toggleAnimatedSelectedGenre } from './animation';
import { 
  Container, 
  ButtonSelectGenre, 
  ButtonSelectGenreText, 
  ActiveGenre
} from './styles';

type ActiveGenre = {
  man: boolean;
  woman: boolean;
}

type SelectedGenreProps = 'M' | 'F';

export function SelectedGenre() {
  const [activeGenre, setActiveGenre] = useState<ActiveGenre>({
    man: true,
    woman: false
  })
  const [selectedActive, setSelectedActive] = useState<SelectedGenreProps>('M');

  const animation = toggleAnimatedSelectedGenre()
  
  async function handleToggleSelectedGenre() {

    const newManStatus = !activeGenre.man
    const newWomanStatus = !activeGenre.woman

    if (newManStatus) {
      setSelectedActive('M')
    } else {
      setSelectedActive('F')
    }
    
    setActiveGenre({ 
      man: newManStatus, 
      woman: newWomanStatus 
    })

    // if (nesetSelectedActivewManStatus)
    //   animation.transitionTo('man')
    // if(newWomanStatus)
    //   animation.transitionTo('woman')

    applyAnimation(newManStatus)
  }

  const applyAnimation = (man: boolean) => 
    man ? animation.transitionTo('man') : animation.transitionTo('woman')

  return (
    <Container>
      <ActiveGenre state={animation} transition={{type: 'timing'}}/>
      <ButtonSelectGenre onPress={handleToggleSelectedGenre}>
        <ButtonSelectGenreText activeGenre={activeGenre.man}>
          Masculino
        </ButtonSelectGenreText>
      </ButtonSelectGenre>
      <ButtonSelectGenre onPress={handleToggleSelectedGenre}>
        <ButtonSelectGenreText activeGenre={activeGenre.woman}>
          Feminino
        </ButtonSelectGenreText>
      </ButtonSelectGenre>
    </Container>
  );
}